// const navbar = document.querySelector('.navbar');
// const navItems = document.querySelectorAll('.nav-item');
// const selectionIndicator = document.querySelector('.selection-indicator');

// function updateSelectionIndicator(activeItem) {
//   const itemRect = activeItem.getBoundingClientRect();
//   const navbarRect = navbar.getBoundingClientRect();
//   const offsetX = itemRect.left - navbarRect.left + navbar.scrollLeft;

//   selectionIndicator.style.transform = `translateX(${offsetX}px)`;
//   selectionIndicator.style.width = `${itemRect.width}px`;
// }

// function setActiveItem(item) {
//   navItems.forEach(nav => nav.classList.remove('active'));
//   item.classList.add('active');
//   updateSelectionIndicator(item);
// }

// navItems.forEach((item) => {
//   item.addEventListener('click', () => setActiveItem(item));
// });

// window.addEventListener('resize', () => {
//   const activeItem = document.querySelector('.nav-item.active');
//   if (activeItem) updateSelectionIndicator(activeItem);
// });

// window.addEventListener('DOMContentLoaded', () => {
//   const activeItem = document.querySelector('.nav-item.active');
//   if (activeItem) updateSelectionIndicator(activeItem);
// });

// Script para manejar el indicador de selección
      document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.nav-item');
        const indicator = document.querySelector('.selection-indicator');
        
        // IMPORTANTE: Esta función establecerá la posición inicial del indicador
        function updateIndicatorPosition() {
          const activeItem = document.querySelector('.nav-item.active');
          if (activeItem) {
            // Establecer el ancho basado en el elemento activo
            indicator.style.width = `${activeItem.offsetWidth - 20}px`;
            
            // Posicionar el indicador debajo del elemento activo
            indicator.style.left = `${activeItem.offsetLeft + activeItem.offsetWidth/2}px`;
            indicator.style.transform = 'translateX(-50%)';
          }
        }
        
        // Ejecutar inmediatamente al cargar la página
        updateIndicatorPosition();
        
        // Configurar eventos de clic para cada elemento de navegación
        navItems.forEach(item => {
          item.addEventListener('click', function(e) {
            // Prevenir comportamiento predeterminado del enlace
            e.preventDefault();
            
            // Eliminar la clase active de todos los elementos
            navItems.forEach(i => i.classList.remove('active'));
            
            // Añadir la clase active al elemento clicado
            this.classList.add('active');
            
            // Actualizar la posición del indicador
            updateIndicatorPosition();
            
            // Opcional: Navegación suave a la sección
            const href = this.querySelector('a').getAttribute('href');
            if (href && href.startsWith('#')) {
              const targetElement = document.querySelector(href);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
        });
        
        // Importante: Agregar un evento de redimensionamiento para mantener la posición durante cambios de tamaño
        window.addEventListener('resize', updateIndicatorPosition);
      });
