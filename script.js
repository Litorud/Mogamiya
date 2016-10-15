addEventListener("load", function() {
	var srcs = [ "cover1.jpg", "cover2.jpg" ];
	var index = 0;
	var overCover = document.getElementById("overCover");
	var underCover = document.getElementById("underCover");
	var animater = $(overCover);
	setInterval(function() {
		underCover.src = overCover.src;
		overCover.style.opacity = 0;
		index = (index + 1) % srcs.length;
		overCover.src = srcs[index];
		animater.animate({
			opacity : 1.0
		}, 2000);
	}, 15000);
}, false);
