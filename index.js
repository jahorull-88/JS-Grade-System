function getOutput(){
	var mark = document.getElementById("num").value;
	var result;
	if (100<mark || mark<0) {
		result = "Invalid Marks! : ( :( ";
	}else if(mark>=80){
		result = "A+";

	}else if(mark>=70){
		result = "A";
	}else if(mark>=60){
		result = "A-";
	}else if(mark>=50){
		result = "B";
	}else if(mark>=40){
		result = "C";
	}else if(mark>=33){
		result = "D";
	}else{
		result = "Fail (F)";
	}

	document.getElementById("res").innerHTML = "Your Result is " + "<span style='color:#ff0000;font-size:1.5rem;'>"+result+"</span>";
}
	