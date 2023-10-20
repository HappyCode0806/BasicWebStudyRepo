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

