// Put custom JavaScript code in this file
(function () {
  var playerFrames = document.querySelectorAll("[data-project-youtube-player]");
  var posterImages = document.querySelectorAll("[data-fallback-src]");
  var posterButtons = document.querySelectorAll("[data-project-youtube-poster]");

  if (!playerFrames.length) {
    return;
  }

  var pendingPlayers = [];
  var previousReady = window.onYouTubeIframeAPIReady;

  posterImages.forEach(function (image) {
    image.addEventListener("error", function () {
      if (image.src !== image.dataset.fallbackSrc) {
        image.src = image.dataset.fallbackSrc;
      }
    });
  });

  posterButtons.forEach(function (poster) {
    poster.addEventListener("click", function () {
      poster.dataset.playRequested = "true";
    });
  });

  function formatTime(seconds) {
    if (!seconds || !isFinite(seconds)) {
      return "0:00";
    }

    var wholeSeconds = Math.floor(seconds);
    var minutes = Math.floor(wholeSeconds / 60);
    var remainingSeconds = wholeSeconds % 60;
    return minutes + ":" + String(remainingSeconds).padStart(2, "0");
  }

  function updateControls(player, controls) {
    var timeline = controls.querySelector("[data-project-youtube-timeline]");
    var current = controls.querySelector("[data-project-youtube-current]");
    var duration = controls.querySelector("[data-project-youtube-duration]");

    if (!timeline || !current || !duration || !player.getDuration) {
      return;
    }

    var videoDuration = player.getDuration() || 0;
    var currentTime = player.getCurrentTime() || 0;

    duration.textContent = formatTime(videoDuration);
    current.textContent = formatTime(currentTime);
    timeline.value = videoDuration ? (currentTime / videoDuration) * 100 : 0;
  }

  function bindPlayer(frame) {
    var controls = document.querySelector('[data-project-youtube-controls][for="' + frame.id + '"]');
    var poster = document.querySelector('[data-project-youtube-poster][for="' + frame.id + '"]');
    var playerWrap = frame.closest(".project-video-player");

    if (!controls || !window.YT || !window.YT.Player) {
      return;
    }

    var toggle = controls.querySelector("[data-project-youtube-toggle]");
    var timeline = controls.querySelector("[data-project-youtube-timeline]");
    var player;
    var updateTimer;

    function activateVideo() {
      if (playerWrap) {
        playerWrap.classList.add("is-video-active");
      }

      if (poster) {
        poster.setAttribute("aria-hidden", "true");
      }
    }

    function setPlaying(isPlaying) {
      if (!toggle) {
        return;
      }

      toggle.textContent = isPlaying ? "Pause" : "Play";
      toggle.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
    }

    player = new window.YT.Player(frame.id, {
      events: {
        onReady: function () {
          if (toggle) {
            toggle.disabled = false;
          }

          if (timeline) {
            timeline.disabled = false;
          }

          updateControls(player, controls);
          updateTimer = window.setInterval(function () {
            updateControls(player, controls);
          }, 500);

          if (poster && poster.dataset.playRequested === "true") {
            activateVideo();
            player.playVideo();
          }
        },
        onStateChange: function (event) {
          setPlaying(event.data === window.YT.PlayerState.PLAYING);

          if (event.data === window.YT.PlayerState.ENDED) {
            setPlaying(false);
            updateControls(player, controls);
          }
        }
      }
    });

    if (toggle) {
      toggle.disabled = true;
      toggle.addEventListener("click", function () {
        var state = player.getPlayerState();

        if (state === window.YT.PlayerState.PLAYING) {
          player.pauseVideo();
        } else {
          activateVideo();
          player.playVideo();
        }
      });
    }

    if (poster) {
      poster.addEventListener("click", function () {
        activateVideo();
        player.playVideo();
      });
    }

    if (timeline) {
      timeline.disabled = true;
      timeline.addEventListener("input", function () {
        var videoDuration = player.getDuration ? player.getDuration() : 0;

        if (videoDuration) {
          player.seekTo((Number(timeline.value) / 100) * videoDuration, true);
          updateControls(player, controls);
        }
      });
    }

    window.addEventListener("beforeunload", function () {
      if (updateTimer) {
        window.clearInterval(updateTimer);
      }
    });
  }

  window.onYouTubeIframeAPIReady = function () {
    if (typeof previousReady === "function") {
      previousReady();
    }

    pendingPlayers.forEach(bindPlayer);
    pendingPlayers = [];
  };

  playerFrames.forEach(function (frame) {
    pendingPlayers.push(frame);
  });

  if (window.YT && window.YT.Player) {
    window.onYouTubeIframeAPIReady();
    return;
  }

  if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
    var script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  }
})();
