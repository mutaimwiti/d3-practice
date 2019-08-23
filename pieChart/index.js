const data = [20, 32, 40, 47, 51];

const svgWidth = 600;
const svgHeight = 600;

const radius = Math.min(svgHeight, svgWidth) / 2;

const color = d3.scaleOrdinal(d3.schemeCategory20c);

const canvas = d3.select('#chartArea')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const g = canvas.append('g')
  .attr('transform', `translate(${radius}, ${radius})`);

const pie = d3.pie().value((d) => d);

const path = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

const arc = g.selectAll('arc')
  .data(pie(data))
  .enter()
  .append('g');

arc.append('path')
  .attr('d', path)
  .attr('fill', (d) => color(d.data));

arc.append('text')
  .text((d => d.data))
  .attr('transform', (d) => `translate(${path.centroid(d)})`)
  .attr('text-anchor', 'middle');
