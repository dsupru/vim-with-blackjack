var MODE_IN_INSERT = false;

document.addEventListener("keydown", (event) => {
	console.log(`Pressed ${event.key}`);
	if (MODE_IN_INSERT) {
		document.body.style.border = "5px solid red";
		if (event.key === "Escape") {
			MODE_IN_INSERT = false;
			document.body.style.border = "none";
		}
	} else {
		document.body.style.border = "none";
		if (event.key === "j") {
			moveWindowSmooth(event, 150, 0);
		} else if (event.key === "k") {
			moveWindowSmooth(event, -150, 0);
		} else if (event.key === "h") {
			moveWindowSmooth(event, 0, -150);
		} else if (event.key === "l") {
			moveWindowSmooth(event, 0, 150);
		} else if (event.key === "i") {
			MODE_IN_INSERT = true;
			document.body.style.border = "5px solid red";
			event.preventDefault();
		}
	}
});

function moveWindowSmooth(event, top, left) {
	event.preventDefault();
	window.scrollBy({
	  top: top,
	  left: left,
	  behavior: 'smooth'
	});
}
