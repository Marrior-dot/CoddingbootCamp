//let em = document.getElementById('email');
/*let emValid = /@outlook|gmail|hotmail|yahoo|uol.com$|.com.br$/; 

function test(validation){
	if (validation == true){
		return true
	}
	else{
		return false
	}
}
console.log(emValid.test("username@outlook.com"));
console.log(emValid.test("username@gmail.com"));
console.log(emValid.test("username@hotmail.com"));
console.log(emValid.test("username@uol.com"));
console.log(emValid.test("username@gmail.com.br"));
*/
function FormValidation(){
	let nameLabel = document.getElementById('name').value;
	let emailLabel = document.getElementById('email'); 
	let nameValid = /[a-z]\D/ig;
	let emailValid = /^[a-zA-Z]\d+@[a-zA-Z]+\.[a-z]?+\D/
		if (nameValid.test(nameLabel) === false){
		let nameT = document.getElementById('nameTitle');
		nameT.style.color = '#FF665A'
		nameT.innerText = nameLabel.title;
			return false
		}
		
		if (emailValid.test(emailLabel.value) === false){
		let emailT = document.getElementById('emailTitle');
		emailT.style.color = '#FF665A';
		emailT.innerText = emailLabel.title;
			return false
		}
}
