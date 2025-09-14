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

// Clickable apps
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    switch(icon.id){
      case 'calculator':
        alert('Opening Calculator...');
        break;
      case 'wallpaper':
        alert('Opening Wallpaper App...');
        break;
      case 'carGame':
        alert('Opening Car Game...');
        break;
      case 'chatGPT':
        alert('Opening ChatGPT...');
        break;
    }
  });
});
// Calculator functionality
document.getElementById('calculator').addEventListener('click', () => {
  let num1 = prompt("Enter first number:");
  let num2 = prompt("Enter second number:");
  let sum = Number(num1) + Number(num2);
  alert(`Result: ${sum}`);
});
document.addEventListener("DOMContentLoaded", () => {
  // Calculator
  document.getElementById('calculator').addEventListener('click', () => {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");
    let sum = Number(num1) + Number(num2);
    alert(`Result: ${sum}`);
  });

  // Wallpaper
  document.getElementById('wallpaper').addEventListener('click', () => {
    let color1 = prompt("Enter top color (e.g., black):");
    let color2 = prompt("Enter bottom color (e.g., purple):");
    document.body.style.background = `linear-gradient(${color1}, ${color2})`;
  });

  // Car Game
  document.getElementById('carGame').addEventListener('click', () => {
    alert("Car Game coming soon! 🚗");
  });

  // ChatGPT
  document.getElementById('chatGPT').addEventListener('click', () => {
    alert("ChatGPT coming soon! 🤖");
  });
});
