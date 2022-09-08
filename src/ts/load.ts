import { setTimer } from "./header/anim_title";

const preLoader: HTMLInputElement | null = document.querySelector(".preload");
const body = document.querySelector("html");

if (body) {
  body.style.overflow = "hidden";
} else {
  throw new Error('Object is possibly "null"');
}

const load = () => {
  setTimeout(() => {
    if (preLoader && body) {
      preLoader.style.display = "none";
      body.style.overflow = "auto";
      setTimer();
    } else {
      throw new Error('Object is possibly "null"');
    }
  }, 1000);
};

window.addEventListener("load", (event) => {
  if (event.timeStamp > 5000) {
    load();
  }
  load();
});
