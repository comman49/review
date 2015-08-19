function init() {
	/*html의 버튼들과 자바스크립트 변수를 이어주는 역할*/
	var btnNewTab = document.getElementById("btn-new-tab");
	var btnNewWin = document.getElementById("btn-new-win");
	var btnCloseWin = document.getElementById("btn-close-win");
	
	btnNewTab.onclick = btnNewTabClick;
	btnNewWin.onclick = btnNewWinClick;
	btnCloseWin.onclick = btnCloseWinClick;
}

/*어떤 윈도우에 대한 포인터를 가리킨다*/
var win = null;


function btnNewTabClick() {
	/*새 탭으로 문자열 주소에 접속한다*/
	win = open("open2.html");
}
function btnNewWinClick() {
	win = open("open2.html", "_blank", "width = 400px, height = 500px");
}
function btnCloseWinClick() {
	/*win.close();*/
	
	/*현재 창을 닫는다*/
	close();
}

/*페이지가 모두 로딩 된 후 js를 실행하라는 문장*/
window.addEventListener("load", init);