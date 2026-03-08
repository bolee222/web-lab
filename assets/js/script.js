// Preloader js
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

$(document).ready(function () {
  'use strict';

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });

    var filterGroup = document.querySelector('.project-filter-group');
    if (filterGroup) {
      var filterStorageKey = 'project-filter-order';
      var draggedFilter = null;

      function filterLabels() {
        return Array.from(filterGroup.querySelectorAll('.shuffle-filter-option'));
      }

      function saveFilterOrder() {
        var order = filterLabels().map(function (label) {
          return label.dataset.filterValue;
        });
        window.localStorage.setItem(filterStorageKey, JSON.stringify(order));
      }

      function restoreFilterOrder() {
        var savedOrder = window.localStorage.getItem(filterStorageKey);
        if (!savedOrder) {
          return;
        }

        var order;
        try {
          order = JSON.parse(savedOrder);
        } catch (error) {
          return;
        }

        var labelsByValue = {};
        filterLabels().forEach(function (label) {
          labelsByValue[label.dataset.filterValue] = label;
        });

        order.forEach(function (value) {
          var label = labelsByValue[value];
          if (label) {
            filterGroup.appendChild(label);
            delete labelsByValue[value];
          }
        });

        Object.keys(labelsByValue).forEach(function (value) {
          filterGroup.appendChild(labelsByValue[value]);
        });
      }

      function bindDragAndDrop(label) {
        label.addEventListener('dragstart', function (event) {
          draggedFilter = label;
          label.classList.add('is-dragging');
          event.dataTransfer.effectAllowed = 'move';
        });

        label.addEventListener('dragend', function () {
          label.classList.remove('is-dragging');
          draggedFilter = null;
          saveFilterOrder();
        });

        label.addEventListener('dragover', function (event) {
          event.preventDefault();
          if (!draggedFilter || draggedFilter === label) {
            return;
          }

          var rect = label.getBoundingClientRect();
          var shouldInsertBefore = event.clientX < rect.left + (rect.width / 2);
          if (shouldInsertBefore) {
            filterGroup.insertBefore(draggedFilter, label);
          } else {
            filterGroup.insertBefore(draggedFilter, label.nextSibling);
          }
        });

        label.addEventListener('drop', function (event) {
          event.preventDefault();
        });
      }

      restoreFilterOrder();
      filterLabels().forEach(bindDragAndDrop);
    }
  }

  $('.portfolio-single-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  // Magnific Popup Image
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: true,
    fixedBgPos: true
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Turn cloaked e-mail addresses into clickable mailto links
  let emailSpans = document.getElementsByClassName("cloaked-e-mail");

  for (let emailSpan of emailSpans) {
    let emailLink = document.createElement("a");
    let emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
    emailLink.href = "mailto:" + emailAddress;
    emailLink.innerText = emailAddress;
    emailSpan.parentElement.insertBefore(emailLink, emailSpan);
    emailSpan.parentElement.removeChild(emailSpan)
  }
});
