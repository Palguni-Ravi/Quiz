function check()
{
  var c = 0;
  var qs1 = document.quiz.q1.value;
  if(qs1 == 'C'){c++;}
  var qs2 = document.quiz.q2.value;
  if(qs2 == 'D'){c++;}
  var qs3 = document.quiz.q3.value;
  if(qs3 == 'D'){c++;}
  var qs4 = document.quiz.q4.value;
  if(qs4 == 'C'){c++;}
  var qs5 = document.quiz.q5.value;
  if(qs5 == 'C'){c++;}
  var qs6 = document.quiz.q6.value;
  if(qs6 == 'A'){c++;}
  var qs7 = document.quiz.q7.value;
  if(qs7 == 'B'){c++;}
  var qs8 = document.quiz.q8.value;
  if(qs8 == 'B'){c++;}
  var qs9 = document.quiz.q9.value;
  if(qs9 == 'B'){c++;}
  var qs10 = document.quiz.q10.value;
  if(qs10 == 'D'){c++;}
  var res = document.getElementById('result');
  var ele = document.getElementById('q');
  ele.style.display = "none";
  var ele2 = document.getElementById('sen');
  ele2.style.display = "inline";
  res.textContent = `${c}`;
}
var total_seconds=60*10;
var c_minutes = parseInt(total_seconds/60);
var c_seconds= parseInt(total_seconds%60);
function CheckTime(){
	document.getElementById("count").innerHTML='Time Left  ' + c_minutes + ':'+ c_seconds;
	if(total_seconds<=0){

		alert("You are out of time!");
		location.replace("nextpage.html");
		result.textContent=`Your result is ${c}.Here are some courses to improve your skills.`
	}else{
		total_seconds=total_seconds-1;
		c_minutes=parseInt(total_seconds/60);
		c_seconds= parseInt(total_seconds%60);
		setTimeout("CheckTime()",1000);

	}

}
setTimeout("CheckTime()",1000);
