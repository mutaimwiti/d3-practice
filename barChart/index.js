const data = [2, 8, 20, 47, 90];

const svgWidth = 400;
const svgHeight = 400;

const barWidth = 50, barPadding = 10;

const canvas = d3.select('#chartArea')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

canvas.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', barWidth - barPadding)
  .attr('height', (d) => d)
  .attr('y', (d) => svgHeight - d)
  .attr('transform', (d, i) => {
    const translation = [barWidth * i - barPadding, 0];
    return "translate(" + translation + ")"
  });
