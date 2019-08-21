const data = [2, 8, 20, 47, 90];

const svgWidth = 600;
const svgHeight = 500;

const barWidth = 100, barPadding = 10;

const canvas = d3.select('#chartArea')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, svgHeight]);

canvas.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', barWidth - barPadding)
  .attr('height', (d) => yScale(d))
  .attr('y', (d) => svgHeight - yScale(d))
  .attr('transform', (d, i) => {
    const translation = [barWidth * i - barPadding, 0];
    return "translate(" + translation + ")"
  });
