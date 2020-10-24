let uname = prompt('What is your Name?');
let nameLength = uname.length;
function show(){
	document.getElementById('btn1').style.display = 'none';
	document.getElementById('name').innerHTML = "Hello " + uname.toUpperCase() + " !";
}

function wordCount(){
	var wordTotal = uname.split(" ").length;
	console.log(wordTotal);
	var firstName = uname.split(" ")[0];
	var lastName = uname.split(" ")[1];
	return wordTotal;
}

if(uname != null && uname != ''){
//document.getElementById('name').innerHTML = "Hello " + uname.toUpperCase() + " !";
var showMessage = "Hello " + uname.toUpperCase() + " !";
var upperCasename = uname.toUpperCase();
var lowerCasename = uname.toLowerCase();
var newline = "\r\n"; // to put next line
var wordInName = wordCount();
alert("UpperCase Name: " + upperCasename + newline + "LowerCase Name: " + lowerCasename + newline + "Length: " + nameLength + newline + "Word in name: " + wordInName);
}
else{
	document.getElementById('name').innerHTML = "Please reload the page and enter your name!";
}