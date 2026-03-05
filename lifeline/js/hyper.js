var table;
var countF = 0;
var countM = 0;
var rowCount;
var id = [2100],
	age = [2100];
var date = [2100];
var sex = [2100];

var x;
var y;
var radius = 9;
var curSex = 0;
var colorF;
var colorM;
var f;
var agecount = [2100];

function preload() {
	table = loadTable("../sources/MedData.csv", "header"); //读取时舍去第一行
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(1240, 670);
	colorF = color(254, 5, 87);
	colorM = color(10, 171, 186);
	textFont(f);
	rowCount = table.getRowCount();
	for (var row = 0; row < rowCount; row++) {
		id[row] = table.get(row, 0);
		age[row] = table.get(row, 3);
		date[row] = table.get(row, 5);
		sex[row] = table.get(row, 2);
	}

	for (var row = 0; row < 2100; row++) {
		agecount[row] = 0;
	}
	for (var r = 0; r < rowCount; r++) {
		if (age[r] == age[0]&&date[r] == date[0]&&sex[r] == sex[0]) {
			agecount[0]++;
		}
	}

	for (var row = 1; row < rowCount; row++) {
		if (age[row] == age[row - 1]&&date[row] == date[row-1]&&sex[row-1] == sex[row-1])
			row++;
		else {
			for (var r = 0; r < rowCount; r++) {
				if (age[r] == age[row]&&date[r] == date[row]&&sex[r] == sex[row]) {
					agecount[row]++;
				}
			}
		}
	}
}
var count = 0;

function draw() {

	background(255);
	smooth();
	noStroke();

	fill(100, 100, 100);
	textSize(16);
	text("*键盘按F或f查看女性情况", 155, 80);
	text("按M或m查看男性情况", 160, 110);
	text("按数字0返回总体情况", 160, 140);
	textSize(18);
	
	fill(colorM);
	rect(980, 80, 20, 20);
	text("男性", 1010, 95);
	fill(colorF);
	rect(980, 120, 20, 20);
	text("女性", 1010, 135);
	
	fill(0, 0, 0);
	text("1999", 180, 620);
	text("2000", 280, 620);
	text("2001", 380, 620);
	text("2002", 480, 620);
	text("2003", 580, 620);
	text("2004", 680, 620);
	text("2005", 780, 620);
	text("2006", 880, 620);
	text("就诊年份", 970, 630);
	text("年龄", 40, 40);
	text("20", 50, 640 - 20 * 6);
	text("30", 50, 640 - 30 * 6);
	text("40", 50, 640 - 40 * 6);
	text("50", 50, 640 - 50 * 6);
	text("60", 50, 640 - 60 * 6);
	text("70", 50, 640 - 70 * 6);
	text("80", 50, 640 - 80 * 6);
	text("90", 50, 640 - 90 * 6);
	
	stroke(119, 119, 119);
	strokeWeight(2);
	line(90, 600, 1030, 600);
	line(1020, 595, 1030, 600);
	line(1020, 605, 1030, 600);
	line(90, 600, 90, 20);
	line(85, 30, 90, 20);
	line(95, 30, 90, 20);

	line(200, 600, 200, 590);
	line(300, 600, 300, 590);
	line(400, 600, 400, 590);
	line(500, 600, 500, 590);
	line(600, 600, 600, 590);
	line(700, 600, 700, 590);
	line(800, 600, 800, 590);
	line(900, 600, 900, 590);

	line(90, 640 - 20 * 6, 100, 640 - 20 * 6);
	line(90, 640 - 30 * 6, 100, 640 - 30 * 6);
	line(90, 640 - 40 * 6, 100, 640 - 40 * 6);
	line(90, 640 - 50 * 6, 100, 640 - 50 * 6);
	line(90, 640 - 60 * 6, 100, 640 - 60 * 6);
	line(90, 640 - 70 * 6, 100, 640 - 70 * 6);
	line(90, 640 - 80 * 6, 100, 640 - 80 * 6);
	line(90, 640 - 90 * 6, 100, 640 - 90 * 6);
	noStroke();
smooth();
	for (var row = 0; row < rowCount; row++) {
		if (date[row] == 1999)
			x = 200;
		else if (date[row] == 2000)
			x = 300;
		else if (date[row] == 2001)
			x = 400;
		else if (date[row] == 2002)
			x = 500;
		else if (date[row] == 2003)
			x = 600;
		else if (date[row] == 2004)
			x = 700;
		else if (date[row] == 2005)
			x = 800;
		else if (date[row] == 2006)
			x = 900;
		else
			x = 1000;

		if (sex[row] == "F") {
			countF++;

			if (curSex == 2)
				fill(254, 5, 87, 2);
			else
				fill(colorF);
		
			if (agecount[row] != 0)

				ellipse(x + 20, 640 - age[row] * 6, radius * Math.sqrt(agecount[row] / Math.PI) * 1.6, radius * Math.sqrt(agecount[row] /  Math.PI) * 1.6);
			else;


		} else {
			countM++;

			if (curSex == 1)
				fill(10, 171, 186, 4);
			else
				fill(colorM);
						if (agecount[row] != 0)
				ellipse(x, 640 - age[row] * 6, radius * Math.sqrt(agecount[row] /  Math.PI) * 1.6, radius * Math.sqrt(agecount[row] /  Math.PI) * 1.6);
			else;
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
