var f;
var alpha;
var gen3, gap, times;
var flag = false;
var weightM, weightF, waistlineM, waistlineF, w_heightM, w_heightF, colorHex;

function preload() {
	f = loadFont("../sources/STXIHEI.TTF");
}

function setup() {
	createCanvas(600, 500);
	alpha = 255;
	gen3 = 1.73;
	gap = 0.0;
	textFont(f);
}

function draw() {
	textSize(15);
	weightM = color(170, 207, 208);
	waistlineM = color(121, 168, 169);
	w_heightM = color(84, 134, 135);
	weightF = color(252, 191, 176);
	waistlineF = color(241, 152, 136);
	w_heightF = color(222, 126, 115);
	colorHex = color(255, 233231);
	background(255);
	smooth();

	drawtriangle(370, 230, 60, 100, -PI / 3, weightM, gap);
	drawtriangle(370, 230, 60, 100, 0, waistlineM, gap);
	drawtriangle(370, 230, 60, 100, PI / 3, w_heightM, gap);
	drawtriangle(370, 230, 60, 100, -2 * PI / 3, weightF, gap);
	drawtriangle(370, 230, 60, 100, -PI, waistlineF, gap);
	drawtriangle(370, 230, 60, 100, 2 * PI / 3, w_heightF, gap);

	fill(100, 100, 100);
	text("*鼠标悬浮注释圆圈，查看更多", 40, 420);
	textSize(16);
	fill(weightM);
	ellipse(50, 100, 26, 26);
	text("体重指数-z", 80, 105);
	fill(waistlineM);
	ellipse(50, 140, 26, 26);
	text("腰围-z", 80, 145);
	fill(w_heightM);
	text("男性", 80, 65);
	ellipse(50, 180, 26, 26);
	text("腰围/身高-z", 80, 185);
	fill(weightF);
	ellipse(50, 280, 26, 26);
	text("体重指数-z", 80, 285);
	fill(waistlineF);
	ellipse(50, 320, 26, 26);
	text("腰围-z", 80, 325);
	fill(w_heightF);
	text("女性", 80, 245);
	ellipse(50, 360, 26, 26);
	text("腰围/身高-z", 80, 365);
	if (mouseX > 35 && mouseX < 65) {
		if (mouseY > 87 && mouseY < 113) {
			drawtriangle(370, 230, 120, 1.72 * 100, -PI / 3, weightM, gap);
			times = 1.72;
			flag = true;
		} else if (mouseY > 127 && mouseY < 153) {
			drawtriangle(370, 230, 120, 1.64 * 100, 0, waistlineM, gap);
			times = 1.64;
			flag = true;
		} else if (mouseY > 167 && mouseY < 193) {
			drawtriangle(370, 230, 120, 1.70 * 100, PI / 3, w_heightM, gap);
			times = 1.70;
			flag = true;
		} else if (mouseY > 267 && mouseY < 293) {
			drawtriangle(370, 230, 120, 1.66 * 100, -2 * PI / 3, weightF, gap);
			times = 1.66;
			flag = true;
		} else if (mouseY > 307 && mouseY < 333) {
			drawtriangle(370, 230, 120, 1.61 * 100, -PI, waistlineF, gap);
			times = 1.61;
			flag = true;
		} else if (mouseY > 347 && mouseY < 373) {
			drawtriangle(370, 230, 120, 1.64 * 100, 2 * PI / 3, w_heightF, gap);
			times = 1.64;
			flag = true;
		} else
			flag = false;

	}
	if (flag) {
		fill(51, 51, 51);
		text("z值每上升1个单位", 300, 420);
		text("高血压患病风险上升" + times + "倍", 300, 450);
	}

}

function drawtriangle(vertexX, vertexY, bottom, h, angle, c, gap) {
	noStroke();
	fill(c);
	translate(vertexX, vertexY);
	rotate(angle);
	translate(0, -gap);
	triangle(0, 0, -bottom / 2, -h, bottom / 2, -h);

	translate(0, gap); //将画布转回来
	rotate(-angle);
	translate(-vertexX, -vertexY);
}
