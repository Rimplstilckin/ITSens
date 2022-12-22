var dataArray = [5, 11, 18];
var dataDays = ['Mon', 'Wed', 'Fri'];

var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);
var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0, 3]);

var x = d3.scaleBand()
        .domain(dataDays)
        .range([0,170])
        .paddingInner(0.1176);

var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg").attr("height","600px").attr("width", "100%");

var cat20 = d3.schemeCategory20;

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
    .attr("height",(d, i)=> d*15)
    .attr("width","50")
    .attr("fill", (d, i) => rainbow(i))
    .attr("x",(d, i) => 60*i)
    .attr("y",(d, i)=>300-(d*15));

svg.append('g')
            .attr('class', 'axis x hidden')
            .attr('transform', 'translate(0, 300)')
            .call(xAxis);

var newX = 300;
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
    .attr('fill', (d, i)=>rainbow2(i))
    .attr("class", "first")
    .attr("cx",(d, i)=>{newX+=d*3+i*20; return newX})
    .attr("cy","100")
    .attr("r",(d)=>d*3)

var newX = 600;
svg.selectAll("ellipse.second")
    .data(dataArray)
    .enter().append("ellipse")
    .attr('fill', (d, i)=> cat20[i])
    .attr("class", "second")
    .attr("cx",(d, i)=>{newX+=d*3+i*20; return newX})
    .attr("cy","100")
    .attr("rx",(d)=>d*3)
    .attr("ry","30");


var newX = 900;
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
    // .attr("stroke", "blue")
    // .attr('stroke-width', "2")
    .attr("x1",newX)
    .attr("y1",(d, i)=>80+(i*20))
    .attr("x2",(d)=>newX+d*15)
    .attr("y2",(d, i)=>80+(i*20));

svg.append("text")
    .attr("x", newX)
    .attr("y", 150)
    .text("Start");

svg.append("text")
    .attr("x", newX)
    .attr("y", 180)
    .text("Mid");

svg.append("text")
    .attr("x", newX)
    .attr("y", 210)
    .text("End");
