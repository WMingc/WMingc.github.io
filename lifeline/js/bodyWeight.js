var table;
var countF = 0;
var countM = 0;
var rowCount;
var flagW4Weight = false;
var preunderCountM = 0,
	prenorCountM = 0,
	preoverCountM = 0,
	preobeCountM = 0;
var preunderCountF = 0,
	prenorCountF = 0,
	preoverCountF = 0,
	preobeCountF = 0;
var preunderCount = 0,
	prenorCount = 0,
	preoverCount = 0,
	preobeCount = 0;
var w4underCountM = 0,
	w4norCountM = 0,
	w4overCountM = 0,
	w4obeCountM = 0;
var w4underCountF = 0,
	w4norCountF = 0,
	w4overCountF = 0,
	w4obeCountF = 0;
var w4underCount = 0,
	w4norCount = 0,
	w4overCount = 0,
	w4obeCount = 0;
var ratepreunderF, rateprenorF, ratepreoverF, ratepreobeF, rateW4underF, rateW4norF, rateW4overF, rateW4obeF;
var ratepreunderM, rateprenorM, ratepreoverM, ratepreobeM, rateW4underM, rateW4norM, rateW4overM, rateW4obeM;
var prebmi = [4000],
	week4bmi = [4000];
var sex = [4000];

var radius;
var colorF;
var colorM;
var f;
var count = 0;

function preload() {
	table = loadTable("../sources/bodyData.csv", "header"); //读取时舍去第一行
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(780, 500);
	colorF = color(252, 82, 148);
	colorM = color(68, 34, 204);
	textFont(f);

	rowCount = table.getRowCount();
	for (var row = 0; row < rowCount; row++) {
		prebmi[row] = table.get(row, 2);
		week4bmi[row] = table.get(row, 18);
		sex[row] = table.get(row, 3);
	}
	radius = 5;
	for (var row = 0; row < rowCount; row++) {
		if (sex[row] == "F") {
			countF++;
			if (prebmi[row] < 18.5) {
				preunderCountF++;
			} else if (prebmi[row] < 24) {
				prenorCountF++;
			} else if (prebmi[row] < 28) {
				preoverCountF++;
			} else {
				preobeCountF++;
			}
			if (week4bmi[row] < 18.5) {
				w4underCountF++;
			} else if (week4bmi[row] < 24) {
				w4norCountF++;
			} else if (week4bmi[row] < 28) {
				w4overCountF++;
			} else {
				w4obeCountF++;
			}
		} else {
			countM++;
			if (prebmi[row] < 18.5) {

				preunderCountM++;
			} else if (prebmi[row] < 24) {

				prenorCountM++;
			} else if (prebmi[row] < 28) {
				preoverCountM++;
			} else {
				preobeCountM++;
			}
			if (week4bmi[row] < 18.5) {
				w4underCountM++;
			} else if (week4bmi[row] < 24) {
				w4norCountM++;
			} else if (week4bmi[row] < 28) {
				w4overCountM++;
			} else {
				w4obeCountM++;
			}
		}
	}
	preunderCount = preunderCountM + preunderCountF;
	prenorCount = prenorCountM + prenorCountF;
	preoverCount = preoverCountM + preoverCountF;
	preobeCount = preobeCountM + preobeCountF;

	w4underCount = w4underCountM + w4underCountF;
	w4norCount = w4norCountM + w4norCountF;
	w4overCount = w4overCountM + w4overCountF;
	w4obeCount = w4obeCountM + w4obeCountF;

	ratepreunderF = preunderCountF / (countF * 1.0) * 400;
	rateprenorF = prenorCountF / (countF * 1.0) * 400;
	ratepreoverF = preoverCountF / (countF * 1.0) * 400;
	ratepreobeF = preobeCountF / (countF * 1.0) * 400;
	rateW4underF = w4underCountF / (countF * 1.0) * 400;
	rateW4norF = w4norCountF / (countF * 1.0) * 400;
	rateW4overF = w4overCountF / (countF * 1.0) * 400;
	rateW4obeF = w4obeCountF / (countF * 1.0) * 400;

	ratepreunderM = preunderCountM / (countM * 1.0) * 400;
	rateprenorM = prenorCountM / (countM * 1.0) * 400;
	ratepreoverM = preoverCountM / (countM * 1.0) * 400;
	ratepreobeM = preobeCountM / (countM * 1.0) * 400;
	rateW4underM = w4underCountM / (countM * 1.0) * 400;
	rateW4norM = w4norCountM / (countM * 1.0) * 400;
	rateW4overM = w4overCountM / (countM * 1.0) * 400;
	rateW4obeM = w4obeCountM / (countM * 1.0) * 400;

}

