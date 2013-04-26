var img = document.getElementById('cat');

difference = 984  //, 1280-296

var speed = 1;
var timer;

// img.style.left = '550px';
img.style.left = "0px"

function move(){
    console.log(img.style.left);
	if (parseInt(img.style.left, 10) > difference ) {
		// speed = speed * 1.2;
		speed = speed * -1
		console.log('Bonk!');
	}
	if (parseInt(img.style.left, 10) < 0 ) {
		// speed = speed * 1.2;
		speed = speed * -1
		console.log('Bonk!');
	}

	var left = parseInt(img.style.left, 10);
	left = left + speed;
	img.style.left = String(left) + "px";
}

// window.setInterval(move, 200);

// var time = setInterval(move, 200);

var start = document.getElementsByClassName('start')[0];
var faster = document.getElementsByClassName('faster')[0];
var slower = document.getElementsByClassName('slower')[0];
var stop = document.getElementsByClassName('stop')[0];

// faster.onclick = function() { timer = setInterval(function() {move()}, 200)); }
// slower.onclick = function() { timer = setInterval(function() {move()}, 200)); }

faster.onclick = function() { speed = speed + 1; }
slower.onclick = function() { speed = speed - 1; }

start.onclick = function() { timer = setInterval(move, 20); }
stop.onclick = function() {  clearInterval(timer); }



