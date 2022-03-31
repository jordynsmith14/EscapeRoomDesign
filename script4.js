function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "ATLANTIC") {
    alert("Good job! The large island occupied by the lost city of Atlantis is said to have been located in the middle of the Atlantic Ocean!")
     return true;
   }
   alert("So close! Try again!");
   return false;
   }