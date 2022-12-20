var dataArray = [{x:5, y:5}, {x:10, y:15}, {x:20, y:7}, {x:30, y:18}, {x:40, y:10}];
var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal]

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');

for(var e=0;e<6;e++){

    var line = d3.line()
    .x(d => d.x*6)
    .y(d => d.y*4)
    .curve(interpolateTypes[e]);

    var shiftX = 250*e;
    var shiftY = 0;

    var chartGroup = svg.append("g").attr('class', 'group'+e).attr('transform', 'translate('+shiftX+', '+shiftY+')');

    chartGroup.append('path')
                .attr('fill', 'none')
                .attr('stroke', 'blue')
                .attr('d', line(dataArray));

    chartGroup.selectAll('circle.grp'+e)
                    .data(dataArray)
                    .enter()
                    .append('circle')
                            .attr('class', (d, i)=>'grp'+e)
                            .attr('cx', d => d.x*6)
                            .attr('cy', d => d.y*4)
                            .attr('r', '2');
}