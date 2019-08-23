const svgWidth = 600;
const svgHeight = 600;

const canvas = d3.select('#chartArea')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

canvas.append('rect')
  .attr('x', 30)
  .attr('y', 30)
  .attr('width', 540)
  .attr('height', 540)
  .attr('fill', '#e3ffff');

const defaultFaceColor = '#91a3ff';
const secondaryFaceColor = '#c8fffa';

const face = canvas.append('circle')
  .attr('cx', 300)
  .attr('cy', 300)
  .attr('r', 200)
  .attr('fill', defaultFaceColor);

const primaryColor = '#ff264f';
const secondaryColor = '#3217d1';

const leftEye = canvas.append('circle')
  .attr('cx', 220)
  .attr('cy', 220)
  .attr('r', 20)
  .attr('fill', primaryColor);

const rightEye = canvas.append('circle')
  .attr('cx', 380)
  .attr('cy', 220)
  .attr('r', 20)
  .attr('fill', primaryColor);

const nose = canvas.append('line')
  .attr('x1', 270)
  .attr('y1', 350)
  .attr('x2', 330)
  .attr('y2', 350)
  .attr('stroke', primaryColor)
  .attr('stroke-width', 10);

// transitions
let currentColor = 0;
const featureColors = [primaryColor, secondaryColor];
const faceColors = [defaultFaceColor, secondaryFaceColor];

setInterval(() => {
  const featuresColor = featureColors[currentColor];

  leftEye.transition()
    .duration(1000)
    .attr('fill', featuresColor);

  rightEye.transition()
    .duration(1000)
    .attr('fill', featuresColor);

  nose.transition()
    .duration(1000)
    .attr('stroke', featuresColor);

  face.transition()
    .duration(1000)
    .attr('fill', faceColors[currentColor]);

  currentColor++;
  currentColor = currentColor > 1 ? 0 : currentColor;
}, 700);
