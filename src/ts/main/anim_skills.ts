const skillsGrafic = document.getElementsByClassName(
  "anim"
) as HTMLCollectionOf<HTMLElement>;

function getCor() {
  for (let i = 0; i < skillsGrafic.length; i++) {
    let el = skillsGrafic[i];
    const height = el.offsetHeight;
    const offSet = getOffSet(el).top;
    let point = window.innerHeight - height;

    if (window.pageYOffset > offSet - point) {
      el.classList.add("active");
    }
  }
}

export function getOffSet(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset;
  const scrollTop = window.pageYOffset;

  return {
    top: rect.top + scrollTop,
    letf: rect.left + scrollLeft,
  };
}

window.addEventListener("scroll", getCor);
