const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-item');
const selectionIndicator = document.querySelector('.selection-indicator');

function updateSelectionIndicator(activeItem) {
  const itemRect = activeItem.getBoundingClientRect();
  const navbarRect = navbar.getBoundingClientRect();
  const offsetX = itemRect.left - navbarRect.left + navbar.scrollLeft;

  selectionIndicator.style.transform = `translateX(${offsetX}px)`;
  selectionIndicator.style.width = `${itemRect.width}px`;
}

function setActiveItem(item) {
  navItems.forEach(nav => nav.classList.remove('active'));
  item.classList.add('active');
  updateSelectionIndicator(item);
}

navItems.forEach((item) => {
  item.addEventListener('click', () => setActiveItem(item));
});

window.addEventListener('resize', () => {
  const activeItem = document.querySelector('.nav-item.active');
  if (activeItem) updateSelectionIndicator(activeItem);
});

window.addEventListener('DOMContentLoaded', () => {
  const activeItem = document.querySelector('.nav-item.active');
  if (activeItem) updateSelectionIndicator(activeItem);
});
