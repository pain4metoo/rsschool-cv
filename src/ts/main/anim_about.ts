import { showText } from "../header/anim_title";

const aboutText: HTMLInputElement | any = showText(
  document.querySelector(".main_skills_about")
);

setTimeout(() => aboutText.forEach((i) => (i.style.opacity = 1)), 0);
