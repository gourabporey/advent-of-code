const { extractDimensions } = require("./src/dimensions-extractor");
const { PresentBox } = require("./src/present-box");

const main = () => {
  const dimensions = extractDimensions('4x23x21\n22x29x19');
  const presentBox1 = new PresentBox(dimensions[0]);
  const presentBox2 = new PresentBox(dimensions[1]);

  const p1Wrapper = presentBox1.areaOfWrapper();
  const p2Wrapper = presentBox2.areaOfWrapper();

  console.log('Total Wrapper: ', p1Wrapper + p2Wrapper);
}

main();