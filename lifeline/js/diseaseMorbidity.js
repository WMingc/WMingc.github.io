var table;
var countF = 0;
var countM = 0;
var rowCount;
var x = 0;
var y = 0;
var time = [260];
var morbidity = [260];
var sort = [260],
	region = [260];
var radius;
var curRegion = "total_areas";
var color93, color98, color03, color08, colorU, colorR, colorT, RegionHighlight, RegionNoun;
var totalAdd = 0.3;
var f;
var flagT = false;
var flagTime = 1993;

function preload() {
	table = loadTable("../sources/disease_morbidity.csv", "header"); //读取时舍去第一行
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(1240, 750);
	color93 = color(0, 78, 102);
	color98 = color(252, 190, 50);
	color03 = color(235, 100, 5);
	color08 = color(111, 33, 8);
	RegionHighlight = color(143, 188, 148);
	RegionNoun = color(197, 233, 155);
	colorU = RegionNoun;
	colorR = RegionNoun;
	colorT = RegionHighlight;
	
	textFont(f);

	rowCount = table.getRowCount();
	for (var row = 0; row < rowCount; row++) {
		time[row] = table.get(row, 0);
		morbidity[row] = table.get(row, 3);
		region[row] = table.get(row, 1);
		sort[row] = table.get(row, 2);
	}
	radius = 12;
}

function draw() {

	background(255);

	smooth();
	stroke(200, 200, 200);
	strokeWeight(1);
	line(150, 100, 150, 630);
	line(1150, 130, 50, 130);
	line(1150, 100 + 5 * 24, 50, 100 + 5 * 24);
	line(1150, 100 + 10 * 24, 50, 100 + 10 * 24);
	line(1150, 100 + 15 * 24, 50, 100 + 15 * 24);
	line(1150, 100 + 20 * 24, 50, 100 + 20 * 24);

	
	noStroke();
	drawLegend();
	drawChart();
		fill(51, 51, 51);
	textSize(18);
	text("*鼠标悬浮不同疾病类别方块和右上角绿色圆形地域区块，查看更多", 640,685);
	text("悬浮左边年份条查看每个年份疾病患病率具体数值", 750,715);
	textSize(19);
	text("（单位：‰）", 700, 100);
	
	if (mouseX > 30 && mouseX < 110) {
		if (mouseY > (10*24-20)*0.8 && mouseY < (10*24+10)*0.8)
			flagTime = 1993;
		if (mouseY > (15*24-20)*0.8 && mouseY < (15*24+10)*0.8)
			flagTime = 1998;
		if (mouseY > (20*24-20)*0.8 && mouseY < (20*24+10)*0.8)
			flagTime = 2003;
		if (mouseY > (25*24-20)*0.8 && mouseY < (25*24+!0)*0.8)
			flagTime = 2008;
		
	}
	if (mouseY > 100 && mouseY < 140) {
		if (mouseX > 190*0.8 && mouseX < 220*0.8)
			text("传染病", 190, 170);
		if (mouseX > 240*0.8 && mouseX < 270*0.8)
			text("寄生虫病", 240, 170);
		if (mouseX > 290*0.8 && mouseX < 320*0.8)
			text("肿瘤", 290, 170);
		if (mouseX > 340*0.8 && mouseX < 370*0.8)
			text("糖尿病", 340, 170);
		if (mouseX > 390*0.8 && mouseX < 420*0.8)
			text("血液疾病", 390, 170);
		if (mouseX > 440*0.8 && mouseX < 470*0.8)
			text("精神病", 440, 170);
		if (mouseX > 490*0.8 && mouseX < 520*0.8)
			text("神经病", 490, 170);
		if (mouseX > 540*0.8 && mouseX < 570*0.8)
			text("眼及附器疾病", 540, 170);
		if (mouseX > 590*0.8 && mouseX < 620*0.8)
			text("心脏病", 590, 170);
		fill(157, 10, 10);
		if (mouseX > 640*0.8 && mouseX < 670*0.8)
			text("高血压", 640, 170);
		fill(51, 51, 51);
		if (mouseX > 690*0.8 && mouseX < 720*0.8)
			text("脑血管病", 690, 170);
		if (mouseX > 740*0.8 && mouseX < 770*0.8)
			text("老年慢性支气管炎", 740, 170);
		if (mouseX > 790*0.8 && mouseX < 820*0.8)
			text("急性胃炎", 790, 170);
		if (mouseX > 840*0.8 && mouseX < 870*0.8)
			text("肝硬化", 840, 170);
		if (mouseX > 890*0.8 && mouseX < 920*0.8)
			text("胆囊疾病", 890, 170);
		if (mouseX > 940*0.8 && mouseX < 970*0.8)
			text("损伤和中毒", 940, 170);
		if (mouseX > 990*0.8 && mouseX < 1020*0.8)
			text("类关节炎", 990, 170);
		if (mouseX > 1040*0.8 && mouseX < 1070*0.8)
			text("先天异常", 1040, 170);
		if (mouseX > 1090*0.8 && mouseX < 1120*0.8)
			text("皮肤皮下组织", 1090, 170);
		if (mouseX > 1140*0.8 && mouseX < 1170*0.8)
			text("其他", 1140, 170);
	}
}

