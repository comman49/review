   function init(){
	   var btn1 = document.getElementById("a");
	   btn1.onclick = printResult;
   }
   
   function printResult(){
	var x = prompt("x 값", 0);
	var y = prompt("y 값", 0);
	
	alert(parseInt(x)+parseInt(y));
	}
   
   /*하나 초기화 할 경우 사용*/
   /*window.onload=init;*/
   
   /*초기화가 필요한 함수가 여러개일 경우 아래와 같이 사용한다.*/
   window.addEventListener("load", init);
   window.addEventListener("load", function() {
	alert("test1");
});
   window.addEventListener("load", function() {
	alert("test2");
});
   window.addEventListener("load", function() {
	alert("test3");
});
   
