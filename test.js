
var text = function doProblem1() {return "Hello, JavaScript!"};
	alert(text());




function doProblem2() {
	var text = alert("Another message from JavaScript!");
	
}


function doProblem3() {
	
	var makeitred = document.getElementById("target");
	document.getElementById("target").innerHTML = "JavaScript is a dynamic language.";
	/*makeitred.style.color = 'red';*/
	document.getElementById('target').classList.add('makeitred');
	
}	
	

function doProblem4() {
	var hobbies = ["Technology", "Cars", "Sports"]
	hobbies.push('Travel');
	
	for(var i = 0; i < hobbies.length; i++) {
	alert(hobbies[i]);
	}
	
	
}
