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

    var filterMenu = document.querySelector('.portfolio-menu');

    function applyProjectFilters() {
      if (!filterMenu) return;

      var selectedByGroup = Array.prototype.map.call(
        filterMenu.querySelectorAll('.portfolio-filter-panel'),
        function (panel) {
          var selectedValues = Array.prototype.map.call(
            panel.querySelectorAll('input[name="shuffle-filter"]:checked'),
            function (input) { return input.value; }
          );
          var allButton = panel.querySelector('[data-filter-all]');
          if (allButton) allButton.classList.toggle('active', selectedValues.length === 0);
          return selectedValues;
        }
      ).filter(function (values) { return values.length > 0; });

      var allInput = filterMenu.querySelector('.portfolio-filter-all-input');
      if (allInput) allInput.checked = selectedByGroup.length === 0;

      if (selectedByGroup.length === 0) {
        myShuffle.filter('all');
        return;
      }

      myShuffle.filter(function (element) {
        var groups;
        try {
          groups = JSON.parse(element.getAttribute('data-groups') || '[]');
        } catch (error) {
          groups = [];
        }

        return selectedByGroup.every(function (selectedValues) {
          return selectedValues.some(function (value) {
            return groups.indexOf(value) !== -1;
          });
        });
      });
    }

    jQuery('input[name="shuffle-filter"]').on('change', applyProjectFilters);
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

  // Project page image popup
  $('.portfolio-single-page img').each(function () {
    var $img = $(this);
    var src = $img.attr('src');

    if (!src || $img.closest('a').length) {
      return;
    }

    var title = $img.attr('alt') || $img.closest('.project-reference-item, .project-image-only-wrap').find('.project-reference-caption').text();
    $img.wrap($('<a />', {
      class: 'project-image-popup',
      href: src,
      title: $.trim(title)
    }));
  });

  $('.portfolio-single-page').magnificPopup({
    delegate: '.project-image-popup',
    type: 'image',
    gallery: {
      enabled: true
    },
    closeOnContentClick: false,
    closeOnBgClick: true,
    showCloseBtn: true,
    fixedContentPos: true,
    fixedBgPos: true,
    image: {
      titleSrc: 'title'
    }
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
