var table;
var countF = 0;
var countM = 0;
var rowCount;
var x = 0;
var y = 0;
var time = [35];
var morbidity = [35];
var age = [35],
	sex = [35];
var radius, alphaM, alphaF, alphaT;
var curRegion = "total_areas";
var colorM, colorF, colorT;
var totalAdd = 0.3;
var f;
var flagT = false;
var r = 25;

function preload() {
	table = loadTable("../sources/young_rate.csv", "header"); //读取时舍去第一行
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(1100, 640);
	colorM = color(197, 233, 155);
	colorF = color(143, 188, 148);
	colorT = color(84, 134, 135);
textFont(f);
	
	rowCount = table.getRowCount();

	for (var row = 0; row < rowCount; row++) {
		time[row] = table.get(row, 0);
		morbidity[row] = table.get(row, 3);
		age[row] = table.get(row, 1);
		sex[row] = table.get(row, 2);
	}
	radius = 12;
}

function draw() {

	background(255);
	smooth();
	textSize(17);
	noStroke();
	drawLegend();
	drawCircle();
	fill(51, 51, 51);
}


function drawLegend() {
	stroke(51,51,51);
	strokeWeight(1);
	line(430, 70, 430, 550);
	line(50, 550, 1000, 550);
	noStroke();
	textSize(18);
	fill(51,51,51);
	text("%", 420, 50);
	text("年份", 980, 520);
	text("年龄", 20, 520);
	ellipse(100, 550, 5, 5);
	text("7-9岁", 85, 580);
	ellipse(180, 550, 5, 5);
	text("10-12岁", 155, 580);
	ellipse(260, 550, 5, 5);
	text("13-15岁", 235, 580);
	ellipse(340, 550, 5, 5);
	text("16-17岁", 315, 580);
	ellipse(520, 550, 5, 5);
	text("1991年", 505, 580);
	ellipse(600, 550, 5, 5);
	text("1993年", 585, 580);
	ellipse(680, 550, 5, 5);
	text("1997年", 665, 580);
	ellipse(760, 550, 5, 5);
	text("2000年", 745, 580);
	ellipse(840, 550, 5, 5);
	text("2004年", 825, 580);
	ellipse(920, 550, 5, 5);
	text("2009年", 905, 580);
	fill(51, 51, 51);
	for(var i=0;i<30;i=i+5)
	   ellipse(430,(550 -i * 16),5,5);
	text("5", 440,550-5*16);
	text("10", 440,550-10*16);
	text("15", 440,550-15*16);
	text("20", 440,550-20*16);
	text("25", 440,550-25*16);
	textSize(19);
	text("2010年中国不同年龄段", 50, 50);
	text("儿童青少年的高血压患病率", 40, 80);
	text("1991-2009年6-17岁", 600, 50);
	text("儿童青少年高血压患病率变化趋势", 550, 80);
	textSize(17);
	fill(120,120,120);
	text("*鼠标点击注释圆圈", 895, 185);
	text("高亮该区域", 940, 215);
	textSize(18);
	fill(colorM, alphaM);
	ellipse(980, 50, r, r);
	text("男", 1000, 55);
	fill(colorF, alphaF);
	ellipse(980, 90, r, r);
	text("女", 1000, 95);
	fill(colorT, alphaT);
	ellipse(980, 130, r, r);
	text("合计", 1000, 135);
}

function drawCircle() {
	for (var row = 0; row < rowCount; row++) {
		if (age[row] == "7_9")
			x = 100;
		else if (age[row] == "10_12")
			x = 180;
		else if (age[row] == "13_15")
			x = 260;
		else if (age[row] == "16_17")
			x = 340;
		else if (time[row] == 1991)
			x = 520;
		else if (time[row] == 1993)
			x = 600;
		else if (time[row] == 1997)
			x = 680;
		else if (time[row] == 2000)
			x = 760;
		else if (time[row] == 2004)
			x = 840;
		else if (time[row] == 2009)
			x = 920;

		if (sex[row] == "m")
			fill(colorM);
		else if (sex[row] == "f")
			fill(colorF);
		else if (sex[row] == "total")
			fill(colorT);
		else
			fill(255, 0, 0);
		ellipse(x, (550 - morbidity[row] * 16), (radius * Math.sqrt(morbidity[row] / PI) * 1.5), (radius * Math.sqrt(morbidity[row] / PI) * 1.5));
	}
}

function mouseClicked() {
	if (mouseX > 940*0.8 && mouseX < 990*0.8) {
		if (mouseY > 40*0.8 && mouseY < 60*0.9) {
			colorM = color(197, 233, 155);
			colorF = color(143, 188, 148, 30);
			colorT = color(84, 134, 135, 30);
		}
		if (mouseY > 80*0.8 && mouseY < 100*0.8) {
			colorM = color(197, 233, 155, 30);
			colorF = color(143, 188, 148);
			colorT = color(84, 134, 135, 30);
		}
		if (mouseY > 120*0.8 && mouseY < 140*0.8) {
			colorM = color(197, 233, 155, 30);
			colorF = color(143, 188, 148, 30);
			colorT = color(84, 134, 135);
		}
	} else {
		colorM = color(197, 233, 155);
		colorF = color(143, 188, 148);
		colorT = color(84, 134, 135);
	}
}
