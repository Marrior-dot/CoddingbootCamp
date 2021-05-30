	let nameLabel = document.getElementById('name');
	let nameT = document.getElementById('nameTitle');
	let emailLabel = document.getElementById('email'); 
	let emailT= document.getElementById('emailTitle');
	let ageLabel = document.getElementById('number');
	let ageT = document.getElementById('ageTitle');
	let form = document.getElementById('survey-form');

form.addEventListener("submit", function(stop){
	var errorM = [];
	if (/[^0-9][a-z][^0-9]/ig.test(nameLabel.value) == false){
			errorM[0] = nameLabel.title;	
			nameT.style.color = '#FA5C6C'; 
			nameT.innerText = errorM[0];			
		}
	else{
			errorM.splice(0,0);	
			nameT.innerText ='';
	}
	if (/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+).([a-z])?$/.test(emailLabel.value) == false){
			errorM[1] =emailLabel.title;
			emailT.style.color = '#FA5C6C';
			emailT.innerText = errorM[1]; 
	}	
	else{
			errorM.splice(1,1)	
			emailT.innerText = '';
	}
	if (ageLabel.value === ''){
			errorM[2] = ageLabel.title;
			ageT.style.color = '#FA5C6C';
			ageT.innerText = errorM[2];
	}		
	else{
			errorM.splice(2,2);
			ageT.innerText = '';
	}
	if (errorM.length > 0){
	stop.preventDefault();
	}
})
