"use strict";
import { getOffSet, skillsGrafic } from "./main/anim_skills.js";
import { startPoints } from "./main/anim_about.js";
import { showAnim } from "./main/anim_about.js";
import { arrowUp } from "./footer/arrowUp.js";


window.addEventListener("scroll", () => {
    startPoints.forEach((el) => {
        const height = el.offsetHeight;
        const offSet = getOffSet(el).top;
        let point = window.innerHeight - height;
        if (window.pageYOffset >= offSet - point) {
            showAnim();
        }
    });

    skillsGrafic.forEach((el) => {
        const height = el.offsetHeight;
        const offSet = getOffSet(el).top;
        let point = window.innerHeight - height;
        if (window.pageYOffset >= offSet - point) {
            el.classList.add("active");
        }
    });

    (function () {
        const height = arrowUp.offsetHeight;
        const offSet = getOffSet(arrowUp).top;
        let point = window.innerHeight - height;
        if (window.pageYOffset > offSet - point) {
            arrowUp.classList.add("show_arrow");
        }
    })();
});
