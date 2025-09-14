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
document.addEventListener("DOMContentLoaded", () => {
  // Update time (New York)
  function updateTime() {
    let now = new Date();
    let nyTime = now.toLocaleTimeString("en-US", {timeZone: "America/New_York", hour12: true, hour: '2-digit', minute:'2-digit'});
    document.getElementById("time").innerText = nyTime;
  }
  setInterval(updateTime, 1000);

  // Toggle Control Center
  const controlBtn = document.getElementById("controlBtn");
  const controlCenter = document.getElementById("controlCenter");
  const closeControl = document.getElementById("closeControl");

  controlBtn.addEventListener("click", () => {
    controlCenter.style.display = controlCenter.style.display === "none" ? "block" : "none";
  });

  closeControl.addEventListener("click", () => {
    controlCenter.style.display = "none";
  });

  // Low Power Mode
  const lowPower = document.querySelector("#controlCenter input[type='checkbox']");
  lowPower.addEventListener("change", () => {
    document.body.style.filter = lowPower.checked ? "brightness(0.6)" : "brightness(1)";
  });

  // Volume slider (dummy effect)
  const volumeSlider = document.querySelector("#controlCenter input[type='range']");
  volumeSlider.addEventListener("input", () => {
    console.log("Volume set to: " + volumeSlider.value);
  });

  // Clickable apps
  const apps = document.querySelectorAll('.icon');
  apps.forEach(icon => {
    icon.addEventListener('click', () => {
      switch(icon.id){
        case 'calculator':
          let num1 = prompt("Enter first number:");
          let num2 = prompt("Enter second number:");
          let sum = Number(num1) + Number(num2);
          alert(`Result: ${sum}`);
          break;
        case 'wallpaper':
          let color1 = prompt("Enter top color (e.g., black):");
          let color2 = prompt("Enter bottom color (e.g., purple):");
          document.body.style.background = `linear-gradient(${color1}, ${color2})`;
          break;
        case 'carGame':
          alert("Car Game coming soon! 🚗");
          break;
        case 'chatGPT':
          alert("ChatGPT coming soon! 🤖");
          break;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Update Time (New York)
  function updateTime() {
    let now = new Date();
    let nyTime = now.toLocaleTimeString("en-US", {timeZone: "America/New_York", hour12: true, hour: '2-digit', minute:'2-digit'});
    document.getElementById("time").innerText = nyTime;
  }
  setInterval(updateTime, 1000);

  // 2️⃣ Control Center
  const controlBtn = document.getElementById("controlBtn");
  const controlCenter = document.getElementById("controlCenter");
  const closeControl = document.getElementById("closeControl");
  const lowPower = document.querySelector("#controlCenter input[type='checkbox']");
  const volumeSlider = document.querySelector("#controlCenter input[type='range']");

  controlBtn.addEventListener("click", () => {
    controlCenter.style.display = controlCenter.style.display === "none" ? "block" : "none";
  });

  closeControl.addEventListener("click", () => {
    controlCenter.style.display = "none";
  });

  lowPower.addEventListener("change", () => {
    document.body.style.filter = lowPower.checked ? "brightness(0.6)" : "brightness(1)";
  });

  volumeSlider.addEventListener("input", () => {
    console.log("Volume set to: " + volumeSlider.value);
  });

  // 3️⃣ Clickable Apps
  const apps = document.querySelectorAll('.icon');
  const carGameCanvas = document.getElementById('carGameCanvas');
  const ctx = carGameCanvas.getContext('2d');

  apps.forEach(icon => {
    icon.addEventListener('click', () => {
      switch(icon.id){
        case 'calculator':
          let num1 = prompt("Enter first number:");
          let num2 = prompt("Enter second number:");
          let sum = Number(num1) + Number(num2);
          alert(`Result: ${sum}`);
          break;

        case 'wallpaper':
          let color1 = prompt("Enter top color (e.g., black):");
          let color2 = prompt("Enter bottom color (e.g., purple):");
          document.body.style.background = `linear-gradient(${color1}, ${color2})`;
          break;

        case 'carGame':
          carGameCanvas.style.display = 'block';
          startCarGame();
          break;

        case 'chatGPT':
          alert("ChatGPT coming soon! 🤖");
          break;
      }
    });
  });

  // 4️⃣ Car Game Function
  function startCarGame() {
    let carX = carGameCanvas.width / 2 - 25;
    let carY = carGameCanvas.height - 60;
    const carWidth = 50;
    const carHeight = 100;
    let speed = 5;
    const keys = {};

    document.addEventListener('keydown', e => keys[e.key] = true);
    document.addEventListener('keyup', e => keys[e.key] = false);

    if(window.gameInterval) clearInterval(window.gameInterval);

    window.gameInterval = setInterval(() => {
      if(keys['ArrowLeft'] && carX > 0) carX -= speed;
      if(keys['ArrowRight'] && carX < carGameCanvas.width - carWidth) carX += speed;

      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, carGameCanvas.width, carGameCanvas.height);

      ctx.fillStyle = 'purple';
      ctx.fillRect(carX, carY, carWidth, carHeight);
    }, 20);
  }

});
