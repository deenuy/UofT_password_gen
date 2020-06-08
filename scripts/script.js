// global or instance variables
var passwdLength = 0;
var passedCharType = '';
var specialChar = "!@#$%^&*()_+{}|:?><[]";
var numChar = '0123456789';
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseChar = lowerCaseChar.toUpperCase();


// get document element tag selector 
var specialCharEl = document.getElementById('chooseSpecialChar');
var numCharEl = document.getElementById('chooseNumChar');
var lowerCaseCharEl = document.getElementById('chooseLowerCaseChar');
var upperCaseCharEl = document.getElementById('chooseUpperCaseChar');
var genPasswdBnEl = document.getElementById('genPasswdBn');
var copyClipBnEl = document.getElementById('copyClipBn')

// Listener implementation for generate password button
genPasswdBnEl.addEventListener("click", genRandomPasswd);

// Listener implementation for copy to clipboard
copyClipBnEl.addEventListener("click", copyToClipboard)

// function to generate random password
function genRandomPasswd() {
    
    // User input for choosing password length
    passwdLength = prompt('Enter the password lenght ranging from 8 to 128 characters: ');
    while (passwdLength < 8 || passwdLength > 128) {
        alert('ERROR: Enter the valid length 8 to 128 only');
        passwdLength = prompt('Enter the password lenght ranging from 8 to 128 characters: ');
    }

    console.log('User has selected password lenght: ' + passwdLength);

    // Getting the selections of checkboxes
}

// function to copy to clipboard
function copyToClipboard{
    console.log("Copy to clipboard is successful!")
}