class PresentBox {
  #length;
  #width;
  #height;

  constructor({ length, width, height }) {
    this.#length = length;
    this.#width = width;
    this.#height = height;
  }

  #sumOf(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

  #multiply([a, b]) {
    return a * b;
  }

  #calculateSlack(surfaceAreas) {
    return Math.min(...surfaceAreas);
  }

  #getSurfaces() {
    const l = this.#length;
    const w = this.#width;
    const h = this.#height;

    return [[l, w], [w, h], [h, l]];
  }

  areaOfWrapper() {
    const surfaces = this.#getSurfaces();
    const surfaceAreas = surfaces.map(this.#multiply);

    const totalSurfaceArea = 2 * this.#sumOf(surfaceAreas);
    const slackArea = this.#calculateSlack(surfaceAreas);

    return totalSurfaceArea + slackArea;
  }
}

module.exports = { PresentBox };