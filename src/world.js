import Cube from "./cube.js";

const CELL_SIZE = 80;
export default class World {
  level = null;
  player = null;
  playerCube = new Cube();

  constructor(level) {
    // this.level = level.map((row, y) => {
    //   return row.map((block, x) => {
    //       return {
    //           x: x * CELL_SIZE,
    //           y: y * CELL_SIZE
    //       }
    //   });
    // });
  }

  update() {}
}
