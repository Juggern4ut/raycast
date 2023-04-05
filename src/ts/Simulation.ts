import Player from "./Player";
import Vector2D from "./Vector2D";

export default class Simulation {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  lastRender = 0;
  player: Player;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.player = new Player(new Vector2D(250, 250));
    window.requestAnimationFrame(this.loop);

    window.addEventListener("keydown", (e) => { 
      e.key === "a" ? this.player.rotate(-0.03) : null;
      e.key === "d" ? this.player.rotate(0.03) : null;
    });
  }

  /**
   * The main loop
   */
  loop = (timestamp: number) => {
    const progress = timestamp - this.lastRender;

    this.update(progress);
    this.draw();

    this.lastRender = timestamp;
    window.requestAnimationFrame(this.loop);
  };

  update = (progress: number) => {
    this.player.update(progress);
  };

  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);
  };
}
