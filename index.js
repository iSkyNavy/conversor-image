const sharp = require("sharp");
const fs = require("fs");
const dir = ".";
const inputDir = `${dir}/images`;
const outputDir = `${dir}/output-images`;

const files = fs.readdirSync(inputDir);
const clearText = (text) => {
  const newText = text.replace(/(\-)/g, "").replace(/(\s+)/g, "-");
  return newText;
};
const main = async () => {
  if (!fs.existsSync(`${dir}/output-images`)) {
    fs.mkdirSync(outputDir);
  }
  files.forEach((fileName) => {
    const image = sharp(`${inputDir}/${fileName}`);
    const refactorName = clearText(fileName);
    const name = refactorName.replace(/\.(png|jpg|jpeg|gif|svg)$/, ".webp");
    image.webp({ quality: 80 }).toFile(`${outputDir}/${name}`);
  });
};

main();
