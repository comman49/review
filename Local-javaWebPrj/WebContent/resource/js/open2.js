function init() {
	/*html의 버튼들과 자바스크립트 변수를 이어주는 역할*/
	var btnResize = document.getElementById("btn-resize");
	var btnMove = document.getElementById("btn-move");
	var btnOpenerClose = document.getElementById("btn-opener-close");
	
	btnResize.onclick = btnResizeClick;
	btnMove.onclick = btnMoveClick;
	btnOpenerClose.onclick = btnOpenerCloseClick;
}

function btnResizeClick() {
	/*오프너는 창이 혼자 뜬게 아니라 open 함수를 통해서 떳을때 사용 가능*/
	/*opener.resizeTo(100, 100);*/
	
	/*resizeTo는 지정된 크기로 변경*/
	/*opener.resizeTo(500, 500);*/
	
	/*ersizeBy는 현재 크기에 지정된 크기만큼 더해짐*/
	/*클릭할 때마다 사이즈 증가*/
	opener.resizeBy(250, 250);
}
function btnMoveClick() {
	/*moveTo와 moveBy도 위와 같다*/
	/*opener.moveTo(250, 250);*/
	
	/*클릭할 때마다 사이즈 증가*/
	opener.moveBy(250, 250);
}
function btnOpenerCloseClick() {
	/*부모 윈도우를 닫는다*/
	opener.close();
}

/*페이지가 모두 로딩 된 후 js를 실행하라는 문장*/
window.addEventListener("load", init);

/*익명 함수를 통해 만들 수도 있다.*/
/*window.addEventListener("load", function() {
	var btnResize = document.getElementById("btn-resize");
	var btnMove = document.getElementById("btn-move");
	var btnOpenerClose = document.getElementById("btn-opener-close");
	
	btnResize.onclick = btnResizeClick;
	btnMove.onclick = btnMoveClick;
	btnOpenerClose.onclick = btnOpenerCloseClick;
})*/