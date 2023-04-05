"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Adds a given vector to this one
     * @param other The other vector to add
     */
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    /**
     * Multiplies a given vector to this one
     * @param other The vector to multiply
     */
    multiply(other) {
        this.x *= other.x;
        this.y *= other.y;
    }
    /**
     * Creates a copy of this vector
     * @returns A clone of the vector
     */
    clone() {
        return new Vector2D(this.x, this.y);
    }
    /**
     * Returns the distance between this vecor and a given one
     * @param other The Vector to get the distance to
     * @returns The calculated distance
     */
    dist(other) {
        const deltaX = Math.abs(this.x - other.x);
        const deltaY = Math.abs(this.y - other.y);
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }
    /**
     * Calculates the dot product of this and a given vector
     * @param other The other vector
     * @returns The dot product
     */
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    /**
     * Calculates the magnitude of this vector and returns it
     * @returns The magnitude of this vector
     */
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Normalizes this vector
     */
    normalize() {
        const magnitude = this.magnitude();
        this.x /= magnitude;
        this.y /= magnitude;
    }
    /**
     * Calculates the angle in radians between this
     * vector and a given one and returns it.
     * @param other The other vector
     * @returns The angle in radians
     */
    angle(other) {
        const dotProduct = this.dot(other);
        const magnitudeProduct = this.magnitude() * other.magnitude();
        return Math.acos(dotProduct / magnitudeProduct);
    }
}
exports.default = Vector2D;
//# sourceMappingURL=Vector2D.js.map