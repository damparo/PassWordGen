//this is where i begin
alert("the length of your password should between 8 to 128 characters");

var pwLength = prompt("how long is your password?");
//set up my condition for the password length
if (pwLength <= 128 && pwLength >= 8) {
  alert("password length approved");
} else {
  alert("password length denied. Please try again.");
}
// once I add a loop, I need to kill the loop at the point whenever the else option is selected then have it begin from the beginning
//set up my prompts
var lowCaseCH = confirm("would you like to use lower case characters?");

if (lowCaseCH) {
  alert("great");
} else {
  alert("You must use at least one lower case character.");
}

var uppCaseCH = confirm("would you like to use upper case characters?");

if (uppCaseCH) {
  alert("great!");
} else {
  alert("You must use at least one upper case character.");
}

var specialCH = confirm("would you like to use special characters?");

if (specialCH) {
  alert("great!!");
} else {
  alert("You must use at least one special character.");
}

//still figuring out the functions. Will add them here

document.getElementById("generate").addEventListener("click", function() {
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
    "z"
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
    "Z"
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
    "~"
  ];

  var createdPW = [];

  // console.log(pwLength);
  // console.log(typeof(pwLength));
  // console.log("length", pwLength.length);

  for (var i = 0; i < parseInt(pwLength); i++) {
    if (createdPW.length == parseInt(pwLength)) {
      break;
    }

    var randomIndex = Math.floor(Math.random() * alpha.length);

    var randomIndexbigAlpha = Math.floor(Math.random() * bigAlpha.length);
    createdPW.push(alpha[randomIndex]);
    // we added additional letter so we have to apply condition again
    if (createdPW.length == parseInt(pwLength)) {
      break;
    }

    var randomIndexcharSpecial = Math.floor(Math.random() * charSpecial.length);
    createdPW.push(alpha[randomIndex]);

    // we added special character so we have to apply condition again
    if (createdPW.length == parseInt(pwLength)) {
      break;
    }

    createdPW.push(bigAlpha[randomIndexbigAlpha]);
    // console.log(alpha[i]);

    if (createdPW.length == parseInt(pwLength)) {
      break;
    }

    createdPW.push(charSpecial[randomIndexcharSpecial]);
  }

  document.getElementById("password").value = createdPW.join("");
});
