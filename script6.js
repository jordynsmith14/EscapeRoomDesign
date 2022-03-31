function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "EARTHQUAKE") {
    alert("Well done! As a punishment for the anger and misbehavior of the city's inhabitants, Poseidon, Zeus, and the other Gods struck the city with a crippling earthquake. The earthquake then progressed into a fatal flood which sank the entire island.")
     return true;
   }
   alert("Not quite, try again!");
   return false;
   }