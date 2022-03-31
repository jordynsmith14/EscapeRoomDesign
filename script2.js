function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "POSEIDON") {
    alert("That's Right! Poseidon, the god of the sea, storms, and earthquakes is said to have built the city of Atlantis!")
     return true;
   }
   alert("Uh oh that's wrong.. try again!");
   return false;
   }