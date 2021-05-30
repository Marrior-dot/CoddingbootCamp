	let nameLabel = document.getElementById('name');
	let nameT = document.getElementById('nameTitle');
	let emailLabel = document.getElementById('email'); 
	let emailT= document.getElementById('emailTitle');
function FormValidation(){
	let errorM = [];
	if (/[^0-9][a-z]/ig.test(nameLabel.value) === false){
			errorM[0] = nameLabel.title	
			nameT.style.color = '#FA5C6C' 
			nameT.innerText = errorM[0];			
			
		}
	if (/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)\.([a-z])?$/.test(emailLabel.value) === false){
		return false
	}
		
	console.log(errorM);	
	if (errorM.length > 0){
		return false;
	}

		}

