const shapes = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
}