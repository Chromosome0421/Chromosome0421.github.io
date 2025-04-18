// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = canvas.height,dx = 5,dy = 5,r = 30,color = "red";
let x2 = canvas.width,y2 = canvas.height,dx2 = 5,dy2 = 5,r2 = 30,color2 = "black";
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

	//for(let i = 0; i<3; ++i)
    x = x + dx;
    y = y + dy;
	
	x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
	//for(let i = 0; i< 3; ++i)
	if(x < 0 ||x >  canvas.width) 
	{
		dx = -dx;
	}
	if(y < 0 || y >  canvas.height) 
	{
		dy=-dy;
	}
	
	if(x2 < 0 || x2 >  canvas.width) 
	{
		dx2=-dx2;
	}
	
	if(y2 < 0 || y2 >  canvas.height)
	{		
		dy2=-dy2;
	}
	
	if((x-x2)*(x-x2) + (y-y2)*(y-y2) < (r+r2)*(r+r2))
	{
		[dx, dx2] = [dx2, dx];
		[dy, dy2] = [dy2, dy];
	}
	
    // ...

    drawBall(x, y, r, color);
	drawBall(x2, y2, r2, color2);
    requestAnimationFrame(draw);
	
}

draw();