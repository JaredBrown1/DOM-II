// Your code goes here

const topImg = document.querySelector('.intro img');

topImg.addEventListener("mouseenter", () => {
    topImg.style.transform="scale(1.2)";
    topImg.style.transition="all 0.3s";
  })

  topImg.addEventListener("mouseleave", () => {
    topImg.style.transform = "scale(1)";
    topImg.style.transition="all 0.3s";
  })
