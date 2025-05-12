const central = document.getElementById('centralSpeaker');
const thumbnails = document.querySelectorAll('.mini-speaker');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseenter', () => {
    const img = document.createElement('img');
    img.src = thumbnail.src;
    img.alt = thumbnail.alt;
    img.className = "big-speaker";
    central.innerHTML = '';
    central.appendChild(img);
  });

  thumbnail.addEventListener('mouseleave', () => {
    central.innerHTML = '    <img src="assets/images/LOGO2.png" alt="Launch Mastery Logo" class="logo-image" />';
  });
});
