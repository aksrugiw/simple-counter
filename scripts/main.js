import { Counter } from './counter.js';
import { Notification } from './notification.js';

function main() {
  const count = document.querySelector('.count');
  const current = parseInt(count.innerHTML);
  const increaseButton = document.querySelector('.increase-btn');
  const decreaseButton = document.querySelector('.decrease-btn');
  const close = document.querySelector('.notification .close');
  const overlay = document.querySelector('.overlay');
  const notificationContent = document.querySelector('.notification .content');
  const messages = {
    0: 'No, no, only positive numbers 🤓',
    5: 'That’s a good start, keep going 👌',
    13: 'Oh no, unlucky 13! 😱 Quick! Change it!',
    20: 'Wow, you’re so patient 😅',
    50: 'Still there? Are you bored or sth? 😴',
    100: 'Nice job! 👍 You got 💯 points!',
    110: 'Really? Still there? Nothing will happen anymore... 😐',
    150: 'Come on! Go home, you’re drunk 🍻😃',
  };

  const notification = new Notification({ close, overlay, notificationContent, messages });
  const counter = new Counter({ current, count, increaseButton, decreaseButton, notification });
  counter.setupClickEvents();
  notification.setupClickEvents();
}

window.addEventListener('load', main);
