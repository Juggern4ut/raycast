"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("./Player"));
const Vector2D_1 = __importDefault(require("./Vector2D"));
class Simulation {
    constructor(canvas) {
        this.lastRender = 0;
        /**
         * The main loop
         */
        this.loop = (timestamp) => {
            const progress = timestamp - this.lastRender;
            this.update(progress);
            this.draw();
            this.lastRender = timestamp;
            window.requestAnimationFrame(this.loop);
        };
        this.update = (progress) => {
            this.player.update(progress);
        };
        this.draw = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.draw(this.ctx);
        };
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.player = new Player_1.default(new Vector2D_1.default(250, 250));
        window.requestAnimationFrame(this.loop);
        window.addEventListener("keydown", (e) => {
            e.key === "a" ? this.player.rotate(-0.03) : null;
            e.key === "d" ? this.player.rotate(0.03) : null;
        });
    }
}
exports.default = Simulation;
//# sourceMappingURL=Simulation.js.map