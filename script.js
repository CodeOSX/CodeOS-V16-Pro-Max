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
let obstacles = [];
let score = 0;

function createObstacle() {
  const width = Math.random() * 100 + 30;
  const x = Math.random() * (carGameCanvas.width - width);
  obstacles.push({ x: x, y: -20, width: width, height: 20 });
}

window.gameInterval = setInterval(() => {
  // Move obstacles
  for(let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 3;
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

    // Collision
    if(carY < obstacles[i].y + obstacles[i].height &&
       carY + carHeight > obstacles[i].y &&
       carX < obstacles[i].x + obstacles[i].width &&
       carX + carWidth > obstacles[i].x) {
      alert("Game Over! Score: " + score);
      clearInterval(window.gameInterval);
      carGameCanvas.style.display = 'none';
    }

    // Remove off-screen obstacles
    if(obstacles[i].y > carGameCanvas.height) {
      obstacles.splice(i, 1);
      i--;
      score++;
    }
  }

  // Randomly spawn obstacles
  if(Math.random() < 0.02) createObstacle();

  // Move car based on keys (already in your code)
  if(keys['ArrowLeft'] && carX > 0) carX -= speed;
  if(keys['ArrowRight'] && carX < carGameCanvas.width - carWidth) carX += speed;

  // Draw car
  ctx.fillStyle = 'purple';
  ctx.fillRect(carX, carY, carWidth, carHeight);

  // Draw background
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, carGameCanvas.width, carGameCanvas.height);

}, 20);
document.addEventListener("DOMContentLoaded", () => {
  // Intro
  const intro = document.getElementById("intro");
  setTimeout(() => { intro.style.display = "none"; }, 5000); // 5 seconds

  // Clock
  const clock = document.getElementById("clock");
  function updateClock() {
    const now = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    clock.textContent = now.split(", ")[1];
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Home Screen icons
  const carGameCanvas = document.getElementById("carGameCanvas");
  const carGameIcon = document.getElementById("carGame");

  carGameIcon.addEventListener("click", startCarGame);

  // Control Center
  const controlCenter = document.getElementById("controlCenter");
  const closeControl = document.getElementById("closeControl");
  closeControl.addEventListener("click", () => controlCenter.style.display = "none");

  // Car Game
  function startCarGame() {
    carGameCanvas.style.display = "block";
    const ctx = carGameCanvas.getContext("2d");
    const carWidth = 50;
    const carHeight = 80;
    let carX = carGameCanvas.width/2 - carWidth/2;
    let carY = carGameCanvas.height - carHeight - 10;
    const speed = 5;
    let keys = {};
    let obstacles = [];
    let score = 0;

    document.addEventListener("keydown", e => keys[e.key] = true);
    document.addEventListener("keyup", e => keys[e.key] = false);

    function createObstacle() {
      const width = Math.random() * 100 + 30;
      const x = Math.random() * (carGameCanvas.width - width);
      obstacles.push({ x: x, y: -20, width: width, height: 20 });
    }

    window.gameInterval = setInterval(() => {
      ctx.fillStyle = "#111";
      ctx.fillRect(0,0, carGameCanvas.width, carGameCanvas.height);

      // Obstacles
      for(let i=0;i<obstacles.length;i++){
        obstacles[i].y += 3;
        ctx.fillStyle = "red";
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        // Collision
        if(carY < obstacles[i].y + obstacles[i].height &&
           carY + carHeight > obstacles[i].y &&
           carX < obstacles[i].x + obstacles[i].width &&
           carX + carWidth > obstacles[i].x) {
          alert("Game Over! Score: " + score);
          clearInterval(window.gameInterval);
          carGameCanvas.style.display = "none";
          obstacles = [];
          score = 0;
        }

        // Remove off-screen
        if(obstacles[i].y > carGameCanvas.height){
          obstacles.splice(i,1);
          i--;
          score++;
        }
      }

      // Spawn obstacles
      if(Math.random() < 0.02) createObstacle();

      // Car movement
      if(keys["ArrowLeft"] && carX > 0) carX -= speed;
      if(keys["ArrowRight"] && carX < carGameCanvas.width - carWidth) carX += speed;

      // Draw car
      ctx.fillStyle = "purple";
      ctx.fillRect(carX, carY, carWidth, carHeight);

      // Draw score
      ctx.fillStyle = "white";
      ctx.font = "20px sans-serif";
      ctx.fillText("Score: " + score, 10, 30);

    }, 20);
  }
});
