	let nameLabel = document.getElementById('name');
	let nameT = document.getElementById('nameTitle');
	let emailLabel = document.getElementById('email'); 

function FormValidation(){
	let errorM = [];
		if (/[^0-9][a-z]/ig.test(nameLabel.value) === false){
			errorM[0] = (nameLabel.title)	
			nameT.style.color = '#FA5C6C' 
			nameT.innerText = errorM[0];			
			return false;
		}
		/*if(/^[0-9a-z]@[a-z]\.[a-z]/ig.test(emailLabel.value) === false){
			
		}	
		*/
		
}
