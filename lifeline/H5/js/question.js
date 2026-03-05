//浮层
var flag = 0;
var sweetK = 0; //甜秘密
var oilK = 0; //油炸党
var appetiteK = 0; //大胃王
var lazyK = 0; //懒癌症
var tasteK = 0; //口味王

var muscleY = 0; //肌无力
var lazyY = 0; //懒癌症
var obesityY = 0; //似肥宅
var beautyY = 0; //异视界
var delayY = 0; //拖延症

var bodyW = document.body.clientWidth; //获取屏幕可见区域宽
var bodyH = document.body.clientHeight; //获取屏幕可见区域高
var w = bodyW * 0.92; //弹窗宽
var h = w * 1.5; //弹窗高
var nextTop = h * 0.58 + bodyH * 0.05;
var next2Top = h * 0.8 + bodyH * 0.05;
var answerATop = h * 0.45 + bodyH * 0.05;
var answerBTop = h * 0.53 + bodyH * 0.05;
var answerCTop = h * 0.61 + bodyH * 0.05;
var answerDTop = h * 0.69 + bodyH * 0.05;
var hideTop = h * 0.05 + bodyH * 0.05;
var reportTop = h * 0.05 + bodyH * 0.05;
var weiduTop = h * 0.27 + bodyH * 0.05;
var weiduLeft = w * 0.18 + bodyW * 0.04;
//var w2=$("window").height();//document.documentElement.clientWidth;
//console.log(Wh);//控制台输出
//console.log(h);//控制台输出
//	console.log(topgap);//控制台输出

var temp;

