var gErrorMsg = "";

function validationOK(name, room, deviceAddr, dob, ic, nationality, weight, height, pNum,
	guardian, emergencyPNum, streetAdd, streetAdd2, city, state, postal){
	gErrorMsg = "";

	var nameOk = checkName(name);
	var roomOk = checkRoom(room);

	if(deviceAddr){
		var deviceAddrOk = checkDeviceAddr(deviceAddr);
	}

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

	if(nameOk && roomOk && dobOk && icOk && nationalityOk && weightOk && heightOk && pNumOk
		&& guardianOk && emergencyPNumOk && streetAddOk && streetAdd2Ok && cityOk && stateOk && postalOk){

		allOk = true;

		if(deviceAddr){
			if(!deviceAddrOk)
				allOk = false;
		}
	}
	else{
		Toast.fire({
      		icon: 'error',
      		html: '<pre>' + gErrorMsg + '</pre>',
      		width: '45 rem'
  		})
		allOk = false;
	}

	return allOk;
}


function staffValidationOK(name, username, password, pNum){
	gErrorMsg = "";

	var nameOk = checkName(name);
	var usernameOk = checkUsername(username);
	var passwordOk = checkPassword(password);
	var pNumOk = checkPNum(pNum)

	var allOk = false;

	if(nameOk && usernameOk && passwordOk && pNumOk){
		allOk = true;
	}
	else{
		Toast.fire({
      		icon: 'error',
      		html: '<pre>' + gErrorMsg + '</pre>',
      		width: '45 rem'
  		})
		allOk = false;
	}

	return allOk;
}

function staffEditedValidationOK(name, username, password, pNum){
	gErrorMsg = "";

	var nameOk = checkName(name);
	var usernameOk = checkUsername(username);
	var passwordOk = checkEditedPassword(password);
	var pNumOk = checkPNum(pNum)

	var allOk = false;

	if(nameOk && usernameOk && passwordOk && pNumOk){
		allOk = true;
	}
	else{
		Toast.fire({
      		icon: 'error',
      		html: '<pre>' + gErrorMsg + '</pre>',
      		width: '45 rem'
  		})
		allOk = false;
	}

	return allOk;
}


function residentValidationOK(weight, height){
	gErrorMsg = "";

	var weightOk = checkWeight(weight);
	var heightOk = checkHeight(height);

	var allOk = false;

	if(weightOk && heightOk){
		allOk = true;
	}
	else{
		Toast.fire({
      		icon: 'error',
      		html: '<pre>' + gErrorMsg + '</pre>',
      		width: '45 rem'
  		})
		allOk = false;
	}

	return allOk;
}


function eventValidationOK(eventType, eventName){
	gErrorMsg = "";

	var eventTypeOk = checkEventType(eventType);
	var eventNameOk = checkEventName(eventName);

	var allOk = false;

	if(eventTypeOk && eventNameOk){
		allOk = true;
	}
	else{
		Toast.fire({
      		icon: 'error',
      		html: '<pre>' + gErrorMsg + '</pre>',
      		width: '45 rem'
  		})
		allOk = false;
	}

	return allOk;
}


function checkEventType(eventType){
	var eventTypeOk = true;

	if ((eventType.length == 0)){
		gErrorMsg = gErrorMsg + "Please choose a event type.\n"
		 eventTypeOk = false;
	}

	return eventTypeOk;
}

