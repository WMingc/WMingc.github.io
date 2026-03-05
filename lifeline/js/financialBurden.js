var f;
var hyperD, hyperT, chronic, all, gdp93, gdp03, chr93, chr03;

function preload() {
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(800, 620);
	textFont(f);
}

function draw() {
	all = color(255, 243, 80);
	chronic = color(254, 209, 53);
	hyperT = color(255, 168, 66);
	hyperD = color(255, 99, 78);
	gdp93 = color(2, 120, 174);
	gdp03 = color(81, 173, 207);
	chr93 = color(136, 223, 220);
	chr03 = color(196, 250, 234);
	textSize(16);
	background(255);

	noStroke();
	fill(all);
	rect(301, 300, -2 * Math.sqrt(8580.54 / 0.7145), 2 * Math.sqrt(8580.54 / 0.7145));

	fill(chronic);
	rect(301, 300, -2 * Math.sqrt(8580.54), 2 * Math.sqrt(8580.54));
	fill(hyperT);
	rect(301, 300, -2 * Math.sqrt(622.51), 2 * Math.sqrt(622.51));
	fill(hyperD);
	rect(301, 300, -2 * Math.sqrt(383.85), 2 * Math.sqrt(383.85));


	fill(all);
	rect(300, 300, -2 * Math.sqrt(1963.44 / 0.7145), -2 * Math.sqrt(1963.44 / 0.7145));
	fill(chronic);
	rect(300, 300, -2 * Math.sqrt(1963.44), -2 * Math.sqrt(1963.44));

	fill(hyperT);
	rect(301, 300, 2 * Math.sqrt(6609), 2 * Math.sqrt(6609));
	fill(hyperD);
	rect(301, 300, 2 * Math.sqrt(2104), 2 * Math.sqrt(2104));
	if (mouseY < 301 + 2 * Math.sqrt(8580.54 / 0.7145) && mouseY > 301 && mouseX < 300 && mouseX > 300 - 2 * Math.sqrt(8580.54 / 0.7145)) {
		if (mouseY < 301 + 2 * Math.sqrt(8580.54) && mouseY > 301 && mouseX < 300 && mouseX > 300 - 2 * Math.sqrt(8580.54)) {
			if (mouseY < 301 + 2 * Math.sqrt(622.51) && mouseY > 301 && mouseX < 300 && mouseX > 300 - 2 * Math.sqrt(622.51)) {
				if (mouseY < 301 + 2 * Math.sqrt(383.85) && mouseY > 301 && mouseX < 300 && mouseX > 300 - 2 * Math.sqrt(383.85)) {
					fill(hyperD);
					rect(301, 300, -2 * Math.sqrt(383.85), 2 * Math.sqrt(383.85));
					fill(255);
					text("383.85", 250 - Math.sqrt(383.85), 300 + Math.sqrt(383.85));
				} else {
					fill(hyperT);
					rect(301, 300, -2 * Math.sqrt(622.51), 2 * Math.sqrt(622.51));
					fill(255);
					text("622.51", 250 - Math.sqrt(622.51), 300 + Math.sqrt(622.51));
				}
			} else {
				fill(chronic);
				rect(301, 300, -2 * Math.sqrt(8580.54), 2 * Math.sqrt(8580.54));
				fill(255);
				text("8580.54", 250 - Math.sqrt(8580.54), 300 + Math.sqrt(8580.54));
			}
		} else {
			fill(all);
			rect(301, 300, -2 * Math.sqrt(8580.54 / 0.7145), 2 * Math.sqrt(8580.54 / 0.7145));
			fill(255);
			text(Math.round(8580.5 / 0.7145), 250 - Math.sqrt(8580.54 / 0.7145), 300 + Math.sqrt(8580.54 / 0.7145));
		}
	}

	if (mouseY > 300 - 2 * Math.sqrt(1963.44 / 0.7145) && mouseY < 300 && mouseX > 300 - 2 * Math.sqrt(1963.44 / 0.7145) && mouseX < 300) {
		if (mouseY > 300 - 2 * Math.sqrt(1963.44) && mouseY < 300 && mouseX > 300 - 2 * Math.sqrt(1963.44) && mouseX < 300) {
			{
				fill(chronic);
				rect(300, 300, -2 * Math.sqrt(1963.44), -2 * Math.sqrt(1963.44));
				fill(255);
				text(1963.44, 280 - Math.sqrt(1963.44), 300 - Math.sqrt(1963.44));
			}
		} else {
			fill(all);
			rect(300, 300, -2 * Math.sqrt(1963.44 / 0.7145), -2 * Math.sqrt(1963.44 / 0.7145));
			fill(255);
			text(Math.round(1963.44 / 0.7145), 280 - Math.sqrt(1963.44 / 0.7145), 300 - Math.sqrt(1963.44 / 0.7145));
		}
	}

	if (mouseY > 300 && mouseY < 300 + 2 * Math.sqrt(6609) && mouseX > 300 && mouseX < 300 + 2 * Math.sqrt(6609)) {
		if (mouseY > 300 && mouseY < 300 + 2 * Math.sqrt(2104) && mouseX > 300 && mouseX < 300 + 2 * Math.sqrt(2140)) {
			{
				fill(hyperD);
				rect(300, 300, 2 * Math.sqrt(2104), 2 * Math.sqrt(2104));
				fill(255);
				text(2104, 280 + Math.sqrt(2104), 300 + Math.sqrt(2104));
			}
		} else {
			fill(hyperT);
			rect(300, 300, 2 * Math.sqrt(6609), 2 * Math.sqrt(6609));
			fill(255);
			text(6609, 280 + Math.sqrt(6609), 300 + Math.sqrt(6609));
		}
	}
	drawRate();
	fill(51, 51, 51);
	textSize(24);
	text("93年", 60, 250);
	text("03年", 60, 350);
	text("13年", 580, 350);
}
function drawRate() {
	fill(chr03);
	rect(320, 280, 40, -2 * 71.45);
	//text("71.45%",240, 350+2*71.45);
	fill(chr93);
	rect(360, 280, 40, -2 * 58.84);
	fill(85, 85, 85);
	text("71.45%", 320, 270 - 2 * 71.45);
	text("58.84%", 370, 270 - 2 * 58.84);

	fill(gdp03);
	rect(420, 280, 40, -3 * 7.31);
	//text("7.31%",130, 350+3*7.31);
	fill(gdp93);
	rect(460, 280, 40, -3 * 5.67);
	fill(85, 85, 85);
	text("7.31%", 420, 270 - 3 * 7.31);
	text("5.67%", 470, 270 - 3 * 5.67);

	fill(chr93);
	rect(520, 80, 30, 30);
	fill(chr03);
	rect(550, 80, 30, 30);
	fill(gdp93);
	rect(520, 110, 30, 30);
	fill(gdp03);
	rect(550, 110, 30, 30);
	fill(85, 85, 85);
	text("93年", 515, 65);
	text("03年", 555, 65);
	text("慢性病/GDP", 590, 100);
	text("慢性病/总医疗支出", 590, 130);

	fill(hyperD);
	rect(30, 50, 20, 20);
	//text("Hypertension(Direct) ",60,65);
	fill(hyperT);
	rect(30, 80, 20, 20);
	//text("Hypertension(Total) ",60,95);
	fill(chronic);
	rect(30, 110, 20, 20);
	//text("Chronic Diseases ",60,125);
	fill(all);
	rect(30, 140, 20, 20);
	fill(85, 85, 85);
	text("高血压直接经济负担", 60, 65);
	text("高血压总经济负担", 60, 95);
	text("慢性病经济负担", 60, 125);
	text("所有疾病经济负担", 60, 155);
	fill(100,100,100);
	textSize(15);
	text("*鼠标悬浮图中方块查看具体数额", 510, 535);
	textSize(16);
	text("（单位：亿元）", 560, 495);
	stroke(85, 85, 85);
	strokeWeight(1);
	line(50, 300, 560, 300);
	line(300, 50, 300, 560);
}
