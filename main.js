//CAPITALIZE THE FIRST LETTER IN EVERY WORD OF THE STRING
var letterCapitalize = function(str) {

	var capStr = str;

	for(i=0; i<str.length; i++){

		if(i===0){
			capStr = str[i].toUpperCase() + capStr.substring(1,str.length);
		}
		else if(str[i]===" "){
			capStr = capStr.substring(0,i+1) + str[i+1].toUpperCase() + capStr.substring(i+2,str.length);
		}
	}
	return capStr;
}

var testString = prompt("Enter any sentence: ");
alert(letterCapitalize(testString));



//COUNT # OF WORDS IN A GIVEN STRING
var wordCount = function(str) {
	stringArray = str.split(" ");
	return stringArray.length;
}

var testString = prompt("Enter any sentence: ");
alert(wordCount(testString));



//DETERMINES IF PRIME NUMBER
var primeTime = function(num) {
	var divisors = 0;
	for(i=0; i<num; i++) {
		if (num%i===0) {
			divisors++;
		}
	}
	if (divisors===1) {
		return alert(num + " is a prime number!");
	}
	else {
		return alert(num + " is a NOT prime number!");
	}
}

var testNum = prompt("Enter any number: ");
primeTime(testNum);