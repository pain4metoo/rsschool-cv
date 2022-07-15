const menuBtn: HTMLInputElement | null =
  document.querySelector(".header_menu_btn");
const menu: HTMLInputElement | null = document.querySelector(".header_menu");
const header: HTMLInputElement | null = document.querySelector(".header");
const menuLine = document.querySelectorAll(".header_menu_line");
const mainBlock: HTMLInputElement | null =
  document.querySelector(".header_info_inner");
const video: HTMLInputElement | null = document.querySelector(
  ".header_video_inner"
);
const social: HTMLInputElement | null =
  document.querySelector(".header_social");

const isVisible = () => {
  menu?.classList.toggle("header_menu_hiden");
  social?.classList.toggle("header_menu_hiden")
  social?.classList.toggle("header_social_anim")
  header?.classList.toggle("header_style");
  mainBlock?.classList.toggle("header_hide");
  video?.classList.toggle("header_hide");
  menuLine.forEach((item, index: number) => {
    item.classList.toggle(`header_menu_line_${index + 1}`);
  });
};

menuBtn?.addEventListener("click", isVisible);

export {};
