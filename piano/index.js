const keys = document.querySelectorAll('li');

keys.forEach(function(e) {
  e.addEventListener('keyPress', function(){
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});
document.addEventListener("keypress", function (event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'a':
    var tom1 = new Audio('piano/1.wav');
    tom1.play();
      break;
    case 's':
    var tom2 = new Audio('piano/2.wav');
    tom2.play();
      break;
    case 'd':
    var tom3 = new Audio('piano/3.wav');
    tom3.play();
      break;
    case 'f':
    var tom4 = new Audio('piano/4.wav');
    tom4.play();
      break;
    case 'g':
    var snare = new Audio('piano/5.wav');
    snare.play();
      break;
    case 'h':
    var crash = new Audio('piano/6.wav');
    crash.play();
      break;
      case 'j':
    var kick = new Audio('piano/7.wav');
    kick.play();
      break;
      case 'k':
    var kick = new Audio('piano/8.wav');
    kick.play();
      break;
    default:
    alert('salah memasukan huruf pak');

  }
}

function buttonAnimation (currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout (function(){
  activeButton.classList.remove("pressed");
}, 100);

}
