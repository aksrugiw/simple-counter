import { Counter } from './counter.js';

function main() {
  const count = document.querySelector('.count');
  const current = parseInt(count.innerHTML);
  const increaseButton = document.querySelector('.increase-btn');
  const decreaseButton = document.querySelector('.decrease-btn');
  const close = document.querySelector('.notification .close');
  const overlay = document.querySelector('.overlay');
  const notificationContent = document.querySelector('.notification .content');

  const counter = new Counter({ current, count, increaseButton, decreaseButton, close, overlay, notificationContent });
  counter.setupClickEvents();
}

window.addEventListener('load', main);
