// Летающие точки Mute

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Create an array of 5000 random points within the rectangle
let points = [];
for (let i = 0; i < 5000; i++) {
    points.push({
        x: Math.floor(Math.random() * (canvas.width - 3)),
        y: Math.floor(Math.random() * (canvas.height - 3)),
        dx: (Math.random() - 0.5) * 2 / 4, // Random horizontal velocity
        dy: (Math.random() - 0.5) * 2 / 4, // Random vertical velocity
    });
}

// Draw the points on the canvas and move them
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach(point => {
        // Draw the point
        ctx.fillStyle = "#000000";
        ctx.fillRect(point.x, point.y, 1, 1);

        // Move the point
        point.x += point.dx;
        point.y += point.dy;

        // Bounce the point off the edges of the rectangle
        if (point.x < 0 || point.x > canvas.width - 3) {
            point.dx = -point.dx;
        }
        if (point.y < 0 || point.y > canvas.height - 3) {
            point.dy = -point.dy;
        }
    });
    requestAnimationFrame(draw);
}

// Start the animation loop
draw();

// Летающие точки Mute


//Смена карточек с тремя фразами

// выбираем элементы, с которыми будем работать
const container = document.querySelector('.container');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

// устанавливаем начальные значения opacity
card1.style.opacity = '1';
card2.style.opacity = '0';
card3.style.opacity = '0';

let counter = 0; // счетчик нажатий

container.addEventListener('click', () => {
  container.style.opacity = '0'; // меняем opacity на 0 при клике
  setTimeout(() => {
    container.style.opacity = '1'; // через 5 секунд меняем opacity на 1
    counter++; // увеличиваем счетчик нажатий

    // изменяем opacity у нужных элементов в зависимости от счетчика
    if (counter === 1) {
      card1.style.opacity = '0';
      card2.style.opacity = '1';
      card3.style.opacity = '0';
    } else if (counter === 2) {
      card1.style.opacity = '0';
      card2.style.opacity = '0';
      card3.style.opacity = '1';
    } else if (counter === 3) {
      card1.style.opacity = '1';
      card2.style.opacity = '0';
      card3.style.opacity = '0';
      counter = 0; // обнуляем счетчик, если было три нажатия
    }
  }, 3000);
});

//Смена карточек с тремя фразами



//Прокрутка к самому низу
function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
//Прокрутка к самому низу


// Прокрутка к таблице

function scrollToElement() {
    var element = document.getElementById("scroll-to-element");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  
// Находим ссылку с классом "nav-link" и текстом "Идея"
const ideaLink = document.querySelector('.nav-link[href="#!"][innerText="Идея"]');

// Находим объект table
const tableElement = document.querySelector('.table');

// Добавляем обработчик события клика на ссылку
ideaLink.addEventListener('click', () => {
  // Вычисляем координаты объекта table относительно верхней границы документа
  const tableTop = tableElement.getBoundingClientRect().top + window.pageYOffset;

  // Вычисляем положение экрана, которое необходимо установить для того, чтобы объект table оказался по центру страницы
  const targetScrollY = tableTop - window.innerHeight / 2 + tableElement.offsetHeight / 2;

  // Анимированно прокручиваем экран до нужного положения
  window.scrollTo({
    top: targetScrollY,
    behavior: 'smooth'
  });
});

// Прокрутка к таблице


//Выбор языка

function showKaz() {
    document.getElementById("kaz").style.display = "flex";
  }
  
  function hideKaz() {
    var kaz = document.getElementById("kaz");
    var relatedTarget = event.relatedTarget;
    setTimeout(function() {
      if (!kaz.contains(relatedTarget)) {
        kaz.style.display = "none";
      }
    }, 3000);
  }
  
let flagKazVisible = false;
let flagKazTimeout;

language.addEventListener("click", function() {
  if (flagKazVisible) {
    flagKaz.style.display = "none";
    flagKazVisible = false;
    clearTimeout(flagKazTimeout);
  } else {
    flagKaz.style.display = "block";
    flagKazVisible = true;
    flagKazTimeout = setTimeout(function() {
      flagKaz.style.display = "none";
      flagKazVisible = false;
    }, 1000);
  }
});

//Выбор языка

