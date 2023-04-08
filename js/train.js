//Выбор тренеровки

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousedown', () => {
    cards.forEach(c => c.classList.remove('clicked'));
    card.classList.add('clicked');
  });
});

document.addEventListener('mouseup', () => {
  cards.forEach(c => c.classList.remove('clicked'));
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

//Выбор тренеровки


const phrase = document.querySelector(".translation-phrase");
const mute = document.querySelector(".mute");
const h2 = document.querySelector(".translation-phrase h2");

phrase.addEventListener("click", () => {
  mute.style.display = "none";
  h2.style.display = "block";
});
