// Show home screen after 4 seconds
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("home").style.display = "block";
}, 4000);

// Play tiger roar after 1 second
setTimeout(() => {
  let tiger = document.getElementById("tigerSound");
  if (tiger) tiger.play();
}, 1000);

// Make lightning flash every 0.5s
let lightning = document.getElementById("lightning");
if(lightning){
  setInterval(() => {
    lightning.style.background = "white";
    setTimeout(() => { lightning.style.background = "transparent"; }, 100);
  }, 500);
}
