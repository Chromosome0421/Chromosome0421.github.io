let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 10, dy = 10, r = 30, color = "#0095DD", canMove = 0;

// 畫圓形
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 按下按鍵時觸發
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) {
	if (e.key == "ArrowRight") x += dx;
	else if (e.key == "ArrowLeft") x -= dx;
	else if (e.key == "ArrowUp") y -= dy;
	else if (e.key == "ArrowDown") y += dy;

	drawBall(); // 也補上畫圖
}

// 滑鼠移動時觸發
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(e) {
	if (canMove) {
		x = e.clientX - canvas.offsetLeft;
		y = e.clientY - canvas.offsetTop;
		drawBall(); // 在每次移動時畫圖
	}
}

// 滑鼠按下 -> 可以畫圖 + 改變顏色
document.addEventListener("mousedown", downHandler);
function downHandler(e) {
	canMove = 1;
	color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// 滑鼠放開 -> 停止畫圖
document.addEventListener("mouseup", upHandler);
function upHandler(e) {
	canMove = 0;
}
