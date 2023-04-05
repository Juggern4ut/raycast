import Vector2D from "./Vector2D";

export default class Player {
  position: Vector2D;
  direction: Vector2D;
  rotation: number;

  constructor(position: Vector2D) {
    this.position = position;
    this.rotation = 0;
    this.direction = new Vector2D(0, 0);
  }

  rotate = (value: number) => {
    this.rotation += value;
  }

  update = (progress: number) => {
    
  };

  draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.fillStyle = "#000";
    ctx.fillRect(this.position.x, this.position.y, 6, 6);
    ctx.beginPath();
    ctx.moveTo(this.position.x + 3, this.position.y + 3);

    const targetX = this.position.x + 20 * Math.cos(this.rotation);
    const targetY = this.position.y + 20 * Math.sin(this.rotation);

    ctx.lineTo(targetX, targetY);
    ctx.stroke();
    ctx.closePath();
  };
}
