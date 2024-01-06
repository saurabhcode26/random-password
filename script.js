const passwordBox = document.querySelector(".password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrst";
const numbers =  "0123456789";
const symbol = "@!#&*$";

const allChars = upperCase + lowercase + numbers + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}