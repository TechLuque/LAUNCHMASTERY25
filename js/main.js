// const modal = document.getElementById('modal');
// const openBtn = document.getElementById('openModalBtn');
// const closeBtn = document.getElementById('closeModalBtn');

// openBtn.addEventListener('click', () => {
//   modal.classList.remove('hidden');
// });

// closeBtn.addEventListener('click', () => {
//   modal.classList.add('hidden');
// });

// window.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.classList.add('hidden');
//   }
// });

// Countdown timer
// function updateCountdown() {
//     const eventDate = new Date('2025-06-15T09:00:00').getTime();
//     const now = new Date().getTime();
//     const timeLeft = eventDate - now;

//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     document.getElementById('days').textContent = String(days).padStart(2, '0');
//     document.getElementById('hours').textContent = String(hours).padStart(2, '0');
//     document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
//     document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();