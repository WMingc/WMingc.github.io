var table;
var rowCount;
var rate = [50];
var sort = [50],
	region = [50];
var x = 0;
var y = 0;
var radius;
var color6, color35, color12, color1, colornever;
var f;
var flagT = false;
var prex = 0;

function preload() {
	table = loadTable("../sources/sportsrate.csv", "header"); //读取时舍去第一行
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {

	createCanvas(1000, 600);
	color6 = color(97, 192, 191);
	color35 = color(163, 210, 144);
	color12 = color(255, 226, 148);
	color1 = color(255, 188, 102);
	colornever = color(255, 93, 93);
textFont(f);
	rowCount = table.getRowCount();

	for (var row = 0; row < rowCount; row++) {
		rate[row] = table.get(row, 2);
		region[row] = table.get(row, 1);
		sort[row] = table.get(row, 0);
	}
	radius = 11;
}

function draw() {

	background(255);
	smooth();
	stroke(220, 220, 220);
	strokeWeight(1);
//	textSize(16);

	line(20, 145, 980, 145);
	line(20, 345, 980, 345);
	noStroke();
	fill(51, 51, 51);
	drawLegend();
	for (var i = 0; i < 9; i++) {
		fill(color6);
		if (mouseY > (120 + i * 50 - radius) && mouseY < (120 + i * 50 + radius) && mouseX > (x + 150) && mouseX < (x + 150 + 8 * rate[i]))
			text(rate[i] + "%", mouseX + 20, mouseY - 20);
		prex = drawWLEllipse((x + 150), (120 + i * 50), radius, (8 * rate[i]), color6);
		fill(color35);
		if (mouseY > (120 + i * 50 - radius) && mouseY < (120 + i * 50 + radius) && mouseX > prex && mouseX < (prex + 8 * rate[i + 9]))
			text(rate[i + 9] + "%", mouseX + 20, mouseY - 20);
		prex = rectR(prex, 120 + i * 50 - radius, 8 * rate[i + 9], 2 * radius, prex);
		fill(color12);
		if (mouseY > (120 + i * 50 - radius) && mouseY < (120 + i * 50 + radius) && mouseX > prex && mouseX < (prex + 8 * rate[i + 18]))
			text(rate[i + 18] + "%", mouseX + 20, mouseY - 20);
		prex = rectR(prex, 120 + i * 50 - radius, 8 * rate[i + 18], 2 * radius, prex);
		fill(color1);
		if (mouseY > (120 + i * 50 - radius) && mouseY < (120 + i * 50 + radius) && mouseX > prex && mouseX < (prex + 8 * rate[i + 27]))
			text(rate[i + 27] + "%", mouseX + 20, mouseY - 20);
		prex = rectR(prex, 120 + i * 50 - radius, 8 * rate[i + 27], 2 * radius, prex);
		fill(colornever);
		if (mouseY > (120 + i * 50 - radius) && mouseY < (120 + i * 50 + radius) && mouseX > prex && mouseX < (prex + 8 * rate[i + 36]))
			text(rate[i + 36] + "%", mouseX + 20, mouseY - 20);
		prex = drawWREllipse(prex, 120 + i * 50, radius, 8 * rate[i + 36], colornever);
	}

}


function rectR(x, y, w, h, prex) {
	rect(x, y, w, h);
	return (w + prex);
}

function drawWLEllipse(x, y, radius, w, c) {
	ellipse(x, y, 2 * radius, 2 * radius);
	fill(255, 255, 255);
	rect(x, y - radius, radius - 0.25, 2 * radius);
	fill(c);
	rect(x, y - radius, w, 2 * radius);
	return (w + x);
}

function drawWREllipse(x, y, radius, w, c) {
	ellipse(x + w, y, 2 * radius, 2 * radius);
	fill(255, 255, 255);
	rect(x + w - radius, y - radius, radius - 0.25, 2 * radius);
	fill(c);
	rect(x, y - radius, w, 2 * radius);
	return (x + w);
}

function drawLegend() {
textSize(16);
	text("地区", 30, 75);
	text("城乡合计", 30, 125);
	text("城市合计", 30, 175);
	text("城市东部", 30, 225);
	text("城市中部", 30, 275);
	text("城市西部", 30, 325);
	text("农村合计", 30, 375);
	text("农村东部", 30, 425);
	text("农村中部", 30, 475);
	text("农村西部", 30, 525);

	fill(color6);
	rect(150, 60, 20, 20);
	text(">6次/周", 180, 75);
	fill(color35);
	rect(310, 60, 20, 20);
	text("3-5次/周", 340, 75);
	fill(color12);
	rect(470, 60, 20, 20);
	text("1-2次/周", 500, 75);
	fill(color1);
	rect(630, 60, 20, 20);
	text("<1次/周", 660, 75);
	fill(colornever);
	rect(790, 60, 20, 20);
	text("从不锻炼", 820, 75);
	fill(100, 100, 100);
	textSize(15);
	text("*鼠标点击注释方块，高亮该区域，悬浮条形区域，查看具体比例数值", 465, 570);
}

function mouseClicked() {
	color6 = color(97, 192, 191);
	color35 = color(163, 210, 144);
	color12 = color(255, 226, 148);
	color1 = color(255, 188, 102);
	colornever = color(255, 93, 93);
	if (mouseY > 50 && mouseY < 90) {
		if (mouseX > 150 && mouseX < 300) {
			color6 = color(97, 192, 191);
			color35 = color(163, 210, 144, 50);
			color12 = color(255, 226, 148, 50);
			color1 = color(255, 188, 102, 50);
			colornever = color(255, 93, 93, 50);

		}
		if (mouseX > 310 && mouseX < 460) {
			color6 = color(97, 192, 191, 50);
			color35 = color(163, 210, 144);
			color12 = color(255, 226, 148, 50);
			color1 = color(255, 188, 102, 50);
			colornever = color(255, 93, 93, 50);

		}
		if (mouseX > 470 && mouseX < 620) {
			color6 = color(97, 192, 191, 50);
			color35 = color(163, 210, 144, 50);
			color12 = color(255, 226, 148);
			color1 = color(255, 188, 102, 50);
			colornever = color(255, 93, 93, 50);

		}
		if (mouseX > 630 && mouseX < 780) {
			rect(20, 10, 20, 10);
			color6 = color(97, 192, 191, 50);
			color35 = color(163, 210, 144, 50);
			color12 = color(255, 226, 148, 50);
			color1 = color(255, 188, 102);
			colornever = color(255, 93, 93, 50);

		}
		if (mouseX > 790 && mouseX < 940) {
			color6 = color(97, 192, 191, 50);
			color35 = color(163, 210, 144, 50);
			color12 = color(255, 226, 148, 50);
			color1 = color(255, 188, 102, 50);
			colornever = color(255, 93, 93);
		}
	}
}
