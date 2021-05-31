	let nameLabel = document.getElementById('name');
	let nameT = document.getElementById('nameTitle');
	let emailLabel = document.getElementById('email'); 
	let emailT= document.getElementById('emailTitle');
	let ageLabel = document.getElementById('number');
	let ageT = document.getElementById('ageTitle');
	let form = document.getElementById('survey-form');
	let radios = document.getElementsByName('recommend');
	let radioTitle = document.getElementById('radioTitle');
	let checkbox = document.getElementsByName('attr');
	let checkboxTitle = document.getElementById('checkboxTitle'); 

form.addEventListener("submit", function(stop){
	console.log(checkbox);
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

	if (radios[0].checked === false && radios[1].checked === false && radios[2].checked === false){
			errorM[3] = 'É preciso escolher uma alternativa';
			radioTitle.style.color = '#FA5C6C';
			radioTitle.innerText = errorM[3];
		}	
		else{
			errorM.splice(3,3)
			radioTitle.innerText = '';
		}
	
	if(checkbox[0].checked === false && checkbox[1].checked === false && checkbox[2].checked === false && checkbox[3].checked === false && checkbox[4].checked === false){
			errorM[4] = 'Escolha ao menos uma alternativa';
			checkboxTitle.style.color = '#FA5C6C';
			checkboxTitle.innerText = errorM[4]; 
	}			
	else{
		errorM.splice(4,4);
		checkboxTitle.innerText = '';
	}
	
		if (errorM.length > 0){
	stop.preventDefault();
	}
})
