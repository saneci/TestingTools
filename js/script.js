/*
* @author Aleksandr Gladskoy
*/
var serverAnswerBlock = document.getElementsByClassName("server_answer");
/*
* don't change any variables above this line!
*/


document.getElementById("input_clear").addEventListener("click", function() {
	var elemFildset = document.getElementsByTagName("fieldset");
	//var verify  = confirm("Все данные будут удалены. Продолжить?");
	
  	if(true) {
		for (var i = 0; i < elemFildset.length; i++) {
			elemFildset[i].getElementsByTagName("form")[0].reset();
		}
	}
});

function showServerAnswer() {
	var clickBtn = document.getElementsByTagName("form");
	
	for (var i = 0; i < clickBtn.length; i++) {
 	
		switch(clickBtn[i]) {
			case clickBtn[0]: clickBtn[i].addEventListener("submit", function() { serverAnswerBlock[0].style = "display: block"; });
			break;
			case clickBtn[1]: clickBtn[i].addEventListener("submit", function() { serverAnswerBlock[1].style = "display: block"; });
			break;
			case clickBtn[2]: clickBtn[i].addEventListener("submit", function() { serverAnswerBlock[2].style = "display: block"; });
			break;
			default: console.log("Unexpected transition in the 'case' expression. String 23.");
		}
	}
}

function hideServerAnswer() {
	var clickBtn = document.getElementsByClassName("close");

	for (var i = 0; i < clickBtn.length; i++) {
		switch(clickBtn[i]) {
			case clickBtn[0]: clickBtn[i].addEventListener("click", function() { serverAnswerBlock[0].style = "display: none"; });
			break;
			case clickBtn[1]: clickBtn[i].addEventListener("click", function() { serverAnswerBlock[1].style = "display: none"; });
			break;
			case clickBtn[2]: clickBtn[i].addEventListener("click", function() { serverAnswerBlock[2].style = "display: none"; });
			break;
			default: console.log("Unexpected transition in the 'case' expression. String 38.");
		}
	}
}


showServerAnswer();
hideServerAnswer();