function drawChart() {
	for (var row = 0; row < rowCount; row++) {
		if (region[row] == curRegion) {
		if (sort[row] == "infection")
			x = 200;
		else if (sort[row] == "parasitosis")
			x = 250;
		else if (sort[row] == "tumour")
			x = 300;
		else if (sort[row] == "diabetes")
			x = 350;
		else if (sort[row] == "blood")
			x = 400;
		else if (sort[row] == "psychosis")
			x = 450;
		else if (sort[row] == "neuropathy")
			x = 500;
		else if (sort[row] == "eye")
			x = 550;
		else if (sort[row] == "cardiopathy")
			x = 600;
		else if (sort[row] == "hypertension")
			x = 650;
		else if (sort[row] == "cerebrovascular_diseases")
			x = 700;
		else if (sort[row] == "enile_chronic_bronchitis")
			x = 750;
		else if (sort[row] == "acute_gastritis")
			x = 800;
		else if (sort[row] == "cirrhosis")
			x = 850;
		else if (sort[row] == "gallbladder")
			x = 900;
		else if (sort[row] == "injury_and_poisoning")
			x = 950;
		else if (sort[row] == "rheumatoid_arthritis")
			x = 1000;
		else if (sort[row] == "congenital_anomalies")
			x = 1050;
		else if (sort[row] == "skin")
			x = 1100;
		else if (sort[row] == "others")
			x = 1150;
		else if (sort[row] == "total")
			x = 80;

		if (time[row] == 1993)
			fill(color93);
		else if (time[row] == 1998)
			fill(color98);
		else if (time[row] == 2003)
			fill(color03);
		else if (time[row] == 2008)
			fill(color08);
		else
			fill(255, 0, 0);
		textSize(16);
		if (sort[row] == "total"){
			drawWEllipse(x, 100 + (time[row] - 1990 + 2) * 24, radius, morbidity[row] * totalAdd);
			text(morbidity[row],x-20, 150 + (time[row] - 1990 + 2) * 24);
		}
		else{
			drawHEllipse(x, 100 + (time[row] - 1990 + 2) * 24, radius, morbidity[row]);
			if(sort[row] == "hypertension"&&time[row]==2008&&flagTime==2008)
			text(morbidity[row],x-10, 180 + (time[row] - 1990 + 2) * 24);
			else{
				if(time[row]==flagTime)
				text(morbidity[row],x-10, 155 + (time[row] - 1990 + 2) * 24);
			}
//				text(morbidity[row],x-10, 155 + (time[row] - 1990 + 2) * 24);
		}
	}
}
}

function drawHEllipse(x, y, radius, h) {
	ellipse(x, y - h / 2, 2 * radius, 2 * radius);
	ellipse(x, y + h / 2, 2 * radius, 2 * radius);
	rect(x - radius, y - h / 2, 2 * radius, h);

}

function drawWEllipse(x, y, radius, w) {
	ellipse(x - w / 2, y, 2 * radius, 2 * radius);
	ellipse(x + w / 2, y, 2 * radius, 2 * radius);
	rect(x - w / 2, y - radius, w, 2 * radius);

}

function drawLegend() {

	textSize(19);
	fill(168, 168, 168);
	rect(70, 120, 30, 20);
	for (var x0 = 200; x0 <= 1150;) {
		rect(x0 - 10, 120, 30, 20);
		x0 = x0 + 50;
	}
	fill(157, 10, 10);
	rect(640, 120, 30, 20);
	fill(51, 51, 51);
	text("合计", 70, 100);
	text("1993年",10, 70 + 5* 24);
	text("1998年",10, 70 + 10* 24);
	text("2003年",10, 70 + 15* 24);
	text("2008年",10, 70 + 20* 24);
	text("疾病类别", 170, 100);
	fill(colorT);
	ellipse(860, 50, 40, 40);
	text("城乡合计", 830, 100);
	fill(colorU);
	ellipse(960, 50, 40, 40);
	text("城市合计", 930, 100);
	fill(colorR);
	ellipse(1060, 50, 40, 40);
	text("农村合计", 1030, 100);
}

function mouseMoved() {
	if (mouseY > 20 && mouseY < 90) {
		if (mouseX > 820*0.8 && mouseX < 900*0.8) {
			colorT = RegionHighlight;
			colorU = RegionNoun;
			colorR = RegionNoun;
			curRegion = "total_areas";
		}
		if (mouseX > 920*0.8 && mouseX < 1000*0.8) {
			colorT = RegionNoun;
			colorU = RegionHighlight;
			colorR = RegionNoun;
			curRegion = "urban_areas";
		}
		if (mouseX > 1020*0.8 && mouseX < 1100*0.8) {
			colorT = RegionNoun;
			colorU = RegionNoun;
			colorR = RegionHighlight;
			curRegion = "rural_areas";
		}
	}
}
