class PresentBox {
  #dimensions;

  constructor({ length, width, height }) {
    this.#dimensions = [length, width, height];
  }

  #sumOf(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }

  #calculateSlack(surfaceAreas) {
    return Math.min(...surfaceAreas);
  }

  areaOfWrapper() {
    const dimensions = this.#dimensions;
    const surfaceAreas = dimensions.map((dimension, index) => dimension * dimensions[(index + 1) % 3]);
    const slack = this.#calculateSlack(surfaceAreas);
    const totalSurfaceArea = this.#sumOf(surfaceAreas);

    return slack + 2 * totalSurfaceArea;
  }
}

module.exports = { PresentBox };