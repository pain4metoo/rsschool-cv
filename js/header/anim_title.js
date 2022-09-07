"use strict";
const welcomeText = showText(document.querySelector(".header_title_text"));
export const setTimer = () => {
    setTimeout(() => welcomeText.forEach((i) => (i.style.opacity = 1)), 0);
};

function showText(element) {
    element.style.wordBreak = "break-word";
    const letters = element.innerText
        .split("")
        .map((letter, i) => {
            const span = document.createElement("span");
            if (letter === "[" ||
                letter === "]" ||
                letter === "'" ||
                letter === "!") {
                span.style.color = "#E12179";
            }
            span.innerHTML = letter;
            span.style.opacity = 0;
            span.style.transitionDelay = 0.1 * i + "s";
            return span;
        });
    element.innerHTML = "";
    element.append(...letters);
    return letters;
}
