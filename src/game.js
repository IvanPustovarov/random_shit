export default class Game {
  constructor({ world, view, level }) {
    this.world = world;
    this.view = view;
    this.level = level;
    this.loop = this.loop.bind(this);
  }

  async init() {
    this.view.init();
    this.world.level = this.level;

    document.addEventListener("keydown", (event) => {
      event.preventDefault();

      switch (event.code) {
        case "ArrowRight":
          this.world.playerCube.x += this.world.playerCube.height;
          break;
        case "ArrowLeft":
          this.world.playerCube.x -= this.world.playerCube.height;
          break;
        case "ArrowUp":
          this.world.playerCube.y -= this.world.playerCube.height;
          break;
        case "ArrowDown":
          this.world.playerCube.y += this.world.playerCube.height;
          break;
      }
    });
  }
  start() {
    requestAnimationFrame(this.loop);
  }
  loop() {
    //get input
    this.world.update();
    this.view.update(this.world);

    requestAnimationFrame(this.loop);
  }
}