function checkEventName(eventName){
	var eventNameOk = true;

	if ((eventName.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your event name.\n"
		 eventNameOk = false;
	}

	return eventNameOk;
}

/* Check Name */
function checkName(name) {
	var pattern = /^[a-zA-Z ]+$/;
	var nameOk = true;

	if ((name.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your name.\n"
		 nameOk = false;
	}
	else{
		if (!pattern.test(name)){
			gErrorMsg = gErrorMsg + "Please enter a valid name.\n"
			nameOk = false;
		}
	}

	return nameOk;
}

function checkRoom(room){
	var pattern = /^[\w\d]+$/;
	var roomOk = true;

	if ((room.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your room.\n"
		 roomOk = false;
	}
	else{
		if (!pattern.test(room)){
			gErrorMsg = gErrorMsg + "Please enter a valid room number.\n"
			roomOk = false;
		}
	}

	return roomOk;
}

function checkDeviceAddr(deviceAddr){
	var pattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
	var deviceAddrOk = true;

	if (!pattern.test(deviceAddr)){
		gErrorMsg = gErrorMsg + "Please enter a valid Device MAC Address.\n"
		deviceAddrOk = false;
	}

	return deviceAddrOk;
}

function checkDoB(dob){
	var dobOk = true;

	if (dob.length == 0){
		gErrorMsg = gErrorMsg + "Please insert a date.\n"
		dobOk = false;
	}

	return dobOk;
}

function checkIC(ic){
	var pattern = /^[0-9]{12}$/;
	var icOk = true;

	if ((ic.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your IC number.\n"
		 icOk = false;
	}
	else{
		if (!pattern.test(ic)){
			gErrorMsg = gErrorMsg + "Please enter a valid IC number.\n"
			icOk = false;
		}
	}

	return icOk;
}

function checkNationality(nationality) {
	var pattern = /^[a-zA-Z ]+$/;
	var nationalityOk = true;

	if ((nationality.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your nationality.\n"
		 nationalityOk = false;
	}
	else{
		if (!pattern.test(nationality)){
			gErrorMsg = gErrorMsg + "Please enter a valid nationality.\n"
			nationalityOk = false;
		}
	}

	return nationalityOk;
}

function checkWeight(weight){
	var pattern = /^[\d]{2,3}$/;
	var weightOk = true;

	if ((weight.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your weight.\n"
		 weightOk = false;
	}
	else{
		if (!pattern.test(weight)){
			gErrorMsg = gErrorMsg + "Please enter a valid weight.\n"
			weightOk = false;
		}
	}

	return weightOk;
}

function checkHeight(height){
	var pattern = /^[\d]{2,3}$/;
	var heightOk = true;

	if ((height.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your height.\n"
		 heightOk = false;
	}
	else{
		if (!pattern.test(height)){
			gErrorMsg = gErrorMsg + "Please enter a valid height.\n"
			heightOk = false;
		}
	}

	return heightOk;
}

function checkPNum(pNum) {
	var pattern = /^[0-9]{10,13}$/;
	var pNumOk = true;

	if ((pNum.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your phone number.\n"
		 pNumOk = false;
	}
	else{
		if (!pattern.test(pNum)){
			gErrorMsg = gErrorMsg + "Please enter a valid phone number.\n"
			pNumOk = false;
		}
	}

	return pNumOk;
}

function checkEmergencyPNum(emergencyPNum) {
	var pattern = /^[0-9]{10,13}$/;
	var emergencyPNumOk = true;

	if ((emergencyPNum.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your emergency number.\n"
		 emergencyPNumOk = false;
	}
	else{
		if (!pattern.test(emergencyPNum)){
			gErrorMsg = gErrorMsg + "Please enter a valid emergency number.\n"
			emergencyPNumOk = false;
		}
	}

	return emergencyPNumOk;
}

function checkGuardian(guardian){
	var pattern = /^[a-zA-Z ]+$/;
	var guardianOk = true;

	if ((guardian.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your guardian name.\n"
		 guardianOk = false;
	}
	else{
		if (!pattern.test(guardian)){
			gErrorMsg = gErrorMsg + "Please enter a valid guardian name.\n"
			guardianOk = false;
		}
	}

	return guardianOk;
}

function checkStreetAdd(streetAdd){
	var streetAddOk = true;

	if ((streetAdd.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your street address.\n"
		 streetAddOk = false;
	}

	return streetAddOk;
}

function checkStreetAdd2(streetAdd2){
	var streetAdd2Ok = true;

	if ((streetAdd2.length == 0)){
		gErrorMsg = gErrorMsg + "Please eneter your street address 2.\n"
		 streetAdd2Ok = false;
	}

	return streetAdd2Ok;
}

function checkCity(city){
	var cityOk = true;

	if ((city.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your city.\n"
		 cityOk = false;
	}

	return cityOk;
}

function checkState(state) {
	var stateOk = true;

	if ((state.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your state.\n"
		 stateOk = false;
	}

	return stateOk;
}

function checkPostal(postal){
	var pattern = /^[0-9]{5}$/;
	var postalOk = true;

	if ((postal.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your postal.\n"
		 postalOk = false;
	}
	else{
		if (!pattern.test(postal)){
			gErrorMsg = gErrorMsg + "Please enter a valid postal.\n"
			postalOk = false;
		}
	}

	return postalOk;
}


/* Check Username */
function checkUsername(username) {
	var pattern = /^.+$/;
	var nameOk = true;

	if ((username.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your username.\n"
		 nameOk = false;
	}
	else{
		if (!pattern.test(username)){
			gErrorMsg = gErrorMsg + "Please enter a valid username.\n"
			nameOk = false;
		}
	}

	return nameOk;
}

/* Check Username */
function checkPassword(password) {
	var pattern = /^.+$/;
	var passwordOk = true;

	if ((password.length == 0)){
		gErrorMsg = gErrorMsg + "Please enter your password.\n"
		 passwordOk = false;
	}
	else{
		if (!pattern.test(password)){
			gErrorMsg = gErrorMsg + "Please enter a valid password.\n"
			passwordOk = false;
		}
	}

	return passwordOk;
}

function checkEditedPassword(password){
	var pattern = /^.+$/;
	var passwordOk = true;

	if ((password.length == 0)){
		passwordOk = true;
	}
	else{
		if (!pattern.test(password)){
			gErrorMsg = gErrorMsg + "Please enter a valid password.\n"
			passwordOk = false;
		}
	}

	return passwordOk;
}
