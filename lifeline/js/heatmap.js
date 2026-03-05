(function () {
	"use strict";
	var margin = { top: 30, right: 0, bottom: 0, left: 20 },
          width = 950 - margin.left - margin.right,
          height = 590 - margin.top - margin.bottom,
          gridSize = Math.floor(width / 26),
          legendElementWidth = gridSize*1.3,
          buckets = 15,
          colors = ["#fefeeb","#fdfdbd","#edf8b1","#d8f9a5","#c7e9b4","#9ae0be","#85cdbc","#49b7c4","#1d91c0","#225ea8","#3241a2","#122e7e","#04174b","#000e33"], 
      colors2 = ["#fefeeb","#FCB95D","#D55C2B","#9F0A28"], 
          shrink = ["≥100", "≥110", "≥120", "≥130", "≥140", "≥150", "≥160", "≥170", "≥180", "≥190", "≥200", "≥210", "≥220", "≥230","收缩压"],
          diastole = ["≥40", "≥50", "≥60", "≥70", "≥80", "≥90", "≥100", "≥110", "≥120", "≥130", "≥140", "≥150", "≥160", "≥170", "≥180", "≥190","舒张压"],
//      shrink = ["100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "210", "220", "230"],
//          diastole = ["40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190"],
          datasets = ["../sources/amountData.csv", "../sources/rangeData.csv"];


      var svg = d3.select("#chart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var shrinkLabels = svg.selectAll(".shrinkLabel")
          .data(shrink)
          .enter().append("text")
            .text(function (d) { return d; })
            .attr("x", 0)
            .attr("y", function (d, i) { return i * gridSize; })
            .style("text-anchor", "end")
            .attr("transform", "translate(30," + gridSize / 1.5 + ")")
            .attr("class", function (d, i) { return ((i >= 4) ? "shrinkLabel mono axis axis-workshrink" : "shrinkLabel mono axis axis-nonworkshrink"); });

      var diastoleLabels = svg.selectAll(".diastoleLabel")
          .data(diastole)
          .enter().append("text")
            .text(function(d) { return d; })
            .attr("x", function(d, i) { return i * gridSize; })
            .attr("y", 0)
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + 65 + ", -6)")
            .attr("class", function(d, i) { return ((i >= 5) ? "diastoleLabel mono axis axis-workdiastole" : "diastoleLabel mono axis axis-nonworkdiastole"); });

      var heatmapChart = function(tsvFile) {
        d3.csv(tsvFile,
        function(d) {
          return {
            shrink: +d.shrink,
            diastole: +d.diastole,
            amount: +d.amount
          };
        },
         
        function(error, data) {
      if(d3.max(data, function (d) { return d.amount; })>3) {
          var colorScale = d3.scale.quantile()//对数比例尺 输入值域是独立的值，适合已经对数据分类的情形
              .domain([0, buckets - 1, d3.max(data, function (d) { return d.amount;})])
              .range(colors);
      }
      else {
          var colorScale = d3.scale.quantile()
              .domain([0, 2, d3.max(data, function (d) { return d.amount; })])
              .range(colors2);
      
      }

          var cards = svg.selectAll(".diastole")
              .data(data, function(d) {return d.shrink+':'+d.diastole;});

          cards.append("title");
      
          cards.enter().append("rect")
              .attr("x", function(d) { return (d.diastole - 1) * gridSize; })
              .attr("y", function(d) { return (d.shrink - 1) * gridSize; })
        .attr("transform", "translate(50, 10)")
              .attr("rx", 4)
              .attr("ry", 4)
              .attr("class", "diastole bordered")
              .attr("width", gridSize)
              .attr("height", gridSize)
              .style("fill", colors[0]);
      
    
      
          cards.transition().duration(1000)
              .style("fill", function(d) { return colorScale(d.amount); });

          
          
          cards.exit().remove();

          var legend = svg.selectAll(".legend")
              .data([0].concat(colorScale.quantiles()), function(d) { return d; });//concat将多个数组连成一个
//console.log(colorScale.quantiles());//测试用 控制台输出
//      
//      console.log(data[0]);//测试用 控制台输出
          legend.enter().append("g")
              .attr("class", "legend");
if(d3.max(data, function (d) { return d.amount; })>3) {
          legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", gridSize * 15)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });
  legend.append("rect")
            .attr("x", legendElementWidth * 14)
            .attr("y", gridSize * 15)
            .attr("width", legendElementWidth*3)
            .attr("height", gridSize / 2)
            .style("fill", "#fff");
   legend.append("text")
            .attr("class", "mono")
            .text(function(d) { if( Math.round(d)!=0)return "≥ " + Math.round(d);
							  else return "";})
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", gridSize * 15 + gridSize);
  legend.append("text")
        .attr("class", "mono2")
	.style("font-size", "16px")
		.style("font-family", "STXihei")
        .text('人数')
          .attr("x", legendElementWidth * 14.2)
            .attr("y", gridSize * 15 + gridSize*0.4);
  cards.select("title").style("font-size", "16px")
		.style("font-family", "STXihei").text(function(d) { return "人数 "+d.amount; });
    legend.append("rect")
            .attr("x", legendElementWidth)
            .attr("y", gridSize * 15 + gridSize)
            .attr("width", legendElementWidth*3)
            .attr("height", gridSize / 2)
            .style("fill", "#fff");
   legend.exit().remove();
//  svg.append("line")
//        .attr("x1",30+margin.left+gridSize*5)
//              .attr("y1", 10)
//        .attr("x2",30+margin.left+gridSize*5)
//              .attr("y2", 10+gridSize*14)
//        .attr("stroke", "#8d8d8d")
//        .attr("stroke-width", "2");
//  svg.append("line")
//        .attr("x1",30+margin.left)
//              .attr("y1", 10+gridSize*4)
//        .attr("x2",gridSize*16+30+margin.left)
//              .attr("y2", 10+gridSize*4)
//        .attr("stroke", "#8d8d8d")
//        .attr("stroke-width", "2");    
}
    else{
      legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", gridSize * 15)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors2[i]; });
      legend.append("rect")
            .attr("x", legendElementWidth * 14)
            .attr("y", gridSize * 15)
            .attr("width", legendElementWidth*3)
            .attr("height", gridSize / 2)
            .style("fill", "#fff");
//      legend.append("rect")
//            .attr("x", legendElementWidth * 4)
//            .attr("y", gridSize * 15)
//            .attr("width", legendElementWidth*3)
//            .attr("height", gridSize / 2)
//            .style("fill", "#fff");
       legend.append("text")
            .attr("class", "mono")
            .text(function(d) { if( Math.round(d)!=0)return  Math.round(d)+" 级"; 
							  else return "";})
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", gridSize * 15 + gridSize);
      cards.select("title").text(function(d) { if(d.amount==0)return "";else return d.amount+" 级高血压"; });
      legend.append("text")
        .attr("class", "mono2")
		.style("font-size", "16px")
		.style("font-family", "STXihei")
        .text("高血压等级")
          .attr("x", legendElementWidth * 4.2)
            .attr("y", gridSize * 15 + gridSize*0.4);
      legend.append("rect")
            .attr("x", legendElementWidth)
            .attr("y", gridSize * 15 + gridSize)
            .attr("width", legendElementWidth*3)
            .attr("height", gridSize / 2*1.3)
            .style("fill", "#fff");
       legend.exit().remove();
      
    } 
        });  
      };

      heatmapChart("../sources/"+datasets[0]);
      
    
      var datasetpicker = d3.select("#dataset-picker")
                          .selectAll(".dataset-button")
                          .data(datasets);

      datasetpicker.enter()
        .append("input")
        .attr("value", function(d){ if(d=="../sources/amountData.csv") return "患病人数数据集"
								  else return "患病等级数据集"})
        .attr("type", "button")
        .attr("class", "dataset-button")
        .on("click", function(d) {
          heatmapChart(d);
        });
	})();
