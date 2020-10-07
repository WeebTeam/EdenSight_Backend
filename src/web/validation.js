var gErrorMsg = "";

function validationOK(name, caretaker, room, deviceAddr, gender, dob, ic, nationality, weight, height, pNum, 
	guardian, emergencyPNum, streetAdd, streetAdd2, city, state, postal){
	gErrorMsg = "";

	var nameOk = checkName(name);
	var caretakerOk = checkCaretaker(caretaker);
	var roomOk = checkRoom(room);
	var deviceAddrOk = checkDeviceAddr(deviceAddr);
	var dobOk = checkDoB(dob);
	var icOk = checkIC(ic);
	var nationalityOk = checkNationality(nationality);
	var weightOk = checkWeight(weight);
	var heightOk = checkHeight(height);
	var pNumOk = checkPNum(pNum);
	var guardianOk = checkGuardian(guardian);
	var emergencyPNumOk = checkEmergencyPNum(emergencyPNum);
	var streetAddOk = checkStreetAdd(streetAdd);
	var streetAdd2Ok = checkStreetAdd2(streetAdd2);
	var cityOk = checkCity(city);
	var stateOk = checkState(state);
	var postalOk = checkPostal(postal);

	var allOk = false;

	if(nameOk && caretakerOk && roomOk && dobOk && icOk && nationalityOk && weightOk && heightOk && pNumOk
		&& guardianOk && emergencyPNumOk && streetAddOk && streetAdd2Ok && cityOk && stateOk && postalOk){
		allOk = true;
	}
	if(deviceAddr.length != 0){
		if(!deviceAddrOk)
			allOk = false;
	}
	else{
		Toast.fire({
      		icon: 'error',
      		title: 'Oops!',
      		text: gErrorMsg
  		})
		allOk = false;
	}

	return allOk;
}

/* Check Name */
function checkName(name) {
	var pattern = /^[a-zA-Z ]+$/;     
	var nameOk = true;
	
	if ((name.length == 0)){        
		gErrorMsg = gErrorMsg + "Your name cannot be blank.\n"
		 nameOk = false; 
	}
	else{
		if (!pattern.test(name)){
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters.\n"
			nameOk = false; 
		}
	}
	
	return nameOk;
}

function checkCaretaker(caretaker){
	var pattern = /^[a-zA-Z ]+$/;     
	var caretakerOk = true;
	
	if ((caretaker.length == 0)){        
		gErrorMsg = gErrorMsg + "Your caretaker cannot be blank.\n"
		 caretakerOk = false; 
	}
	else{
		if (!pattern.test(caretaker)){
			gErrorMsg = gErrorMsg + "Your caretaker must only contain alpha characters.\n"
			caretakerOk = false; 
		}
	}
	
	return caretakerOk;
}

function checkRoom(room){
	var pattern = /^[\w\d]+$/;     
	var roomOk = true;
	
	if ((room.length == 0)){
		gErrorMsg = gErrorMsg + "Your room cannot be blank.\n"
		 roomOk = false; 
	}
	else{
		if (!pattern.test(room)){
			gErrorMsg = gErrorMsg + "Your room must only contain alpha numerical characters.\n"
			roomOk = false; 
		}
	}
	
	return roomOk;
}

function checkDeviceAddr(deviceAddr){
	var pattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;   
	var deviceAddrOk = true;
	
	if (!pattern.test(deviceAddr)){
		gErrorMsg = gErrorMsg + "Your device address must only according to the format.\n"
		deviceAddrOk = false; 
	}
	
	return deviceAddrOk;
}

function checkDoB(dob){
	var pattern = "/^mm\/dd\/yyyy$/";     
	var dobOk = true;
	
	if (pattern.test(dob)){
		gErrorMsg = gErrorMsg + "Please insert a date.\n"
		dobOk = false; 
	}
	
	return dobOk;
}

function checkIC(ic){
	var pattern = /^[0-9]{12}$/;     
	var icOk = true;
	
	if ((ic.length == 0)){        
		gErrorMsg = gErrorMsg + "Your IC no. cannot be blank.\n"
		 icOk = false; 
	}
	else{
		if (!pattern.test(ic)){
			gErrorMsg = gErrorMsg + "Your IC no. must only contain numbers.\n"
			icOk = false; 
		}
	}
	
	return icOk;
}

