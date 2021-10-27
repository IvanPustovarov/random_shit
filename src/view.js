export default class View {
  constructor(canvas, sprite) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.sprite = sprite;
  }
  async init() {
    await this.sprite.load();
  }
  update(world) {
      this.clearScreen();
    this.renderCube(world.playerCube);
  }

  renderCube(playerCube) {
    this.context.drawImage(
      this.sprite.image,
      0,
      0,
      playerCube.width,
      playerCube.height,
      playerCube.x,
      playerCube.y,
      80,
      80
    );
  }

  clearScreen() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
