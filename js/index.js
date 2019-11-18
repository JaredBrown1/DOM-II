// Your code goes here
window.addEventListener('load', () => {
  window.alert('page is fully loaded');
});

const bgColor = document.querySelector('body');
//change background color
bgColor.addEventListener('click', () => {
    bgColor.style.backgroundColor = "red";
})

const topImg = document.querySelector('.intro img');
//makes first pic large 
topImg.addEventListener("mouseenter", () => {
    topImg.style.transform="scale(1.2)";
    topImg.style.transition="all 0.3s";
  })
// pic goes to regular size after mouse leaves image
  topImg.addEventListener("mouseleave", () => {
    topImg.style.transform = "scale(1)";
    topImg.style.transition="all 0.3s";
  })

const noContext = document.querySelector(".intro p");
//no context menu on first paragraph
noContext.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

const wordColor = document.querySelector(".intro h2");
//a double lick on the "welcome to fun bus" will turn it purple
wordColor.addEventListener('dblclick',() => {
    wordColor.style.color = "purple";
  });

const reSize = document.querySelector(".img-content img");
//changes a picture when page resizes
window.addEventListener('resize', () => {
    reSize.src = "img/fun.jpg";
})

const focus = document.querySelector('a');

// focus.addEventListener('focus', () => {
//   window.alert('hi');
// });

// focus.addEventListener('blur', () => {
//   window.alert('hello');
// });


let button = document.querySelector('a');
//changes home button color
function random(number) {
  return Math.floor(Math.random() * number);
}


function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
}

button.oncontextmenu = function(e) {
  e.preventDefault();
};









