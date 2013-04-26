var img = document.getElementById('cat');

 difference = 984  //, 1280-296

// img.style.left = '550px';
img.style.left = "0px"

function move(){

	if(img.style.left != "984px"){
	var left = parseInt(img.style.left, 10);
	left += 2;

	img.style.left = String(left) + "px";
	};
};

// window.setInterval(move, 200);

setInterval(move, 200);