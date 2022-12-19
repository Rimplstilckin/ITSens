var dataArray = [5, 11, 18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width", "100%");

svg.selecAll("rect")
    .data(dataArray)
    .enter().append("rect");