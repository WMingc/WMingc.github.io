var table;
var countF = 0;
var countM = 0;
var rowCount;
var id = [4000],
	age = [4000],
	agecount = [4000],
	prebmi = [4000];
var weight0 = [4000],
	weight1 = [4000],
	weight2 = [4000],
	weight3 = [4000],
	weight4 = [4000];
var sex = [4000];
var x;
var y;
var radius;
var curSex = 0;
var colorF;
var colorM;
var f;
var count = 0;

function preload() {
	table = loadTable("../sources/bodyData.csv", "header"); //读取时舍去第一行
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(1240, 670);
	colorF = color(255, 0, 0);
	colorM = color(68, 34, 204);
	textFont(f);

	rowCount = table.getRowCount();

	for (var row = 0; row < rowCount; row++) {

		id[row] = table.get(row, 0);
		age[row] = table.get(row, 1);
		agecount[row] = table.get(row, 6);
		prebmi[row] = table.get(row, 2);
		sex[row] = table.get(row, 3);
		weight0[row] = table.get(row, 8);
		weight1[row] = table.get(row, 9);
		weight2[row] = table.get(row, 10);
		weight3[row] = table.get(row, 11);
		weight4[row] = table.get(row, 12);
	}
	radius = 6;
}


function draw() {
	background(255);
	textSize(20);
	noStroke();
	smooth();
	fill(colorM);
	rect(980, 80, 30, 25);
	text("男性", 1030, 97);
	fill(255, 0, 0);
	rect(980, 120, 30, 25);
	text("女性", 1030, 137);

	fill(100, 100, 100);
	textSize(17);
	text("*键盘按F或f查看女性情况", 915, 490);
	text("按M或m查看男性情况", 935, 520);
	text("按数字0返回总体情况", 940, 550);
		textSize(18);
	text("低体重", 100, 600);
	text("18.5", 18.5 * 40 - 560, 640);
	text("正常", 290, 600);
	text("24", 24 * 40 - 560, 640);
	text("超重", 470, 600);
	text("28", 28 * 40 - 560, 640);
	text("肥胖", 28 * 40 - 280, 600);
	text("BMI（身体质量指数）", 980, 660);
	text("年龄", 100, 40);
	text("10", 30, 680 - 10 * 9 - 60);
	text("20", 30, 680 - 20 * 9 - 60);
	text("30", 30, 680 - 30 * 9 - 60);
	text("40", 30, 680 - 40 * 9 - 60);
	text("50", 30, 680 - 50 * 9 - 60);
	text("60", 30, 680 - 60 * 9 - 60);
//	fill(0, 0, 0);

//	text("减脂营样本人群年龄及BMI分布", 400, 40);

	stroke(85, 85, 85);
	strokeWeight(2);
	line(70, 620, 1180, 620);
	line(1170, 615, 1180, 620);
	line(1170, 625, 1180, 620);
	line(70, 620, 70, 20);
	line(65, 30, 70, 20);
	line(75, 30, 70, 20);

	line(18.5 * 40 - 550, 620, 18.5 * 40 - 550, 610);
	line(24 * 40 - 550, 620, 24 * 40 - 550, 610);
	line(28 * 40 - 550, 620, 28 * 40 - 550, 610);
	line(70, 680 - 10 * 9 - 60, 80, 680 - 10 * 9 - 60);
	line(70, 680 - 20 * 9 - 60, 80, 680 - 20 * 9 - 60);
	line(70, 680 - 30 * 9 - 60, 80, 680 - 30 * 9 - 60);
	line(70, 680 - 40 * 9 - 60, 80, 680 - 40 * 9 - 60);
	line(70, 680 - 50 * 9 - 60, 80, 680 - 50 * 9 - 60);
	line(70, 680 - 60 * 9 - 60, 80, 680 - 60 * 9 - 60);
	
	for (var row = 0; row < rowCount; row++) {
		if (sex[row] == "F") {
			countF++;
			if (prebmi[row] < 18.5)
				colorF = color(246, 215, 107); //黄色 从浅到深
			else if (prebmi[row] < 24)
				colorF = color(255, 169, 39);
			else if (prebmi[row] < 28)
				colorF = color(252, 107, 10);
			else
				colorF = color(255, 0, 0);
			if (curSex == 0)
				fill(255, 0, 0);
			else if (curSex == 1)
				fill(colorF);
			else
				fill(255, 0, 0, 12);
			smooth();
			noStroke();

			ellipse(prebmi[row] * 40 - 550, 680 - age[row] * 9 - 60, radius, radius);

		} else {
			countM++;
			if (prebmi[row] < 18.5)
				colorM = color(253, 253, 189);
			else if (prebmi[row] < 24)
				colorM = color(154, 224, 190);
			else if (prebmi[row] < 28)
				colorM = color(29, 145, 192);
			else
				colorM = color(18, 46, 126);
			if (curSex == 0)
				fill(18, 46, 126);
			else if (curSex == 2)
				fill(colorM);
			else
				fill(68, 34, 204, 36);
			smooth();
			noStroke();
			ellipse(prebmi[row] * 40 - 550, 680 - age[row] * 9 - 60, radius, radius);

		}
	}

}

function keyPressed() {
	if (key == '0') {
		curSex = 0;
	}
	if (key == 'F' || key == 'f') {
		curSex = 1;
	}
	if (key == 'M' || key == 'm') {
		curSex = 2;
	}
}
