import { Counter } from './counter.js';

function main() {
  const count = document.querySelector('.count');
  const current = parseInt(count.innerText);
  const increaseButton = document.querySelector('.increase-btn');
  const decreaseButton = document.querySelector('.decrease-btn');

  const counter = new Counter({ current, count, increaseButton, decreaseButton });
  counter.setupClickEvents();
}

window.addEventListener('load', main);
