function init() {
	var btnCountDown = document.getElementById("btn-countdown");
	btnCountDown.onclick = btnCountDownClick;
}

var timerID = null;

function count() {
	var lblCount = document.getElementById("lbl-count");
	var count = parseInt(lblCount.innerText);

	if(count > 0)
		lblCount.innetText = --count;
	else {
		//취소
		clearInterval(timerID);
		timerID = null;
	}
}

function btnCountDownClick() {
	if(timerID == null)
		timerID = setInterval(count, 1000);
	
}

window.onload = init;