(function () {
  "use strict"

  const iframe = document.querySelector("iframe");
  const player = new Vimeo.Player(iframe);
  const btn_next = document.querySelector(".uc-school-lesson-controls-btn--right");
  const btn_complete = document.querySelector(".wpc-button-complete.wpc-complete");
  const btn_fullscreen = document.querySelector("button.fullscreen");

  if (player) {

  }

  player.on("ended", function () {
    alert("You have played the video")
  });



  getStarted = () => {
    player.play().then(function () {
      // The video is playing
    }).catch(function (error) {
    });
  }
})();
