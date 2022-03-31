function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "PLATO") {
    alert("That's correct! The Lost City of Atlantis was first metnioned by Greek philosopher Plato in two Socratic dialogues he wrote over 2,300 years ago!")
     return true;
   }
   alert("Don't give up! Guess again!");
   return false;
   }