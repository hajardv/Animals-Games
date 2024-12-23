

 let ply = document.getElementsByClassName("btn btn-primary");

 
 let tSound = null;
 
 
 function play(index) {
    
     if (tSound) {
       tSound.pause();
       tSound.currentTime = 1 ; 
     }
 
     
     switch (index) {
         case 0:
         tSound = new Audio("./sounds.animals/cat.mp3");
             break;
         case 1:
          document.getElementById("nam1").innerHTML="cat"
             break;
               
         case 2:
         tSound = new Audio("./sounds.animals/dog.mp3");
             break;
             case 3:
                 document.getElementById("nam2").innerHTML="dog"
                 break;
         case 4:
         tSound = new Audio("./sounds.animals/elephant.mp3");
             break;
             case 5:
               document.getElementById("nam3").innerHTML="elephant"
               break;
             case 6:
         tSound = new Audio("./sounds.animals/monkey.mp3");
             break;
             case 7:
              document.getElementById("nam4").innerHTML="monkey"
                break;
             case 8:
         tSound = new Audio("./sounds.animals/hourse.mp3");
             break;
             case 9:
             document.getElementById("nam5").innerHTML="horse"
               break;
             case 10:
         tSound = new Audio("./sounds.animals/donkey.mp3");
             break;
             case 11:
                 document.getElementById("nam6").innerHTML="donkey"
               break;
         default:
             return; 
     }
 
     
     tSound.play();
 }
 
 
 for (let i = 0; i < ply.length; i++) {
     ply[i].addEventListener("click",    () => play(i))
 }
