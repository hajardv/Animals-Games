

 let ply = document.getElementsByClassName("btn btn-primary");

 
 let tSound = null;
 
 
 function play(index) {
     if (tSound) {
       tSound.pause();
       tSound.currentTime = 1 ; 
     }
     document.querySelectorAll("h3").forEach((el) => {
        el.textContent = ""; 
    });
     
     switch (index) {
         case 0:
         tSound = new Audio("./sounds.animals/cat2.mp3");
             break;
         case 1:
          document.getElementById("nam1").innerHTML="cat";
          tSound = new Audio("./pronociation.ani/pronunciation_en_cat.mp3");

             break;
               
         case 2:
         tSound = new Audio("./sounds.animals/dog.mp3");
             break;
             case 3:
                 document.getElementById("nam2").innerHTML="dog";
                 tSound = new Audio("./pronociation.ani/pronunciation_en_dog.mp3");
                 break;
         case 4:
         tSound = new Audio("./sounds.animals/elephant.mp3");
             break;
             case 5:
               document.getElementById("nam3").innerHTML="elephant";
               tSound = new Audio("./pronociation.ani/pronunciation_en_elephant.mp3");
               break;
             case 6:
         tSound = new Audio("./sounds.animals/monkey.mp3");
             break;
             case 7:
              document.getElementById("nam4").innerHTML="monkey"
              tSound = new Audio("./pronociation.ani/pronunciation_en_monkey.mp3")
                break;
             case 8:
         tSound = new Audio("./sounds.animals/hourse.mp3");
             break;
             case 9:
             document.getElementById("nam5").innerHTML="horse"
             tSound = new Audio("./pronociation.ani/pronunciation_en_horse.mp3")
               break;
             case 10:
         tSound = new Audio("./sounds.animals/donkey.mp3");
             break;
             case 11:
                 document.getElementById("nam6").innerHTML="donkey"
                 tSound = new Audio("./pronociation.ani/pronunciation_en_donkey.mp3")
               break;
         default:
             return; 
     }
 
     
     tSound.play();
 }
 
 
 for (let i = 0; i < ply.length; i++) {
     ply[i].addEventListener("click",    () => play(i))
 }
 document.addEventListener("keypress", (key)=>{func(key.key)});

 function func(son) {
    if (tSound) {
      tSound.pause();
      tSound.currentTime = 1 ; 
    }
    
    
    switch (son) {
        case "c":
        tSound = new Audio("./sounds.animals/cat2.mp3");
            break;
       
              
        case "d":
        tSound = new Audio("./sounds.animals/dog.mp3");
            break;
            
        case "e":
        tSound = new Audio("./sounds.animals/elephant.mp3");
            break;
            
            case "m":
        tSound = new Audio("./sounds.animals/monkey.mp3");
            break;
           
            case"h":
        tSound = new Audio("./sounds.animals/hourse.mp3");
            break;
            
            case "k":
        tSound = new Audio("./sounds.animals/donkey.mp3");
        break;
            
        default:
            return; 
    }

    
    tSound.play();
}
 