function checkNationality(nationality) {
	var pattern = /^[a-zA-Z ]+$/;     
	var nationalityOk = true;
	
	if ((nationality.length == 0)){        
		gErrorMsg = gErrorMsg + "Your nationality cannot be blank.\n"
		 nationalityOk = false; 
	}
	else{
		if (!pattern.test(nationality)){
			gErrorMsg = gErrorMsg + "Your nationality must only contain alpha characters.\n"
			nationalityOk = false; 
		}
	}
	
	return nationalityOk;
}

function checkWeight(weight){
	var pattern = /^[\d]{2,3}$/;     
	var weightOk = true;
	
	if ((weight.length == 0)){        
		gErrorMsg = gErrorMsg + "Your weight cannot be blank.\n"
		 weightOk = false; 
	}
	else{
		if (!pattern.test(weight)){
			gErrorMsg = gErrorMsg + "Your weight must only be numbers.\n"
			weightOk = false; 
		}
	}
	
	return weightOk;
}

function checkHeight(height){
	var pattern = /^[\d]{2,3}$/;     
	var heightOk = true;
	
	if ((height.length == 0)){
		gErrorMsg = gErrorMsg + "Your height cannot be blank.\n"
		 heightOk = false; 
	}
	else{
		if (!pattern.test(height)){
			gErrorMsg = gErrorMsg + "Your height must only be numbers.\n"
			heightOk = false; 
		}
	}
	
	return heightOk;
}

function checkPNum(pNum) {
	var pattern = /^[0-9]{10,13}$/;     
	var pNumOk = true;
	
	if ((pNums.length == 0)){        
		gErrorMsg = gErrorMsg + "Your phone no. cannot be blank.\n"
		 pNumOk = false; 
	}
	else{
		if (!pattern.test(pNums)){
			gErrorMsg = gErrorMsg + "Your phone no. must only contain alpha characters.\n"
			pNumOk = false; 
		}
	}
	
	return pNumOk;
}

function checkEmergencyPNum(emergencyPNum) {
	var pattern = /^[0-9]{10,13}$/;     
	var emergencyPNumOk = true;
	
	if ((emergencyPNum.length == 0)){        
		gErrorMsg = gErrorMsg + "Your emergency phone no. cannot be blank.\n"
		 emergencyPNumOk = false; 
	}
	else{
		if (!pattern.test(emergencyPNum)){
			gErrorMsg = gErrorMsg + "Your emergency phone no. must only contain numbers and must be around 10-13 characters.\n"
			emergencyPNumOk = false; 
		}
	}
	
	return pNumOk;
}

function checkGuardian(guardian){
	var pattern = /^[a-zA-Z ]+$/;     
	var guardianOk = true;
	
	if ((guardian.length == 0)){        
		gErrorMsg = gErrorMsg + "Your guardian name cannot be blank.\n"
		 guardianOk = false; 
	}
	else{
		if (!pattern.test(guardian)){
			gErrorMsg = gErrorMsg + "Your guardian name must only contain alpha characters.\n"
			guardianOk = false; 
		}
	}
	
	return guardianOk;
}

function checkStreetAdd(streetAdd){     
	var streetAddOk = true;
	
	if ((streetAdd.length == 0)){
		gErrorMsg = gErrorMsg + "Your street address cannot be blank.\n"
		 streetAddOk = false; 
	}
	
	return streetAddOk;
}

function checkStreetAdd2(streetAdd2){    
	var streetAdd2Ok = true;
	
	if ((streetAdd2.length == 0)){
		gErrorMsg = gErrorMsg + "Your street address 2 cannot be blank.\n"
		 streetAdd2Ok = false; 
	}
	
	return streetAdd2Ok;
}

function checkCity(city){    
	var cityOk = true;
	
	if ((city.length == 0)){        
		gErrorMsg = gErrorMsg + "Your city cannot be blank.\n"
		 cityOk = false; 
	}
	
	return cityOk;
}

function checkState(state) {     
	var stateOk = true;
	
	if ((state.length == 0)){        
		gErrorMsg = gErrorMsg + "Your state cannot be blank.\n"
		 stateOk = false; 
	}
	
	return stateOk;
}

function checkPostal(postal){
	var pattern = /^[0-9]{5}$/;     
	var postalOk = true;
	
	if ((postal.length == 0)){        
		gErrorMsg = gErrorMsg + "Your postal cannot be blank.\n"
		 postalOk = false; 
	}
	else{
		if (!pattern.test(postal)){
			gErrorMsg = gErrorMsg + "Your postal must only contain alpha characters.\n"
			postalOk = false; 
		}
	}
	
	return postalOk;
}