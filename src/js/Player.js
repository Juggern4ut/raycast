"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector2D_1 = __importDefault(require("./Vector2D"));
class Player {
    constructor(position) {
        this.rotate = (value) => {
            this.rotation += value;
        };
        this.update = (progress) => {
        };
        this.draw = (ctx) => {
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
        this.position = position;
        this.rotation = 0;
        this.direction = new Vector2D_1.default(0, 0);
    }
}
exports.default = Player;
//# sourceMappingURL=Player.js.map