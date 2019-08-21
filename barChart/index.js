const data = [2, 8, 20, 47, 80];

const svgWidth = 600;
const svgHeight = 800;

const barWidth = 100, barPadding = 10;

const canvas = d3.select('#chartArea')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, svgHeight - 50]);

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

canvas.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text((d) => d)
  .attr('y', (d) => svgHeight - yScale(d) + 15)
  .attr('x', (d, i) => barWidth * i + barWidth / 4)
  .attr("fill", "#f8f7e9");
