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
