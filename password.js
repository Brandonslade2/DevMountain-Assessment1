let password = "Devmountain1!"


//I had to research how to this and discovered functions with .test is the best way to go, so I had to learn it.

//The below function tests if my password contains numbers
function containsNumber(password) {
    return /[0-9]/.test(password)
}

//The below function tests if my password contains upper case letters
function containsUpperCaseLetter(password) {
    return /[A-Z]/.test(password)
}

//The below function tests if my password contains lower case letters
function containsLowerCaseLetter(password) {
    return /[a-z]/.test(password)
}

//The below function tests if my password contains special characters
function containsSpecialCharacters(password) {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
}

//The below function tests if my password contains a space
function containsSpace(password) {
    return /[\s]/.test(password)
}


//I would love to know if there is a better way to check for all these conditions
if (containsNumber(password) === true && containsUpperCaseLetter(password) === true && password.length >= 10 && containsLowerCaseLetter(password) === true && password.length <= 20 && containsSpecialCharacters(password) === true && containsSpace(password) === false && password.includes('password') === false){
   console.log(`Success\n` +
  ` _________\n` +                                      
  `/   _____/__ __   ____  ____  ____   ______ ______\n` +
  `|_____  ||  |  |_/ ___|/ ___|/ __ | /  ___//  ___/\n` +
  ` /        |  |  /|  |__|  |__|  ___/ |___ | |___ | \n` +
  `/_______  /____/  |___  >___  >___  >____  >____  >\n` +
  `        |/            |/    |/    |/     |/     |/`)
} else {
   console.log("Failure")
}

//HOW DO I HAVE STRINGS INCLUDE FORWARD SLASH?


/*COMMENT SECTION EXPLAINING ALL MY CONSTRAINTS REQUIRED FOR "SUCCESS"
containsNumber(password) === true               | The password has a number
containsUpperCaseLetter(password) === true      | The password has an upper case letter
password.length >= 10                           | The password is at least 10 characters
containsLowerCaseLetter(password) === true      | The password has a lower case letter
password.length <= 20                           | The password is at most 20 characters
containsSpecialCharacters(password) === true    | The password has special characters
containsSpace(password) === false               | The password DOES NOT HAVE at least one space.
password.includes('password') === false         | The password DOES NOT contain "password"
*/
