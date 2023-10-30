// 간단한 로그인 프로그램 구현 - Javascript
const userID = "Admin";
const userPW = "TheMaster";

const inputID = prompt("Please Login");

if (inputID == userID) {
		const inputPW = prompt("Please Password");
		if (inputPW == userPW) {
				alert("Welcome!");
		} else if (inputPW == '' | inputPW == null){
				alert("exit...");
		} else {
				alert("Authentication failed...!");
		}
} else if (inputID == '' || inputID == null) {
		alert("exit...");
} else {
		alert("Not found User...");
}

