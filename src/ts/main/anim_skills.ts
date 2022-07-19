const skillsGrafic = document.querySelectorAll(".main_skills_circle");
const clientSkroll = window.scroll();

(function getCor() {
  for (let i = 0; i < skillsGrafic.length; i++) {
    let cor = skillsGrafic[i].getBoundingClientRect();

    console.log(cor);
  }
})();
