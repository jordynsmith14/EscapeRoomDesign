function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "GREED") {
    alert ("You've got it! Atlantis was an advanced, utopian society that became overrun with greed and vanity. All of this corruption severely angered the Gods and led to the city's eventual destruction.");
     return true;
   }
   alert("Nope! Give it another try!");
   return false;
   }