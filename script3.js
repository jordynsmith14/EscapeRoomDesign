function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "ATLAS") {
    alert("Great work! Poseidon named his mortal son, Atlas, the king and overlord of the ten kingdoms of Atlantis! Hence the name 'Atlantis' which is derived from the ancient Greek term for 'island of Atlas'.")
     return true;
   }
   alert("That's incorrect, try again!");
   return false;
   }

//--THIS IS THE WORD SCRAMBLE--//

/*https://stackoverflow.com/questions/33327100/save-and-display-dropped-elements-in-javascript-array*/


/*Allow draggable elements to move*/
function dragStart(event) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("Text", event.target.getAttribute("id"));
}

/*Allow elements to be dragged over other elements*/
function dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
}

/*Drop to let go of the letters in the dropbox area and put the letters in order*/
function drop(event) {
    event.stopPropagation();
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));

 /*   //when i dropped an element and if i made mistake, by clicking on element i remove it from dropbox
    var txt1 = document.getElementById(data);
    txt1.onclick = function () {
    document.getElementById(data).remove();
    this.remove();}; */       
}

/*save the order and show it in demo paragraph*/
function saveAndDisplay() {
    var result = document.getElementById('demo');
    var list = document.getElementById('dropBox');
    while (list.children.length > 0) {
        result.appendChild(list.children[0]);
    } 
}

/*check that the answer matches the key*/

function checkAnswer() {
   var password = document.getElementById("demo").innerText;
  let key = "ATLAS";
  
   if(password == key) {
     alert("Great job!");
     return true;
   }
   else{
     alert("That is incorrect, try again!");
     return false;
   }
   }