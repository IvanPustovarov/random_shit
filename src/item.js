export default class Item {
    direction = 0;
    x = 200;
    y = 100;

    update(activeKeys) {
        if (activeKeys.has("ArrowUp")) {
          this._move(0, "y", -1);
        } else if (activeKeys.has("ArrowRight")) {
          this._move(1, "x", 1);
        } else if (activeKeys.has("ArrowDown")) {
          this._move(2, "y", 1);
        } else if (activeKeys.has("ArrowLeft")) {
          this._move(3, "x", -1);
        }
      }
    
      _move(direction, axis, value) {
        this.direction = direction;
        this[axis] += value;
      }
}