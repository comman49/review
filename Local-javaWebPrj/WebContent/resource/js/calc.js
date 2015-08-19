function init() {
	var btnSum = document.getElementById("btn-sum");
	btnSum.onclick = btnSumClick;
}

function btnSumClick() {
	var x = document.getElementById("txt-x");
	var y = document.getElementById("txt-y");
	var txtSum = document.getElementById("txt-sum");
	var sum = parseInt(x.value) + parseInt(y.value);
	
	txtSum.value = sum;
}

window.onload = init;