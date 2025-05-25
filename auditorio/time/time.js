// function updateCountdown() {
//   const eventDate = new Date('2025-06-09T09:00:00').getTime(); 
//   const now = new Date().getTime();
//   const timeLeft = eventDate - now;

//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


//   document.getElementById('days').textContent = String(days).padStart(2, '0');
//   document.getElementById('hours').textContent = String(hours).padStart(2, '0');
//   document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
//   document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
// }

// setInterval(updateCountdown, 1000); 
// updateCountdown(); 