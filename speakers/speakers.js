const central = document.getElementById('centralSpeaker');
const thumbnails = document.querySelectorAll('.mini-speaker');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseenter', () => {
    const name = thumbnail.dataset.name || '';
    const role = thumbnail.dataset.role || '';
    const img = thumbnail.src;

    central.innerHTML = `
      <div class="big-speaker">
        <img src="${img}" alt="${name}" />
        <div class="speaker-info">
          <h4>${name}</h4>
          <p>${role}</p>
        </div>
      </div>
    `;
  });


  thumbnail.addEventListener('mouseleave', () => {
    central.innerHTML = `
    <img src="assets/images/LOGO2.png" alt="Launch Mastery Logo" class="logo-image" />
  `;
  });

});
