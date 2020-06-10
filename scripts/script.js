// global or instance variables
var passwdLength = 0;

// get document element tag selector 
var specialCharEl = document.getElementById('chooseSpecialChar');
var numCharEl = document.getElementById('chooseNumChar');
var lowerCaseCharEl = document.getElementById('chooseLowerCaseChar');
var upperCaseCharEl = document.getElementById('chooseUpperCaseChar');
var genPasswdBnEl = document.getElementById('genPasswdBn');
var copyClipBnEl = document.getElementById('copyClipBn')
var resultEl = document.getElementById('result');

// function to generate random special char
function getRandSpecChar() {
	var specialChar = '!@#$%^&*(){}[]=<>/,.'
	return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// ASCII UNICode for numeric starts from 48. Below function will generate random select of lower case alphabet char.
function getRandNum() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// ASCII UNICode for lower case alphabet starts from 97. Below function will generate random select of lower case alphabet char.
function getRandLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// ASCII UNICode for upper case alphabet starts from 65. Below function will generate random select of upper case alphabet char.
function getRandUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Object to store rand functions 
var randFunc = {
    specChar: getRandSpecChar,
    num: getRandNum,
    lower: getRandLower,
    upper: getRandUpper
}
// Listener implementation for generate password button
genPasswdBnEl.addEventListener("click", genRandomPasswd);

// Listener implementation for copy to clipboard
copyClipBnEl.addEventListener("click", copyToClipboard)

// function to generate random password
function genRandomPasswd() {

    //clearing the result area
    //resultEl.value = ''
    
    // User input for choosing password length
    passwdLength = prompt('Enter the password lenght ranging from 8 to 128 characters: ');
    while (passwdLength < 8 || passwdLength > 128) {
        alert('ERROR: Enter the valid length 8 to 128 only');
        passwdLength = prompt('Enter the password lenght ranging from 8 to 128 characters: ');
    }

    console.log('INFO: User has selected password lenght: ' + passwdLength);

    // Getting the states of checkboxes
    var isSpecialCharSelected = specialCharEl.checked;
    var isNumCharSelected = numCharEl.checked;
    var isLowerCaseCharSelected = lowerCaseCharEl.checked;
    var isUpperCaseCharSelected = upperCaseCharEl.checked;

    // Print the password result in text area result element
    resultEl.innerText = genPassword(passwdLength, isSpecialCharSelected, isNumCharSelected, isLowerCaseCharSelected, isUpperCaseCharSelected);

    // Function to generate random password string
    function genPassword(length, specChar, num, lower, upper) {
        var getPasswdStr = '';
        var count =  specChar + num + lower + upper;

        //Filtr the array with only true | 0 for filtering selected character type
        var arraySelection = [{specChar}, {num}, {lower}, {upper}].filter(item => Object.values(item)[0]);

        if (count === 0) {
            return alert('ERROR: Select at least one character type criteria to generate password');
        }

        for (var i=0; i<passwdLength; i+=count) {
            arraySelection.forEach(
                type => {
                    const funcName = Object.keys(type)[0];
                    getPasswdStr += randFunc[funcName]();
                }
            );
        }
        return getPasswdStr;
    }
}

// function to copy to clipboard
function copyToClipboard() {
    var selectResultArea = document.getElementById('result').childNodes[0];
    console.log(selectResultArea);
    var selectResult = document.querySelector('#result');
    selectResult.select();

    if (selectResultArea !=  '') {
        document.execCommand('copy');
        console.log("INFO: Password is successfully copied to clipboard");
    }
    else {
        alert("INFO: No password found. Generate the password first.");
        console.log("INFO: No password found. Generate the password first.");
    }
}