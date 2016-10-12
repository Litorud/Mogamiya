addEventListener("load", function(){
	var srcs = [
		"店舗写真.jpg",
		"サーロイン皿盛.png"
	];
	var img = document.getElementById("cover");
	var index = 0;
	setInterval(function(){
		index = (index+1) % srcs.length;
		img.src = srcs[index];
	}, 5000);
}, false);
