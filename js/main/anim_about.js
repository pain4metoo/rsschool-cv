"use strict";

export const startPoints = document.querySelectorAll(".anim_0");
const textAbout = customText(document.querySelectorAll(".anim_0"));
export function showAnim() {
    textAbout.forEach((domEl) => {
        domEl.forEach((lettersArray) => lettersArray.forEach((letter) => {
            setTimeout(() => (letter.style.opacity = "1")), 0;
        }));
    }, 0);
}

function customText(element) {
    let lettersArr = [];
    for (let i = 0; i < element.length; i++) {
        element[i].style.wordBreak = "break-word";
        const letters = element[i].innerText
            .split("")
            .map((letter, i) => {
                const span = document.createElement("span");
                span.innerHTML = letter;
                span.style.opacity = "0";
                span.style.transitionDelay = 0.3 * i + "s";
                return span;
            });
        lettersArr.push([letters]);
        element[i].innerHTML = "";
        element[i].append(...letters);
    }
    return lettersArr;
}
