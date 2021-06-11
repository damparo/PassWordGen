// created alert to tell user password should be "x" characters long

alert("the length of your password should be between 8 to 128 characters");

// this function prevents the generate password btn from working if any of the conditions are not met. This is done by using the disabled property

function tryAgain() {
  var killBtn = (document.getElementById("generate").disabled = true);
  return false;
}

// asks user how long password will be

var pwLength = prompt("how long is your password?");

//  must meet length conditions, otherwise it won't work
if (pwLength >= 8 && pwLength <= 128) {
  var useThispwLength = pwLength;

  alert("password length approved");

  // calls the next condition function
  smallCaseCharac();
} else {
  // conditions aren't met then password is denied and generate btn will be disabled
  alert("password length denied. Try again");
  tryAgain();
}

function smallCaseCharac() {
  var lowCaseCH = confirm("would you like to use lower case characters?");

  if (lowCaseCH) {
    alert("great");
    // calls next condition function
    upperCaseCharac();
  } else {
    alert("You must use at least one lower case character. Try again.");
    tryAgain();
  }
}

function upperCaseCharac() {
  var uppCaseCH = confirm("would you like to use upper case characters?");
  if (uppCaseCH) {
    alert("great!");
    // calls next condition function
    specialCharac();
  } else {
    alert("You must use at least one upper case character. Try again.");
    tryAgain();
  }
}

function specialCharac() {
  var specialCH = confirm("would you like to use special characters?");
  if (specialCH) {
    alert("great!!");
  } else {
    alert("You must use at least one special character. Try again.");
    tryAgain();
  }
}

// code breaks after the prompts - i think the generate pw function can't read the above functions.
// pw function was not working becuase above function were out of scope

//  if all conditions are met from prompts then the following code will run...
// created new value so pw gen would only pick values from prompts that met # conditions

document.getElementById("generate").addEventListener("click", function () {
  var alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var bigAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var charSpecial = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "()",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=>",
    "?",
    "@",
    "[",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  var createdPW = [];

  // create a for loop and the number of iterations equals the user's password length

  for (var i = 0; i < parseInt(useThispwLength); i++) {
    if (createdPW.length == parseInt(useThispwLength)) {
      break;
    }

    // grab a random index number and get an element from each of the lower case, big case, and special char and push into the createdpw array
    var randomIndex = Math.floor(Math.random() * alpha.length);
    createdPW.push(alpha[randomIndex]);
    // we added a character so we have to apply condition again
    if (createdPW.length == parseInt(useThispwLength)) {
      break;
    }

    var randomIndexbigAlpha = Math.floor(Math.random() * bigAlpha.length);
    createdPW.push(bigAlpha[randomIndexbigAlpha]);
    // we added a character so we have to apply condition again
    if (createdPW.length == parseInt(useThispwLength)) {
      break;
    }

    var randomIndexcharSpecial = Math.floor(Math.random() * charSpecial.length);

    createdPW.push(charSpecial[randomIndexcharSpecial]);

    // we added additional letter so we have to apply condition again
    if (createdPW.length == parseInt(useThispwLength)) {
      break;
    }
  }


  // console.log(createdPW);



  // added fisher yates shuffle to further randomize pw
  // this will take the elements from the createPW array and randomize the order of the elements 
  function mix() {
    for (let i = createdPW.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = createdPW[i];
      createdPW[i] = createdPW[j];
      createdPW[j] = temp;
    }
    return createdPW;
  }
  
  mix();
  // console.log(createdPW);

  document.getElementById("password").value = createdPW.join("");




});