$("document").ready(function () {
	//点击弹出浮层

	//口腔科
	$(".clickK").click(function () { //嵌套结构 最里面是第5题和维度图 最外面是诊室介绍
		if (flag == 0) {
							flag=1;
			$(".clickY").css('display', 'block'); //运动诊室开放
			$(".leftSlide2").css('display', 'block');
			$(".keshi2").css('display', 'block');
			$(".leftSlide").css('visibility', 'hidden'); //隐藏
			$("#fullScreen,#floatLayerIntro").remove();

			//    $('#floatLayerIntro').attr('width',w);
			$("body").append(

				//占据整个屏幕Div
				"<div id='fullScreen'></div>" +
				//浮层区

				"<div id='floatLayerIntro' style='background-image:url(./images/koubg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
				//			"<div id='dv'></div>" +

				"<div class='next'><a><img src='./images/go-yin.gif' width='91px' height='47px'></a></div>" +

				//			"<a href='#' class='hide'>隐藏浮层</a>" +
				//                    "<a href='#' class='next'>下一题</a>"+
				"</div>"
			);
			$(".next").css({
				'top': nextTop,
			});
			$("#floatLayerIntro").css({
				'height': h,
			});
			$(".next").click(function () {

				//清除之前的样式
				$("#fullScreen,#floatLayerIntro").remove();
				$("body").append(

					//占据整个屏幕Div
					"<div id='fullScreen'></div>" +
					//浮层区
					"<div id='floatLayerQ' style='background-image:url(./images/1bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
					//				"<div id='dv'></div>" +

					"<div class='answerA4 KQ1A'><a><img src='./images/1A-8.png' width='76%'></a></div>" +
					"<div class='answerB4 KQ1B'><a><img src='./images/1B-8.png' width='76%'></a></div>" +
					"<div class='answerC4 KQ1C'><a><img src='./images/1C-8.png' width='76%'></a></div>" +
					"<div class='answerD4 KQ1D'><a><img src='./images/1D-8.png' width='76%'></a></div>" +
					//				"<a href='#' class='hide'>隐藏浮层</a>" +
					//                    "<a href='#' class='next'>下一题</a>"+
					"</div>"
				);

				$("#floatLayerQ").css({
					'height': h,
				});
				$(".answerA4").css({
					'top': answerATop,
				});
				$(".answerB4").css({
					'top': answerBTop,
				});
				$(".answerC4").css({
					'top': answerCTop,
				});
				$(".answerD4").css({
					'top': answerDTop,
				});
				$(".KQ1A").click(function () {
					if (sweetK < 4) sweetK = 4;
				});
				$(".KQ1B").click(function () {
					if (oilK < 3) oilK = 3;
				});
				$(".KQ1C").click(function () {
					if (oilK < 5) oilK = 5;
				});
				$(".KQ1D").click(function () {
					if (sweetK < 2) sweetK = 2;
				});

				$(".answerA4,.answerB4,.answerC4,.answerD4").click(function () {
					$("#fullScreen,#floatLayerQ").remove();
					//				$("#floatLayerKQ2，#floatLayerKQ1").remove();
					//                if(flag==1){

					$("body").append(
						//占据整个屏幕Div
						"<div id='fullScreen'></div>" +
						//浮层区
						"<div id='floatLayerQ' style='background-image:url(./images/2bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
						"<div id='dv'></div>" +

						"<div class='answerA2 KQ2A'><a><img src='./images/2A-8.png' width='88%'></a></div>" +
						"<div class='answerB2 KQ2B'><a><img src='./images/2B-8.png' width='88%'></a></div>" +
						"<div class='answerC2 KQ2C'><a><img src='./images/2C-8.png' width='88%'></a></div>" +
						"<div class='answerD2 KQ2D'><a><img src='./images/2D-8.png' width='88%'></a></div>" +
						//					"<a href='#' class='hide'>隐藏浮层</a>" +
						//                    "<a href='#' class='next'>下一题</a>"+
						"</div>"
					);
					$("#floatLayerQ").css({
						'height': h,
					});
					$(".answerA2").css({
						'top': answerATop,
					});
					$(".answerB2").css({
						'top': answerBTop,
					});
					$(".answerC2").css({
						'top': answerCTop,
					});
					$(".answerD2").css({
						'top': answerDTop,
					});
					$(".KQ2A").click(function () {
						if (appetiteK < 4) appetiteK = 4;
					});
					$(".KQ2B").click(function () {
						if (appetiteK < 3) appetiteK = 3;
					});
					$(".KQ2C").click(function () {
						if (appetiteK < 2) appetiteK = 2;
					});
					$(".KQ2D").click(function () {
						if (appetiteK <= 0) appetiteK = 0;
					});
					$(".answerA2,.answerB2,.answerC2,.answerD2").click(function () {
						$("#fullScreen,#floatLayerQ").remove();
						//                if(flag==1){

						$("body").append(
							//占据整个屏幕Div
							"<div id='fullScreen'></div>" +
							//浮层区
							"<div id='floatLayerQ' style='background-image:url(./images/3bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
							"<div id='dv'></div>" +

							"<div class='answerA KQ3A'><a><img src='./images/3A-8.png' width='70%'></a></div>" +
							"<div class='answerB KQ3B'><a><img src='./images/3B-8.png' width='70%'></a></div>" +
							"<div class='answerC KQ3C'><a><img src='./images/3C-8.png' width='70%'></a></div>" +
							"<div class='answerD KQ3D'><a><img src='./images/3D-8.png' width='70%'></a></div>" +
							//						"<a href='#' class='hide'>隐藏浮层</a>" +
							//                    "<a href='#' class='next'>下一题</a>"+
							"</div>"
						);
						$("#floatLayerQ").css({
							'height': h,
						});
						$(".answerA").css({
							'top': answerATop,
						});
						$(".answerB").css({
							'top': answerBTop,
						});
						$(".answerC").css({
							'top': answerCTop,
						});
						$(".answerD").css({
							'top': answerDTop,
						});
						$(".KQ3A").click(function () {
							if (lazyK < 5) lazyK = 5;
						});
						$(".KQ3B").click(function () {
							if (lazyK < 2) lazyK = 2;
						});
						$(".KQ3C").click(function () {
							if (lazyK <= 0) lazyK = 0;
						});
						$(".KQ3D").click(function () {
							if (lazyK < 3) lazyK = 3;
						});
						$(".answerA,.answerB,.answerC,.answerD").click(function () {
							$("#fullScreen,#floatLayerQ").remove();
							//                if(flag==1){

							$("body").append(
								//占据整个屏幕Div
								"<div id='fullScreen'></div>" +
								//浮层区
								"<div id='floatLayerQ' style='background-image:url(./images/4bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
								"<div id='dv'></div>" +

								"<div class='answerA KQ4A'><a><img src='./images/4A-8.png' width='67%'></a></div>" +
								"<div class='answerB KQ4B'><a><img src='./images/4B-8.png' width='67%'></a></div>" +
								"<div class='answerC KQ4C'><a><img src='./images/4C-8.png' width='67%'></a></div>" +
								"<div class='answerD KQ4D'><a><img src='./images/4D-8.png' width='67%'></a></div>" +
								//							"<a href='#' class='hide'>隐藏浮层</a>" +
								//                    "<a href='#' class='next'>下一题</a>"+
								"</div>"
							);
							$("#floatLayerQ").css({
								'height': h,
							});
							$(".answerA").css({
								'top': answerATop,
							});
							$(".answerB").css({
								'top': answerBTop,
							});
							$(".answerC").css({
								'top': answerCTop,
							});
							$(".answerD").css({
								'top': answerDTop,
							});
							$(".KQ4A").click(function () {
								if (sweetK <= 0) sweetK = 0;
								if (tasteK <= 0) tasteK = 0;
							});
							$(".KQ4B").click(function () {
								if (sweetK < 5) sweetK = 5;


							});
							$(".KQ4C").click(function () {
								if (sweetK < 4) sweetK = 4;
								if (tasteK < 1) tasteK = 1;
							});
							$(".KQ4D").click(function () {
								if (sweetK < 5) sweetK = 5;
								if (tasteK < 1) tasteK = 1;
							});
							$(".answerA,.answerB,.answerC,.answerD").click(function () {
								$("#fullScreen,#floatLayerQ").remove();
								//                if(flag==1){

								$("body").append(
									//占据整个屏幕Div
									"<div id='fullScreen'></div>" +
									//浮层区
									"<div id='floatLayerQ' style='background-image:url(./images/5bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
									"<div id='dv'></div>" +

									"<div class='answerA KQ5A'><a><img src='./images/5A-8.png' width='67%'></a></div>" +
									"<div class='answerB KQ5B'><a><img src='./images/5B-8.png' width='67%'></a></div>" +
									"<div class='answerC KQ5C'><a><img src='./images/5C-8.png' width='67%'></a></div>" +
									"<div class='answerD KQ5D'><a><img src='./images/5D-8.png' width='67%'></a></div>" +
									//								"<a href='#' class='hide'>隐藏浮层</a>" +
									"</div>"
								);
								$("#floatLayerQ").css({
									'height': h,
								});
								$(".answerA").css({
									'top': answerATop,
								});
								$(".answerB").css({
									'top': answerBTop,
								});
								$(".answerC").css({
									'top': answerCTop,
								});
								$(".answerD").css({
									'top': answerDTop,
								});
								$(".KQ5A").click(function () {

									if (oilK < 4) oilK = 4;
									if (tasteK < 1) tasteK = 1;
								});
								$(".KQ5B").click(function () {
									if (oilK < 4) oilK = 4;
									if (tasteK < 3) tasteK = 3;

								});
								$(".KQ5C").click(function () {
									if (sweetK < 3) sweetK = 3;
									if (oilK < 2) oilK = 2;
									if (tasteK < 1) tasteK = 1;
								});
								$(".KQ5D").click(function () {
									if (sweetK <= 0) sweetK = 0;
									if (oilK <= 0) oilK = 0;
									if (tasteK <= 0) tasteK = 0;
								});
								//隐藏浮层

								$(".answerA,.answerB,.answerC,.answerD").click(function () {
									$("#fullScreen,#floatLayerQ").remove();
									//                if(flag==1){

									$("body").append(
										//占据整个屏幕Div
										"<div id='fullScreen'></div>" +
										//浮层区
										//									"<div id='floatLayerD'><img src='./images/koud.png' width='100%'></div>" +
										"<div id='floatLayerD' style='background-image:url(./images/koud.png);background-repeat: no-repeat;background-size: 100%;'>" +

										//										"<div id='sweetK'></div>" +
										//										"<div id='oilK'></div>" +
										//										"<div id='appetiteK'></div>" +
										//										"<div id='lazyK'></div>" +
										//										"<div id='tasteK'></div>" +


										"<div class='hide'><a><img src='./images/close.png' width='30%'></a></div>" +

										"</div>"
									);

									if (sweetK < 3 && oilK < 3 && appetiteK < 3 && lazyK < 3 && tasteK < 3) {
										$("body").append("<div class='weidu'><a><img src='./images/5low-8.png' width='68%'></a>");
									} else if (sweetK == 3 && oilK == 3 && appetiteK == 3 && lazyK == 3 && tasteK == 3) {
										$("body").append("<div class='weidu'><a><img src='./images/5mid-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK > 3 && lazyK > 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low1-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK > 3 && lazyK > 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low2-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK <= 3 && lazyK > 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low3-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK > 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low4-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK > 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low5-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK <= 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high1-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK <= 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high2-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK > 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high3-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK <= 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high4-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK <= 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high5-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK > 3 && lazyK > 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low12-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK <= 3 && lazyK > 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low13-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK > 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low14-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK > 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low15-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK <= 3 && lazyK > 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low23-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK > 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low24-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK > 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low25-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK <= 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low34-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK <= 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low35-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK > 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/low45-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK > 3 && appetiteK <= 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high12-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK > 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high13-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK <= 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high14-8.png' width='68%'></a>");
									} else if (sweetK > 3 && oilK <= 3 && appetiteK <= 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high15-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK > 3 && lazyK <= 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high23-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK <= 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high24-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK > 3 && appetiteK <= 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/high25-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK > 3 && lazyK > 3 && tasteK <= 3) {
										$("body").append(
											"<div class='weidu'><a><img src='./images/high34-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK > 3 && lazyK <= 3 && tasteK > 3) {
										$("body").append(
											"<div class='weidu'><a><img src='./images/high35-8.png' width='68%'></a>");
									} else if (sweetK <= 3 && oilK <= 3 && appetiteK <= 3 && lazyK > 3 && tasteK > 3) {
										$("body").append(
											"<div class='weidu'><a><img src='./images/high45-8.png' width='68%'></a>");
									} else {
										$("body").append(
											"<div class='weidu'><a><img src='./images/5high-8.png'width='68%'></a>"
										);
									}

									$("#floatLayerD").css({
										'height': h,
									});
									$(".weidu").css({
										'top': weiduTop,
										'left': weiduLeft,
									});

									$(".hide").css({
										'top': hideTop,
									});
									//隐藏浮层


									$(".hide").click(function () {
										temp=$("#fullScreen,#floatLayerD,.weidu");
										$("#fullScreen,#floatLayerD,.weidu").remove();
//										sweetK = oilK = appetiteK = lazyK = tasteK = 0;

									});
									//在页面节点中显示变量值
									var d = document.getElementById('sweetK'); //获取div的节点
									d.innerHTML = sweetK; //在div节点上显示flag的值
									var d = document.getElementById('oilK'); //获取div的节点
									d.innerHTML = oilK; //在div节点上显示flag的值
									var d = document.getElementById('appetiteK'); //获取div的节点
									d.innerHTML = appetiteK; //在div节点上显示flag的值
									var d = document.getElementById('lazyK'); //获取div的节点
									d.innerHTML = lazyK; //在div节点上显示flag的值
									var d = document.getElementById('tasteK'); //获取div的节点
									d.innerHTML = tasteK; //在div节点上显示flag的值
									
								});
								
							});

						});

					});

				});

			});
			$(".hide").css({
				'top': hideTop,
			});
			$(".hide").click(function () {
				$("#fullScreen,#floatLayerIntro").remove();
			});
		} else {
			$(".clickY").css('display', 'block'); //运动诊室开放

			$("body").append(
//										//占据整个屏幕Div
										"<div id='Result'></div>" 
								);		
			$("#Result").html(temp);//重新加载结果界面
//$("#fullScreen,#floatLayerD,.weidu").append();

			$(".hide").click(function () {
//				temp=$("#fullScreen,#floatLayerD,.weidu");
				$("#fullScreen,#floatLayerD,.weidu").remove();
//				sweetK = oilK = appetiteK = lazyK = tasteK = 0;

			});
		}
	});
	//运动诊室
	$(".clickY").click(function () { //嵌套结构 最里面是第5题和维度图 最外面是诊室介绍
		$("#fullScreen,#floatLayerIntro").remove();
		$("body").append(

			//占据整个屏幕Div
			"<div id='fullScreen'></div>" +
			//浮层区
			"<div id='floatLayerIntro' style='background-image:url(./images/zhengbg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
			"<div id='dv'></div>" +
			"<div class='next2'><a><img src='./images/go-zheng.gif' width='91px' height='47px'></a></div>" +

			//			"<a href='#' class='hide'>隐藏浮层</a>" +
			//                    "<a href='#' class='next'>下一题</a>"+
			"</div>"
		);
		$("#floatLayerIntro").css({
			'height': h,
		});
		$(".next2").css({
			'top': next2Top,
		});
		$(".next2").click(function () {

			//清除之前的样式
			$("#fullScreen,#floatLayerIntro").remove();
			$("body").append(

				//占据整个屏幕Div
				"<div id='fullScreen'></div>" +
				//浮层区
				"<div id='floatLayerQ' style='background-image:url(./images/2-1bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
				//				"<div id='dv'></div>" +

				"<div class='answerA3 YQ1A'><a><img src='./images/2-1A-8.png' width='57%'></a></div>" +
				"<div class='answerB3 YQ1B'><a><img src='./images/2-1B-8.png' width='57%'></a></div>" +
				"<div class='answerC3 YQ1C'><a><img src='./images/2-1C-8.png' width='57%'></a></div>" +
				"<div class='answerD3 YQ1D'><a><img src='./images/2-1D-8.png' width='57%'></a></div>" +
				//				"<a href='#' class='hide'>隐藏浮层</a>" +
				//                    "<a href='#' class='next'>下一题</a>"+
				"</div>"
			);
			$("#floatLayerQ").css({
				'height': h,
			});
			$(".answerA3").css({
				'top': answerATop,
			});
			$(".answerB3").css({
				'top': answerBTop,
			});
			$(".answerC3").css({
				'top': answerCTop,
			});
			$(".answerD3").css({
				'top': answerDTop,
			});
			$(".YQ1A").click(function () {
				if (muscleY < 4) muscleY = 4;
			});
			$(".YQ1B").click(function () {
				if (lazyY < 4) lazyY = 4;
				if (obesityY < 3) obesityY = 3;
			});
			$(".YQ1C").click(function () {
				if (muscleY < 4) muscleY = 4;
			});
			$(".YQ1D").click(function () {
				if (muscleY < 1) muscleY = 1;
				if (obesityY < 1) obesityY = 1;
			});

			$(".answerA3,.answerB3,.answerC3,.answerD3").click(function () {
				$("#fullScreen,#floatLayerQ").remove();
				//				$("#floatLayerKQ2，#floatLayerKQ1").remove();
				//                if(flag==1){

				$("body").append(
					//占据整个屏幕Div
					"<div id='fullScreen'></div>" +
					//浮层区
					"<div id='floatLayerQ' style='background-image:url(./images/2-2bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
					//				"<div id='dv'></div>" +

					"<div class='answerA4 YQ2A'><a><img src='./images/2-2A-8.png' width='81%'></a></div>" +
					"<div class='answerB4 YQ2B'><a><img src='./images/2-2B-8.png' width='81%'></a></div>" +
					"<div class='answerC4 YQ2C'><a><img src='./images/2-2C-8.png' width='81%'></a></div>" +
					"<div class='answerD4 YQ2D'><a><img src='./images/2-2D-8.png' width='81%'></a></div>" +
					//					"<a href='#' class='hide'>隐藏浮层</a>" +
					//					"<a href='#' class='hide'>隐藏浮层</a>" +
					//                    "<a href='#' class='next'>下一题</a>"+
					"</div>"
				);
				$("#floatLayerQ").css({
					'height': h,
				});
				$(".answerA4").css({
					'top': answerATop,
				});
				$(".answerB4").css({
					'top': answerBTop,
				});
				$(".answerC4").css({
					'top': answerCTop,
				});
				$(".answerD4").css({
					'top': answerDTop,
				});
				$(".YQ2A").click(function () {
					if (lazyY < 5) lazyY = 5;
					if (obesityY < 4) obesityY = 4;
				});
				$(".YQ2B").click(function () {
					if (lazyY < 5) lazyY = 5;
					if (obesityY < 3) obesityY = 3;
				});
				$(".YQ2C").click(function () {
					if (lazyY < 5) lazyY = 5;
					if (obesityY < 3) obesityY = 3;
				});
				$(".YQ2D").click(function () {
					if (lazyY < 1) lazyY = 1;
				});
				$(".answerA4,.answerB4,.answerC4,.answerD4").click(function () {
					$("#fullScreen,#floatLayerQ").remove();
					//                if(flag==1){

					$("body").append(
						//占据整个屏幕Div
						"<div id='fullScreen'></div>" +
						//浮层区
						"<div id='floatLayerQ' style='background-image:url(./images/2-3bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
						//				"<div id='dv'></div>" +

						"<div class='answerA4 YQ3A'><a><img src='./images/2-3A-8.png' width='81%'></a></div>" +
						"<div class='answerB4 YQ3B'><a><img src='./images/2-3B-8.png' width='81%'></a></div>" +
						"<div class='answerC4 YQ3C'><a><img src='./images/2-3C-8.png' width='81%'></a></div>" +
						"<div class='answerD4 YQ3D'><a><img src='./images/2-3D-8.png' width='81%'></a></div>" +
						//						"<a href='#' class='hide'>隐藏浮层</a>" +
						//						"<a href='#' class='hide'>隐藏浮层</a>" +
						//                    "<a href='#' class='next'>下一题</a>"+
						"</div>"
					);
					$("#floatLayerQ").css({
						'height': h,
					});
					$(".answerA4").css({
						'top': answerATop,
					});
					$(".answerB4").css({
						'top': answerBTop,
					});
					$(".answerC4").css({
						'top': answerCTop,
					});
					$(".answerD4").css({
						'top': answerDTop,
					});
					$(".YQ3A").click(function () {
						if (muscleY < 5) muscleY = 5;
					});
					$(".YQ3B").click(function () {
						if (muscleY < 3) muscleY = 3;
					});
					$(".YQ3C").click(function () {
						if (muscleY < 1) muscleY = 1;
					});
					$(".YQ3D").click(function () {
						if (muscleY <= 0) muscleY = 0;
					});
					$(".answerA4,.answerB4,.answerC4,.answerD4").click(function () {
						$("#fullScreen,#floatLayerQ").remove();
						//                if(flag==1){

						$("body").append(
							//占据整个屏幕Div
							"<div id='fullScreen'></div>" +
							//浮层区
							"<div id='floatLayerQ' style='background-image:url(./images/2-4bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
							//				"<div id='dv'></div>" +

							"<div class='answerA YQ4A'><a><img src='./images/2-4A-8.png' width='65%'></a></div>" +
							"<div class='answerB YQ4B'><a><img src='./images/2-4B-8.png' width='65%'></a></div>" +
							"<div class='answerC YQ4C'><a><img src='./images/2-4C-8.png' width='65%'></a></div>" +
							"<div class='answerD YQ4D'><a><img src='./images/2-4D-8.png' width='65%'></a></div>" +
							//							"<a href='#' class='hide'>隐藏浮层</a>" +
							//                    "<a href='#' class='next'>下一题</a>"+
							"</div>"
						);
						$("#floatLayerQ").css({
							'height': h,
						});
						$(".answerA").css({
							'top': answerATop,
						});
						$(".answerB").css({
							'top': answerBTop,
						});
						$(".answerC").css({
							'top': answerCTop,
						});
						$(".answerD").css({
							'top': answerDTop,
						});
						$(".YQ4A").click(function () {
							if (beautyY < 3) beautyY = 3;
						});
						$(".YQ4B").click(function () {
							if (beautyY < 3) beautyY = 3;
						});
						$(".YQ4C").click(function () {
							if (beautyY < 1) beautyY = 1;
						});
						$(".YQ4D").click(function () {
							if (beautyY < 1) beautyY = 1;
						});
						$(".answerA,.answerB,.answerC,.answerD").click(function () {
							$("#fullScreen,#floatLayerQ").remove();
							//                if(flag==1){

							$("body").append(
								//占据整个屏幕Div
								"<div id='fullScreen'></div>" +
								//浮层区
								"<div id='floatLayerQ' style='background-image:url(./images/2-5bg-8.png);background-repeat: no-repeat;background-size: 100%;'>" +
								//				"<div id='dv'></div>" +

								"<div class='answerA4 YQ5A'><a><img src='./images/2-5A-8.png' width='83%'></a></div>" +
								"<div class='answerB4 YQ5B'><a><img src='./images/2-5B-8.png' width='83%'></a></div>" +
								"<div class='answerC4 YQ5C'><a><img src='./images/2-5C-8.png' width='83%'></a></div>" +
								"<div class='answerD4 YQ5D'><a><img src='./images/2-5D-8.png' width='83%'></a></div>" +
								//																"<a href='#' class='hide'>隐藏浮层</a>" +
								"</div>"
							);
							$("#floatLayerQ").css({
								'height': h,
							});
							$(".answerA4").css({
								'top': answerATop,
							});
							$(".answerB4").css({
								'top': answerBTop,
							});
							$(".answerC4").css({
								'top': answerCTop,
							});
							$(".answerD4").css({
								'top': answerDTop,
							});
							$(".YQ5A").click(function () {

								if (delayY < 4) delayY = 4;
								if (obesityY < 3) obesityY = 3;
							});
							$(".YQ5B").click(function () {
								if (delayY < 3) delayY = 3;
							});
							$(".YQ5C").click(function () {
								if (delayY < 1) delayY = 1;
							});
							$(".YQ5D").click(function () {

								if (delayY <= 0) delayY = 0;
							});
							//隐藏浮层

							$(".answerA4,.answerB4,.answerC4,.answerD4").click(function () {
								$("#fullScreen,#floatLayerQ").remove();
								//                if(flag==1){

								$("body").append(
									//占据整个屏幕Div
									"<div id='fullScreen'></div>" +
									//浮层区

									//									"<div class='hide'><a><img src='./images/close.png' width='30%'></a></div>" +
									"<div id='floatLayerD'style='background-image:url(./images/zhengd.png);background-repeat: no-repeat;background-size: 100%;'>" +
																		"<div class='report'><a><img src='./images/report.gif' width='65%'></a></div>" +
//									"<a class='hide'>隐藏浮层</a>" +
//									"<div id='muscleY'></div>" +
//									"<div id='lazyY'></div>" +
//									"<div id='obesityY'></div>" +
//									"<div id='beautyY'></div>" +
//									"<div id='delayY'></div>" +



									"</div>"
								);
								
								if (muscleY < 3 && lazyY < 3 && obesityY < 3 && beautyY < 3 && delayY < 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-5low-8.png' width='68%'></a>");
									} else if (muscleY == 3 && lazyY == 3 && obesityY == 3 && beautyY == 3 && delayY == 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-5mid-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY > 3 && beautyY > 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low1-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY > 3 && beautyY > 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low2-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY <= 3 && beautyY > 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low3-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY > 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low4-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY > 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low5-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY <= 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high1-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY <= 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high2-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY > 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high3-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY <= 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high4-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY <= 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high5-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY > 3 && beautyY > 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low12-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY <= 3 && beautyY > 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low13-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY > 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low14-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY > 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low15-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY <= 3 && beautyY > 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low23-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY > 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low24-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY > 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low25-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY <= 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low34-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY <= 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low35-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY > 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-low45-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY > 3 && obesityY <= 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high12-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY > 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high13-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY <= 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high14-8.png' width='68%'></a>");
									} else if (muscleY > 3 && lazyY <= 3 && obesityY <= 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high15-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY > 3 && beautyY <= 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high23-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY <= 3 && beautyY > 3 && delayY <= 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high24-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY > 3 && obesityY <= 3 && beautyY <= 3 && delayY > 3) {
										$("body").append("<div class='weidu'><a><img src='./images/2-high25-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY > 3 && beautyY > 3 && delayY <= 3) {
										$("body").append(
											"<div class='weidu'><a><img src='./images/2-high34-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY > 3 && beautyY <= 3 && delayY > 3) {
										$("body").append(
											"<div class='weidu'><a><img src='./images/2-high35-8.png' width='68%'></a>");
									} else if (muscleY <= 3 && lazyY <= 3 && obesityY <= 3 && beautyY > 3 && delayY > 3) {
										$("body").append(
											"<div class='weidu'><a><img src='./images/2-high45-8.png' width='68%'></a>");
									} else {
										$("body").append(
											"<div class='weidu'><a><img src='./images/2-5high-8.png'width='68%'></a>"
										);
									}
								
								$("#floatLayerD").css({
									'height': h,
								});
								$(".weidu").css({
										'top': weiduTop,
										'left': weiduLeft,
									});
								$(".report").css({
									'top': reportTop,
								});
								$(".hide").css({
									'top': hideTop,
								});

								//隐藏浮层


//								$(".hide").click(function () {
//									$("#fullScreen,#floatLayerD").remove();
//									muscleY = lazyY = obesityY = beautyY = delayY = 0;
//								});


//								//在页面节点中显示变量值
//								var d = document.getElementById('muscleY'); //获取div的节点
//								d.innerHTML = muscleY; //在div节点上显示flag的值
//								var d = document.getElementById('lazyY'); //获取div的节点
//								d.innerHTML = lazyY; //在div节点上显示flag的值
//								var d = document.getElementById('obesityY'); //获取div的节点
//								d.innerHTML = obesityY; //在div节点上显示flag的值
//								var d = document.getElementById('beautyY'); //获取div的节点
//								d.innerHTML = beautyY; //在div节点上显示flag的值
//								var d = document.getElementById('delayY'); //获取div的节点
//								d.innerHTML = delayY; //在div节点上显示flag的值
								//            }
								//            else if(flag==2){
								//            	$("body").append
								//                (   
								//                    "<div id='fullScreen'></div>"+
								//                    "<div id='floatLayerKQ1'>" +
								//                    "<a href='#' class='hide'>隐藏浮层</a>"+
								//                    "<a href='#' class='next'>  下一题2</a>"+
								//                "</div>"
								//            );
								//            }

								//隐藏浮层

								$(".report").click(function () {
									$("#fullScreen,#floatLayerD,.weidu").remove();
									//                if(flag==1){
									var result = (sweetK + oilK + appetiteK + lazyK + tasteK + muscleY + lazyY + obesityY + beautyY + delayY) * 2;
									if (result <= 20) {
										$("body").append(
											//占据整个屏幕Div
											"<div id='fullScreen'></div>" +
											//浮层区
											"<div id='floatLayerR'>" +
											"<div class='result'><img src='./images/r1-8.png' width='100%'></div>" +
											"</div>"
										);
									} else if (result <= 40) {
										$("body").append(
											//占据整个屏幕Div
											"<div id='fullScreen'></div>" +
											//浮层区
											"<div id='floatLayerR'>" +
											"<div class='result'><img src='./images/r2-8.png' width='100%'></div>" +
											"</div>"
										);
									} else if (result <= 60) {
										$("body").append(
											//占据整个屏幕Div
											"<div id='fullScreen'></div>" +
											//浮层区
											"<div id='floatLayerR'>" +
											"<div class='result'><img src='./images/r3-8.png' width='100%'></div>" +
											"</div>"
										);
									} else if (result <= 80) {
										$("body").append(
											//占据整个屏幕Div
											"<div id='fullScreen'></div>" +
											//浮层区
											"<div id='floatLayerR'>" +
											"<div class='result'><img src='./images/r4-8.png' width='100%'></div>" +
											"</div>"
										);
									} else {
										$("body").append(
											//占据整个屏幕Div
											"<div id='fullScreen'></div>" +
											//浮层区
											"<div id='floatLayerR'>" +
											"<div class='result'><img src='./images/r5-8.png' width='100%'></div>" +
											"</div>"
										);
									}
									$("#floatLayerR").css({
										'height': h,
									});

								});
								//$(".hide").click(function () {
								//	muscleY=lazyY=obesityY=beautyY=delayY=0；
								//															$("#fullScreen,#floatLayerD").remove();
								////						muscleY=lazyY=obesityY=beautyY=delayY=0；
								//														});
							});
							//隐藏浮层
							//														$(".hide").click(function () {
							//															$("#fullScreen,#floatLayerQ").remove();
							//							
							//														});

						});
						//						$(".hide").click(function () {
						//							$("#fullScreen,#floatLayerQ").remove();
						//
						//						});

					});
					//					$(".hide").click(function () {
					//						$("#fullScreen,#floatLayerQ").remove();
					//
					//					});

				});
				//				$(".hide").click(function () {
				//					$("#fullScreen,#floatLayerQ").remove();
				//
				//				});

			});
			//			$(".hide").click(function () {
			//				$("#fullScreen,#floatLayerQ").remove();
			//			});

		});
		//		$(".hide").click(function () {
		//			$("#fullScreen,#floatLayerIntro").remove();
		//		});

	});
});
