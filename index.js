const pixel = document.querySelector(".pixel");

let blackClick = 0;

const clickOnDiv = () => {
  blackClick += 1;
  console.log(blackClick);

  if(blackClick === 3) {
     pixel.style.backgroundColor = "gold"
  }
};

pixel.addEventListener("click", clickOnDiv);
