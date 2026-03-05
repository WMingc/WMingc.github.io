//Developer: Narayana Swamy
//emailID: narayanaswamy14@gmail.com

//
(function () {
	"use strict";//严格模式可查重，未声明变量，重复的参数

	d3.clusterpie = function () {

		var containerID,
			width,
			height,
			originalData,
			ParentG, //信息图
			LegendG, //注释图标
			legendFilter = [],//注释图标筛选
			circleR = 0,//图圆直径
			amountInRow, //一行内圆个数
			noOfCategories, //分块数目
			fixAngleLayout,//选项
			colorScale = d3.scale.category20(), //颜色
			radiusScale = d3.scale.linear(),//创建一个线性比例尺
			legendObj = d3.legend(),
			scale_temp = d3.scale.linear(),
			originalData2,
			MinMaxTotal = 0,//数据中最大最小值差
			margin = {top: 10},//边缘
			colorMap = {};

		var pie = d3.layout.pie()//创建pie布局
			.sort(null)//sort函数自动隐式执行降序排列，传入null阻止排序
			.value(function (d) {
				return d.amount;
			});

		var custumLayout = d3.custumPieLayout()
			.sort(null)
			.value(function (d) {
				return d.amount;
			});

		var arc = d3.svg.arc()
			.innerRadius(5)//内部圆半径 0即饼图 大于0类圆环
		    .cornerRadius(45);//每个分块圆弧化之间间隔 0即饼图
		
		var chart = function (selection) {

			if (fixAngleLayout) {
				custumLayout.fixAngle((360 / (noOfCategories - legendFilter.length)) / (360 / (2 * Math.PI)));//传入弧度 此处legendFilter是为了在注释图标中选择以后可以变换图表 noOfCategories为初始圆内分块数目
			}

			width = 700;//parseInt(d3.select('#' + containerID).style('width'));//parseInt返回字符串的第一个数字 整数 以"0"为开始时默认使用八进制基数
			height = 800;//parseInt(d3.select('#' + containerID).style('height'));
			if (!fixAngleLayout) {
			legendObj.legendOnclickMthod(chart.legendFilter);//筛选可见数据 目前存在问题待改
			}
			selection.each(function (data) {

				originalData = data;

				data.forEach(function (d) {//数据传递
					d.values.forEach(function (e) {
						e.total = d.total;
						e.range = d.range;
						e.week = d.week;
						e.meal = d.meal;
						e.id = d.id;
						e.color = colorScale(e.type);
						if (!colorMap.hasOwnProperty(e.type)) {//如果colorMap没有type数据 颜色映射 不同type不同对应颜色
							colorMap[e.type] = {
								'key': e.type,
								'color': e.color
							};
						}
					});
				});
				var x_offset = 0,
					y_offset = 0;
				var length = data.length;//数据量 共有几个小图
				if(length === 1) {
					width = 400;
					amountInRow = Math.ceil(Math.sqrt(length));
				}
				else {
					amountInRow = 8;//一行内小图个数 ceil向上取整，大于等于x的最小整数
				}
				//console.log(amountInRow);//测试用 控制台输出
				var container = d3.select(this);
				//width = width - 100;
				var temp_width;
				if(data.length > amountInRow ) {
					temp_width = width - width/(amountInRow*2+1);//每行宽度
					x_offset = circleR*0.5;
					//temp_width = width - 0.5 * (width / amountInRow);
				}
				
				else {//1或2张图时
					temp_width = width;
				}
				circleR = d3.min([temp_width, (height - margin.top)]) / amountInRow *1.2;

				radiusScale//线性映射 小图边界和小图内部饼图映射
					.domain([0, d3.extent(data, function (d) {//定义域 extent返回范围，定义域从0 到
						//console.log(d.total);//测试用 控制台输出
						return d.total;
						
					})[1]])
					.range([0, circleR / 2]);//值域

				MinMaxTotal = radiusScale.domain();
//var rectangle = container.append("rect")
//.attr("x",0)
//.attr("y",0)
//.attr("width",width)
//.attr("height",height);
				//总图区域
				if(data.length === 1) {
					container.attr('width', temp_width + 360)//后面数字涉及到注释宽度
					.attr('height', circleR + margin.top);
				}
				else {
					container.attr('width', temp_width + 360)//后面数字涉及到注释宽度
					.attr('height', circleR*5 + margin.top);
				}

				if (!ParentG) {
					ParentG = container.append('g').attr('class', 'parentG')
					.attr('transform', 'translate(' + 0 + ',' + margin.top + ')');
//						.attr('transform', 'translate(' + (data.length > amountInRow ? 0.5 * circleR : 0) + ',' + margin.top + ')');
					LegendG = container.append('g').attr('class', 'legendG');
				}
				//注释位置移动
				if(data.length === 1) {
					y_offset = circleR / 2;
				}
				else {
					y_offset = circleR;
				}
				LegendG.attr('transform', 'translate(' + (width + 180) + ',' + y_offset +')')
				//LegendG.attr('transform', 'translate(' + ((circleR * amountInRow / 2) - (Object.keys(colorMap).length * 20) / 2) + ')')
					.datum(colorMap)
					.call(legendObj);//选择整个legendObj
				if(data.length > amountInRow ) {
					x_offset = circleR*0.5;
				}
				var circleG = ParentG
				  //.attr('transform', 'translate(' + x_offset + ',' + margin.top + ')')//使得符合相切圆
					.selectAll('.circleG')
					.data(data
						.sort(//小图排序
						function (a, b) {
							if (a.id > b.id) {
								return 1;
						}
							else if (a.id < b.id) {
								return -1;
							}
							else {
								return 0;
							}								
						})
					);

				circleG.enter()//一张小图
					.append('g')
					.attr('class', 'circleG')
//					.attr('transform', function (d, i) {
//						return 'translate(' + ((i % amountInRow) * (circleR)) + ',' + (Math.floor(i / amountInRow) * circleR) + ')';
//					})
					.append('circle')
					.attr('r', 0)
					.attr('cx', circleR / 2)
					.attr('cy', circleR / 2)
					.style('fill', 'white');
					//.style('stroke', '#dbdbdb')//e6e6e6')
					//.style('stroke-width', '1px');

				circleG.exit().transition().duration(0).remove();//点击一副小图以后放大并中间无延时

				circleG
					.attr('transform', function (d, i) {//不同小图挪位置
						if (Math.floor(i / amountInRow) % 2 === 1) {
							x_offset = 0;
//							x_offset = 0.5 * circleR;//左移使得两行圆相切
							y_offset = 0;
//							y_offset = 0.13 * circleR * Math.floor(i / amountInRow);//上移使得两行圆相切
						} else {
							x_offset = 0;
							if (Math.floor(i / amountInRow) === 0){//i=0,1 
								y_offset = 0;
							}
							else {
								y_offset = 0;
//							    y_offset = 0.13 * circleR * Math.floor(i / amountInRow);
							}
						}
						return 'translate(' + (((i % amountInRow) * (circleR)) - x_offset) + ',' + ((Math.floor(i / amountInRow) * circleR) - y_offset) + ')';//使每个小图找准位置
					});

				circleG//鼠标交互操作
					.selectAll('circle')
					.attr('r', 0)
					.attr('cx', circleR / 2)
					.attr('cy', circleR / 2)
					.on('mouseover', function () {
						d3.select(this)
							.style('stroke-width', '2px')
					        .style('stroke', '#dbdbdb');//e6e6e6');
					})
					.on('mouseout', function () {
						d3.select(this).style('stroke-width', '0px');
					})
					.on('click', function (d) {
						d3.select(this).style('stroke-width', '2px');
						if (originalData.length === 1) {
							d3.select('#' + containerID).select('svg').datum(originalData2).call(chart);
						}
						else {
							originalData2 = originalData;
							d3.select('#' + containerID).select('svg').datum([d]).call(chart);
						}
					
					})
					.transition()
					.duration(1000)//放大延时
					.attr('r', circleR / 2);

				circleG.each(chart.renderPieChart);

			});
			//d3.select(window).on('resize.' + containerID, chart.resize)
		};

		chart.containerID = function (_) {
			containerID = _;
			return chart;
		};
		chart.noOfCategories = function (_) {
			noOfCategories = _;
			return chart;
		};
		chart.fixAngleLayout = function (_) {
			fixAngleLayout = _;
			return chart;
		};
		chart.legendFilter = function (_) {
			if (legendFilter.indexOf(_) === -1) {
				legendFilter.push(_);//legendFilter没有内容 push进一个
			}
			else {
				legendFilter.splice(legendFilter.indexOf(_), 1);//添加或删除一个
			}
			d3.select('#' + containerID).select('svg').datum(originalData).call(chart);

			return chart;
		};
		chart.change = function (_) {
			chart.fixAngleLayout(_);
			d3.select('#' + containerID).select('svg').datum(originalData).call(chart);
			return chart;
		};

		chart.resize = function () {
			d3.select('#' + containerID).select('svg').datum(originalData).call(chart);
		};

		chart.renderPieChart = function (data) {

			scale_temp
				.domain(d3.extent(data.values, function (d) {
					return d.amount;
				}))
			//.range([30,45]);
			.range([30*circleR/200,45*circleR/200]);
				//.range([parseInt(radiusScale(data.total) * 0.2), parseInt(radiusScale(data.total)) * (originalData.length == 1 ? 0.8 : 1.2)]);

			arc.outerRadius(function (d) {//确定饼图外圆半径大小
				if (fixAngleLayout) {
					return scale_temp(d.value)*2.1;
				} else {//选择Angle表达方式
					return (radiusScale(d.data.total)) * 0.8;
				}
			});
			arc.innerRadius(function () {//确定饼图内圆半径大小
				if (fixAngleLayout) {
					return 8;
				} else {//选择Angle表达方式
					return 0;
				}
			});
			arc.cornerRadius(function () {//确定弦之间间隔大小
				if (fixAngleLayout) {
					return 70;
				} else {//选择Angle表达方式
					return 0;
				}
			});
			
			var newData = data.values
				.filter(function (d) {
					if (legendFilter.indexOf(d.type) === -1) {
						return true;
					}
					else {
						return false;
					}
				});
			var paths = d3.select(this)
				.selectAll('path')
				.data(function () {
					if(fixAngleLayout) {
						return custumLayout(newData);
					} 
					else {
						return pie(newData);
					}
				});
            var div = d3.select("body")
            .append("div") 
            .attr("class", "tooltip");
			
			paths.enter()
				.append("path")
				//.attr('transform', function (d, i) {
//					return 'translate(' + (circleR ) + ',' + (circleR / 2) + ')';
//				})
				.attr("fill", function (d) {
					return d.data.color;
				})
				//.attr("stroke", "gray")
				.attr("class", "outlineArc")
				.attr("d", arc)
				.on("mousemove",function(d){//移动到之后显示量
				d3.mouse(this);
////				div2.style("display","none");
//				div2.html(d.data.meal+"</br>"+"amount: "+d.data.range+"g")
//					.style("left", (d3.event.pageX-50) + "px")//块的位置
//					.style("top", (d3.event.pageY-100) + "px")
//					.style("opacity", 1)
//					.style("display","block");
				div.style("display","none");
				div.html("<b>"+d.data.range+"</br>"+d.data.week+" "+d.data.meal+"</b>"+"</br>"+d.data.type+" 份量: "+d.data.amount)
				.style("font-size", "15px")
					.style("left", (d3.event.pageX+12) + "px")//块的位置
					.style("top", (d3.event.pageY+10) + "px")
					.style("opacity", 1)
					.style("display","block");
				//console.log(d.data.type);//测试用 控制台输出
			})
				.on("mouseout",function(){div.html(" ").style("display","none");})
				.on("click", function (d) {
				div.html(" ").style("display","none");//块消失
					if (originalData.length === 1) {
						d3.select('#' + containerID).select('svg').datum(originalData2).call(chart);
					}
					else {
						originalData2 = originalData;
						d3.select('#' + containerID).select('svg').datum([d.parentData]).call(chart);
					}
				})
				.each(function (d) {
					this._current = d;
					d.parentData = data;
				});

			paths.exit().transition().duration(0).remove();//缩小以后不延迟直接到全图

			paths
				.attr('transform', function () {
					return 'translate(' + (circleR / 2) + ',' + (circleR / 2) + ')';
				})//每个小图移动位置
				.attr("fill", function (d) {
					return d.data.color;
				})
				.transition()
				.duration(1000)
				.attrTween("d", function (d) {//表明数据是刷新后的新数据，用动画
				    var i = d3.interpolate(this._current, d);//插值函数，在两个参数间插值
				   // this._current = i(10);
				    return function (t) {
					    return arc(i(t));
				    };
			    })
				.each('end', function (d) {//选项时重新附值 可以看到transition变换
					this._current = d;
					d.parentData = data;
				});
		};

		return chart;
	};

	d3.custumPieLayout = function () {
		var fixAngle,
			valueFun,
			sortcomparator,
			padAngle = 0.3;

		var pieLayoutObj = function (startAngle, endAngle, padAngle, value, data) {
			this.startAngle = startAngle;//arc弧开始角度
			this.endAngle = endAngle;//arc弧结束角度
			this.padAngle = padAngle;//每个arc弧之间间隔角度
			this.value = value;
			this.data = data;
		};

		var layout = function (data) {

			if (sortcomparator) {
				data.sort(sortcomparator);
			}
			var previousEndAngle = 0,
				outputObj = [];

			data.forEach(function (d) {//对数据集里的每个值，对应圆弧的一组相关属性放入数组内
				outputObj.push(new pieLayoutObj(previousEndAngle, previousEndAngle + fixAngle, padAngle, valueFun(d), d));
				previousEndAngle = previousEndAngle + fixAngle;
			});

			return outputObj;

		};

		layout.sort = function (_) {
			//if(typeof _ !== 'function') return;
			sortcomparator = _;
			return layout;
		};
		layout.fixAngle = function (_) {
			if (!arguments.length) {
				return;
			}//arguments.length实参长度 如果没有传入参数 return
			fixAngle = _;
			return layout;
		};
		layout.value = function (_) {
			if (typeof _ !== 'function') {
				return;
			}
			valueFun = _;
			return layout;
		};
		layout.padAngle = function (_) {
			padAngle = _;
			return layout;
		};

		return layout;
	};

	d3.legend = function () {

		var legendOnclickMthod;//点击
			//legendOnHoverMthod,//滑到上方
//			legendOnmouseHoverMthod,//
//			legendOnmouseOutMthod,//鼠标移开
//			legendOndblclickMthod;

		var chart = function (selection) {

			selection.each(function (data) {//对于每一个选择器中的元素


				var legend_container = d3.select(this);//选择当前的元素

				var wrap = legend_container.selectAll('.legendChart').data([data]);//选择legend_container中类为legendChart的所有元素
				var wrapEnter = wrap.enter().append('g').attr('class', 'legendChart');//创建一个新的g元素属性是class,legendChart
				wrapEnter.append('g');
				var g = wrap.select('g')//注释图标
					.attr('transform', 'translate(0,30)');
                //注释文字标题
				wrapEnter.append('text').style("font-size", "18px")
		.style("font-family", "STXihei").style("font-weight","bold").attr('x', -10).attr('y', 0).text('食物种类');
				//注释图标
				var g_circle = g.selectAll('circle')
					.data(function (d) {
						return Object.keys(d);//返回数组
					});

				g_circle.exit().transition().remove();//移除多余元素

				g_circle.enter()//放入新元素
					.append('circle')
					.attr('r', function () {
						return 10;//注释图标圆半径
					})
					.style('fill', function (d) {
						return data[d].color;//注释图标圆颜色
					})
					.style('opacity', 1)
					.style('stroke', function (d) {//描边
						return data[d].color;
					})
					.style('stroke-width', 2)
					.attr('cx', function () {//圆位置x坐标
						return 0;
					})
					.attr('cy', function (d, i) {//圆位置y坐标
						
					return Math.floor(i) * 30;//floor求一个最接近它的整数，值小于或等于这个浮点数
					})
					.on('mouseout', function () {//鼠标移开
						d3.select(this).style('stroke-width', 2)
							.style('stroke', function (d) {
								return data[d].color;
							});
					})
					.on('mouseover', function () {//鼠标滑过
						d3.select(this).style('stroke-width', 3)
							.style('stroke', function () {
								return 'black';
							});
					})
					.on('click', function (d) {//鼠标点击
						if (d3.select(this).classed("disable")) {//如果可见
							d3.select(this).style("fill", data[d].color)
								.classed("disable", false);//设置不可见
							legendOnclickMthod(data[d].key, true);//修改原数据中是否可见，即图标影响信息图
						} else {
							d3.select(this).classed("disable", true)
								.style("fill", 'white');
							legendOnclickMthod(data[d].key, false);
						}
					});


				g_circle.style('fill', function (d) {
						if (d3.select(this).style('fill') === 'rgb(255, 255, 255)') {
							return 'white';
						}
						else {
							return data[d].color;
						}
					})
					.style('stroke', function (d) {
						return data[d].color;
					})
					.transition()//自动变换
					.duration(1000)//持续时间1000ms
					.attr('cx', function () {
						return 0;
					})
					.attr('cy', function (d,i) {

						return Math.floor(i) * 30;//由于和之前效果相同 所以图标目前没有变换效果
					});
                
				//注释文字
				var g_txt = g.selectAll('text')
					.data(function (d) {
						return Object.keys(d);
					});

				g_txt.exit().transition().remove();

				g_txt.enter()
					.append('text');

				g_txt.text(function (d) {
						return data[d].key.substring(0, 10);//截取下标从0到9的（包含）字符串
					})
					.attr('font-size', '18px')
					.transition()
					.duration(1000)
					.attr('x', function () {
						return 30;
					})
					.attr('y', function (d, i) {
						return i * 30 + 5;
					});

			});
			//return chart;
		};
		
		chart.legendOnclickMthod = function (_) {
			if (!arguments.length) {
				return legendOnclickMthod;
			}
			if (typeof _ !== 'function') {
				return legendOnclickMthod;
			}
			legendOnclickMthod = _;
			return chart;
		};
//		chart.legendOndblclickMthod = function (_) {
//			if (!arguments.length) return legendOndblclickMthod;
//			if (typeof _ != 'function') return legendOndblclickMthod;
//			legendOndblclickMthod = _;
//			return chart;
//		};
//		chart.legendOnmouseOutMthod = function (_) {
//			if (!arguments.length) return legendOnmouseOutMthod;
//			if (typeof _ != 'function') return legendOnmouseOutMthod;
//			legendOnmouseOutMthod = _;
//			return chart;
//		};
//		chart.legendOnmouseHoverMthod = function () {
//			if (!arguments.length) return legendOnmouseHoverMthod;
//			if (typeof _ != 'function') return legendOnmouseHoverMthod;
//			legendOnmouseHoverMthod = _;
//			return chart;
//		};

		return chart;

	};

})();
