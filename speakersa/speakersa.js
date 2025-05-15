document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".speaker-name");
  const descriptionElement = document.querySelector(".speaker-description");

  const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 0,
    speed: 500,
    loop: true,
    mousewheel: { invert: false },
    on: {
      transitionEnd: function () {
        setTimeout(() => {
          const activeSlide = document.querySelector(".swiper-slide-active");
          const newDescription = activeSlide?.getAttribute("data-description") || "";
          const newName = activeSlide?.querySelector("h2")?.textContent || "";

          nameElement.textContent = newName;
          descriptionElement.textContent = newDescription;
        }, 50);
      }
    }
  });

  // Inicializar valores
  const initialSlide = document.querySelector(".swiper-slide-active");
  const initialDesc = initialSlide?.getAttribute("data-description") || "";
  const initialName = initialSlide?.querySelector("h2")?.textContent || "";

  nameElement.textContent = initialName;
  descriptionElement.textContent = initialDesc;
});
