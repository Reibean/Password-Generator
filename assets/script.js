// Assignment Code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

a2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

space = [];

var input;


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {{

    enter = parseInt(prompt("How many characters?"));
    
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 64) {
        enter = parseInt(prompt("You must choose between 8 and 64"));

    } else {
        confirmCharacter = confirm("Use special characters?");
        confirmNumber = confirm("Use numbers?");
        confirmUppercase = confirm("Use Uppercase letters?");
        confirmLowercase = confirm("Use Lowercase letters?");
    };
}

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    input = alert("Pick your criteria!");
}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    input = character.concat(number, a, a2);
}

else if (confirmCharacter && confirmNumber && confirmUppercase) {
    input = character.concat(number, a2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    input = character.concat(number, a);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    input = character.concat(a, a2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    input = number.concat(a, a2);
}

else if (confirmCharacter && confirmNumber) {
    input = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    input = character.concat(a);

} else if (confirmCharacter && confirmUppercase) {
    input = character.concat(a2);
}
else if (confirmLowercase && confirmNumber) {
    input = a.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    input = a.concat(a2);

} else if (confirmNumber && confirmUppercase) {
    input = number.concat(a2);
}
else if (confirmCharacter) {
    input = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    input = a;
}

else if (confirmUppercase) {
    input = space.concat(a2);
};


var password = [];

for (var i = 0; i < enter; i++) {
    var pickChoices = input[Math.floor(Math.random() * input.length)];
    password.push(pickChoices);

}

function UserInput(ps) {
document.getElementById("placeholder").textContent = password;

}
 var ps = password.join("");
    UserInput(ps);
    return ps;

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}}