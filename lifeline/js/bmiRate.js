var table, table_city;
var countUnder = 0;
var countNor = 0;
var countOver = 0;
var countObe = 0;
var rowCount, rowCount_city;
var x = 150;
var y = 50;
var x0 = 350;
var count = [4];
var rate = [50];
var age = [50],
	sort = [50],
	sex = [50];
var count_city = [4];
var rate_city = [50];
var region = [50],
	sort_city = [50],
	area = [50];
var radius;
var colorunder, colornor, colorover, colorobe;
var f;
var side = 5;

var prex = 0;
var gap = (side + 1) * 18;
var dx = 0,
	dy = 0;

// 函数setup() 用于初始化，比如创建画布

function preload() {
	table = loadTable("../sources/bmirate.csv", "header"); //读取时舍去第一行
	table_city = loadTable("../sources/bmirate_city.csv", "header");
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {

	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角（0，0），x方向水平向右，y方向垂直向下，单位像素
	createCanvas(1000, 660);
	colorunder = color(237, 229, 116); //黄 从浅到深
	colornor = color(249, 212, 35);
	colorover = color(252, 145, 58);
	colorobe = color(255, 78, 80);

	textFont(f);

	rowCount = table.getRowCount();
	for (var row = 0; row < rowCount; row++) {
		age[row] = table.get(row, 0);
		sex[row] = table.get(row, 1);
		sort[row] = table.get(row, 2);
		rate[row] = table.get(row, 3);
	}
	rowCount_city = table_city.getRowCount();
	for (row = 0; row < rowCount_city; row++) {
		region[row] = table_city.get(row, 0);
		area[row] = table_city.get(row, 1);
		sort_city[row] = table_city.get(row, 2);
		rate_city[row] = table_city.get(row, 3);
	}
	radius = 11;
}

// draw()函数用户绘制
function draw() {

	textSize(16);
	background(255);
	smooth();
	noStroke();
	drawLegend();

	for (var i = 8; i < 48;) {
		if (sex[i] == "f") {
			dx = gap;
		} else {
			dx = 0;
		}

		count[0] = Math.round(rate[i] * side * side / 100);
		count[1] = Math.round(rate[i + 1] * side * side / 100);
		count[2] = Math.round(rate[i + 2] * side * side / 100);
		count[3] = Math.round(rate[i + 3] * side * side / 100);
		if (sex[i] == "f")
			sortRect(x + dx, y + ((i - 12) / 4) / 2 * gap, side, count);
		else
			sortRect(x + dx, y + ((i - 8) / 4) / 2 * gap, side, count);
		fill(0, 73, 134); //深蓝
		for (var j = 0; j < 5; j++)
			rect(100, y + gap * j, 15, 98);
		i = i + 4;
	}

	for (i = 0; i < 32;) {
		if (area[i] == "countryside") {
			dx = gap;
		} else {
			dx = 0;
		}
		count[0] = Math.round(rate_city[i] * side * side / 100);
		count[1] = Math.round(rate_city[i + 1] * side * side / 100);
		count[2] = Math.round(rate_city[i + 2] * side * side / 100);
		count[3] = Math.round(rate_city[i + 3] * side * side / 100);
		fill(0, 73, 134); //深蓝

		for (j = 0; j < 4; j++)
			rect(500, y + gap * j, 15, 98);
		if (area[i] == "countryside")
			sortRect(400 + x + dx, y + ((i - 4) / 4) / 2 * gap, side, count);
		else
			sortRect(400 + x + dx, y + (i / 4) / 2 * gap, side, count);

		i = i + 4;
	}
}

function mousePressed() {
	if (mouseX > 850 && mouseY < 950) {
		if (mouseY > 50 && mouseY < 75) {
			colornor = color(249, 212, 35, 50);
			colorover = color(252, 145, 58, 50);
			colorobe = color(255, 78, 80, 50);
			colorunder = color(237, 229, 116); //黄 从浅到深
		}
		if (mouseY > 90 && mouseY < 115) {
			colorunder = color(237, 229, 116, 50); //黄 从浅到深
			colornor = color(249, 212, 35);
			colorover = color(252, 145, 58, 50);
			colorobe = color(255, 78, 80, 50);
		}
		if (mouseY > 130 && mouseY < 155) {
			colorunder = color(237, 229, 116, 50); //黄 从浅到深
			colornor = color(249, 212, 35, 50);
			colorover = color(252, 145, 58);
			colorobe = color(255, 78, 80, 50);
		}
		if (mouseY > 170 && mouseY < 195) {
			colorunder = color(237, 229, 116, 50); //黄 从浅到深
			colornor = color(249, 212, 35, 50);
			colorover = color(252, 145, 58, 50);
			colorobe = color(255, 78, 80);
		}
	} else {
		colorunder = color(237, 229, 116); //黄 从浅到深
		colornor = color(249, 212, 35);
		colorover = color(252, 145, 58);
		colorobe = color(255, 78, 80);
	}
}

function sortRect(x, y, side, count) {
	var i, j, k, countR = 0;
	for (k = 0; k < side; k++) {
		for (j = k, i = side - 1; j >= 0 && i >= 0; j--, i--) {
			fill(colorunder);
			if (countR >= count[0])
				fill(colornor);
			if (countR >= (count[0] + count[1]))
				fill(colorover);
			if (countR >= (count[0] + count[1] + count[2]))
				fill(colorobe);
			rect(x + 20 * 8 - (i + side - 1) * 20, y + (-j + side - 1) * 20, 18, 18);
			countR++;
		}
	}
	countR = 0;
	for (k = 0; k < side - 1; k++) {
		for (j = k, i = side - 1; j >= 0 && i >= 0; j--, i--) {
			fill(colorobe);
			if (countR >= count[3])
				fill(colorover);
			if (countR >= (count[3] + count[2]))
				fill(colornor);
			if (countR >= (count[3] + count[1] + count[2]))
				fill(colorunder);
			rect(x + i * 20, y + j * 20, 18, 18);
			countR++;
		}
	}
}

function drawLegend() {
	fill(0, 0, 0);

	text("年龄", 90, y - 20);
	text("男性", 75 + gap, y - 20);
	text("女性", 75 + 2 * gap, y - 20);
	text("18-34岁", 30, y + 50);
	text("35-44岁", 30, y + gap + 50);
	text("45-54岁", 30, y + gap * 2 + 50);
	text("55-64岁", 30, y + gap * 3 + 50);
	text("65岁以上", 30, y + gap * 4 + 50);
	text("地区", 490, y - 20);
	text("城市", 475 + gap, y - 20);
	text("农村", 475 + 2 * gap, y - 20);
	text("合计", 450, y + 50);
	text("东部", 450, y + gap + 50);
	text("中部", 450, y + gap * 2 + 50);
	text("西部", 450, y + gap * 3 + 50);

	fill(colorunder);
	rect(850, 50, 30, 25);
	text("低体重", 890, 65);
	fill(colornor);
	rect(850, 90, 30, 25);
	text("正常", 890, 105);
	fill(colorover);
	rect(850, 130, 30, 25);
	text("超重", 890, 145);
	fill(colorobe);
	rect(850, 170, 30, 25);
	text("肥胖", 890, 185);
	textSize(14);
	fill(80, 80, 80); 
	text("*鼠标点击注释方块", 835, 260);
	text("高亮该类型区域", 840, 290);
	text("点击其他位置解除高亮", 840, 320);
	
	textSize(16);
//	fill(0, 0, 0);
//	text("2013年调查", 560, 520);
//	text("18岁及以上人群BMI指数构成", 560, 560);
}
