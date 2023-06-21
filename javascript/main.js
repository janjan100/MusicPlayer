let musicPlayer = document.getElementById("myAudio"); 

function playAudio() { 
  musicPlayer.play(); 
  musicPlayer.addEventListener(click,playAudio);
} 

function pauseAudio() { 
  musicPlayer.pause(); 
  musicPlayer.addEventListener(click,pauseAudio);
} 