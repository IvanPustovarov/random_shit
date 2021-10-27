import World from "./src/world.js";
import View from "./src/view.js";
import Game from "./src/game.js";
import Sprite from "./src/sprite.js";
import {maze} from "./data/maze.js";

const canvas = document.querySelector("canvas");
const sprite = new Sprite("./assets/cube.png")

const game = new Game({
  world: new World(),
  view: new View(canvas, sprite),
  level: maze
});

game.init().then(()=> game.start());

console.log(game);


// const pixel = document.querySelector(".pixel");
// let blackClick = 0;
// const clickOnDiv = () => {
//   blackClick += 1;
//   console.log(blackClick);
//   if(blackClick === 3) {
//      pixel.style.backgroundColor = "gold"
//   }
// };

// pixel.addEventListener("click", clickOnDiv);
