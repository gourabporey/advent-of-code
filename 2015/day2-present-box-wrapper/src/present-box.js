class PresentBox {
  #length;
  #width;
  #height;

  constructor({ length, width, height }) {
    this.#length = length || 0;
    this.#width = width || 0;
    this.#height = height || 0;
  }

  #sumOf(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

  #calculateSlackArea(surfaceAreas) {
    return Math.min(...surfaceAreas);
  }

  #getSurfaces() {
    const [l, w, h] = [this.#length, this.#width, this.#height];
    return [[l, w], [w, h], [h, l]];
  }

  areaOfWrapper() {
    const surfaceAreaOfFaces = this.#getSurfaces().map(([a, b]) => a * b);

    const totalSurfaceArea = 2 * this.#sumOf(surfaceAreaOfFaces);
    const slackArea = this.#calculateSlackArea(surfaceAreaOfFaces);

    return totalSurfaceArea + slackArea;
  }

  getPerimeterOfFaces() {
    const perimeters = this.#getSurfaces().map((sides) => 2 * this.#sumOf(sides));
    return perimeters;
  }

  volume() {
    return this.#length * this.#width * this.#height;
  }
}

module.exports = { PresentBox };