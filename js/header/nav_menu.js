"use strict";
const menuBtn = document.querySelector(".header_menu_btn");
const menu = document.querySelector(".header_menu");
const header = document.querySelector(".header");
const menuLine = document.querySelectorAll(".header_menu_line");
const mainBlock = document.querySelector(".header_info_inner");
const video = document.querySelector(".header_video_inner");
const social = document.querySelector(".header_social");
const menuInner = document.querySelector(".header_menu_inner");
const isVisible = () => {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle("header_menu_hiden");
    social === null || social === void 0 ? void 0 : social.classList.toggle("header_menu_hiden");
    social === null || social === void 0 ? void 0 : social.classList.toggle("header_social_anim");
    header === null || header === void 0 ? void 0 : header.classList.toggle("header_style");
    mainBlock === null || mainBlock === void 0 ? void 0 : mainBlock.classList.toggle("header_hide");
    video === null || video === void 0 ? void 0 : video.classList.toggle("header_hide");
    menuLine.forEach((item, index) => {
        item.classList.toggle(`header_menu_line_${index + 1}`);
    });
};
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", isVisible);
menuInner === null || menuInner === void 0 ? void 0 : menuInner.addEventListener("click", (e) => {
    const screenWidth = window.screen.width;
    let target = e.target;
    const menuItems = document.querySelectorAll(".header_menu_link");
    if (screenWidth >= 760) {
        return;
    }
    for (let i = 0; i < menuItems.length; i++) {
        if (target === menuItems[i]) {
            isVisible();
            break;
        }
    }
});
