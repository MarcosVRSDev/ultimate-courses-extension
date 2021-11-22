(function () {
    "use strict"

    const iframe = document.querySelector("iframe");
    const player = new Vimeo.Player(iframe);
    const btn_next = document.querySelector(".uc-school-lesson-controls-btn--right");
    const btn_complete = document.querySelector(".wpc-button-complete.wpc-complete");
    const action_bar = document.querySelector(".uc-school-lesson-controls");

    const getStarted = () => {
        player.play().then(function () {
            fullscreen_btn.click();
            fullscreen_btn.click();
            fullscreen_btn.click();
        });
    }

    const initFullscreenBtn = () => {
        let fullscreen_btn = document.createElement("button");

        fullscreen_btn.style.backgroundColor = "transparent";
        fullscreen_btn.style.height = "40px";
        fullscreen_btn.style.paddingBottom = "0px";
        fullscreen_btn.style.paddingTop = "0px";

        fullscreen_btn.onclick = function () {
            player.requestFullscreen();
        };

        fullscreen_btn.innerHTML = `<img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-fullscreen-arrow-kmg-design-flat-kmg-design.png"/>`;

        action_bar.appendChild(fullscreen_btn);
    }

    if (player) {
        player.ready().then(function () {
            initFullscreenBtn();
            getStarted();
        });

        player.on("ended", function () {
            btn_complete.click();
            setTimeout(() => {
                btn_next.click();
            }, 2000);
        });
    }
})();
