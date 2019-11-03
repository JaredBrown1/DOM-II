// Your code goes here

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

const wordColor = document.querySelector(".intro h2");
//a double lick on the "welcome to fun bus" will turn it purple
wordColor.addEventListener('dblclick',() => {
    wordColor.style.color = "purple";
  });

// const reSize = document.querySelectorAll(".img-content");

// reSize.addEventListener('resize', () => {
//     reSize.src = "https://www.google.com/search?hl=en&tbm=isch&sxsrf=ACYBGNS_yvCe_mve9MymiZ_5GWpP8tmlQg%3A1572817533194&source=hp&biw=1422&bih=677&ei=fUq_XYn7CMCv0PEPsu25gAc&q=lambda+school&oq=lambda+school&gs_l=img.3..0l9j0i30.1226.2948..3178...0.0..0.314.2721.0j3j8j1......0....1..gws-wiz-img.......35i39.mXdJamM8Nks&ved=0ahUKEwjJrfDygc_lAhXAFzQIHbJ2DnAQ4dUDCAY&uact=5#imgrc=lLL9o9Y7qgQULM:";
// })

let button = document.querySelector('a');


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









