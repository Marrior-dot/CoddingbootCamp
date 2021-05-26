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
	let nameLabel = document.getElementById('name');
	let emailLabel = document.getElementById('email').value; 
	let nameValid = /[a-z]/ig;
	let emailValid = /\w@gmail|outlook|hotmail|yahoo|uol.com$|.com.br$/
		if (nameValid.test(nameLabel.value) === true ){
			return true;
		} 
		else {
			nameLabel.title = 'São aceitas apenas letras maiusculas e minusculas';
		}
}