function draw() {
	background(255);
	colorF = color(247, 112, 98);
	colorM = color(68, 129, 235);
	smooth();
	noStroke();

	if (!flagW4Weight) {
		fill(colorF);

		rect(400, 360, 35, -ratepreunderF);
		rect(460, 360, 35, -rateprenorF);
		rect(520, 360, 35, -ratepreoverF);
		rect(580, 360, 35, -ratepreobeF);
	}
	if (flagW4Weight) {
		fill(colorF);
		rect(400, 360, 35, -ratepreunderF);
		rect(460, 360, 35, -rateprenorF);
		rect(520, 360, 35, -rateW4overF);
		rect(580, 360, 35, -rateW4obeF);
		fill(255, 185, 165);
		rect(400, 360 - ratepreunderF, 35, -rateW4underF + ratepreunderF);
		rect(460, 360 - rateprenorF, 35, -rateW4norF + rateprenorF);
		rect(520, 360, 35, -rateW4overF + ratepreoverF);
		rect(580, 360, 35, -rateW4obeF + ratepreobeF);
	}

	if (!flagW4Weight) {
		fill(colorM);

		rect(320, 360, 35, -ratepreunderM);
		rect(260, 360, 35, -rateprenorM);
		rect(200, 360, 35, -ratepreoverM);
		rect(140, 360, 35, -ratepreobeM);
	}
	if (flagW4Weight) {

		fill(colorM);
		rect(320, 360, 35, -ratepreunderM);
		rect(260, 360, 35, -rateprenorM);
		rect(200, 360, 35, -ratepreoverM);
		rect(140, 360, 35, -rateW4obeM);
		fill(161, 196, 253);
		rect(320, 360 - ratepreunderM, 35, -rateW4underM + ratepreunderM);
		rect(260, 360 - rateprenorM, 35, -rateW4norM + rateprenorM);

		rect(200, 360 - ratepreoverM, 35, -rateW4overM + ratepreoverM);
		rect(140, 360, 35, -rateW4obeM + ratepreobeM);
	}

	stroke(170, 170, 170);
	strokeWeight(1);
	line(50, 360, 680, 360);

	line(367.5, 50, 367.5, 450);
	noStroke();
	if (flagW4Weight) {
		fill(255, 185, 165);
		rect(620, 75, 20, 20);
	}
	fill(colorF);
	rect(620, 50, 20, 20);

	if (flagW4Weight) {
		fill(161, 196, 253);
		rect(595, 75, 20, 20);
	}
	fill(colorM);

	rect(595, 50, 20, 20);
	fill(51, 51, 51);
	textSize(16);
	if (flagW4Weight)
		text("第4周", 650, 90);

	text("第0周", 650, 65);
	textSize(14);
	fill(100, 100, 100);
	text("*键盘按A或a查看4周后情况", 55, 45);

	text("按数字0返回初始情况", 60, 70);
	text("鼠标悬浮条形区域，查看更多", 60, 105);
	textSize(16);

	fill(0, 0, 0);
	text("BMI", 700, 340);
	if (!flagW4Weight) {
		if (mouseY > 330 && mouseY < 400 && mouseX > 400 && mouseX < 435)
			text("低体重", 390, 340 - ratepreunderF);
		if (mouseY > 0 && mouseY < 400 && mouseX > 460 && mouseX < 495)
			text("正常", 460, 340 - rateprenorF);
		if (mouseY > 14 && mouseY < 400 && mouseX > 520 && mouseX < 555)
			text("超重", 520, 340 - ratepreoverF);
		if (mouseY > 300 && mouseY < 400 && mouseX > 580 && mouseX < 615)
			text("肥胖", 580, 340 - ratepreobeF);

		if (mouseY > 310 && mouseY < 400 && mouseX > 320 && mouseX < 355)
			text("低体重", 310, 340 - ratepreunderM);
		if (mouseY > 0 && mouseY < 400 && mouseX > 260 && mouseX < 295)
			text("正常", 260, 340 - rateprenorM);
		if (mouseY > 14 && mouseY < 400 && mouseX > 200 && mouseX < 235)
			text("超重", 200, 340 - ratepreoverM);
		if (mouseY > 300 && mouseY < 400 && mouseX > 140 && mouseX < 175)
			text("肥胖", 140, 340 - ratepreobeM);
	}
	if (flagW4Weight) {
		if (mouseY > 330 && mouseY < 450 && mouseX > 400 && mouseX < 435)
			text("低体重", 390, 340 - rateW4underF);
		if (mouseY > 0 && mouseY < 450 && mouseX > 460 && mouseX < 495)
			text("正常", 460, 340 - rateW4norF);
		if (mouseY > 14 && mouseY < 450 && mouseX > 520 && mouseX < 555)
			text("超重", 520, 340 - rateW4overF);
		if (mouseY > 300 && mouseY < 450 && mouseX > 580 && mouseX < 615)
			text("肥胖", 580, 340 - rateW4obeF);

		if (mouseY > 310 && mouseY < 400 && mouseX > 320 && mouseX < 355)
			text("低体重", 310, 340 - rateW4underM);
		if (mouseY > 0 && mouseY < 400 && mouseX > 260 && mouseX < 295)
			text("正常", 260, 340 - rateW4norM);
		if (mouseY > 14 && mouseY < 400 && mouseX > 200 && mouseX < 235)
			text("超重", 200, 340 - rateW4overM);
		if (mouseY > 300 && mouseY < 400 && mouseX > 140 && mouseX < 175)
			text("肥胖", 140, 340 - rateW4obeM);
	}
	text("女性", 640, 390);
	text("男性", 50, 390);
	text("人数", 300, 75);
	text("人数", 300, 435);
	textSize(30);
	text("+", 340, 80);
	textSize(36);
	text("-", 340, 440);
	textSize(16);
}

function keyPressed() {
	if (key == '0') {

		flagW4Weight = false;
	}
	if (key == 'a' || key == 'A') {

		flagW4Weight = true;
	}
}
