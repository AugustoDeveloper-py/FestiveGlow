 // Crear estrellas
 const stars = document.querySelector('.stars');
 for (let i = 0; i < 50; i++) {
   const star = document.createElement('div');
   star.className = 'star';
   star.style.left = Math.random() * 100 + '%';
   star.style.top = Math.random() * 100 + '%';
   star.style.animationDelay = Math.random() * 1 + 's';
   stars.appendChild(star);
 }

 // Crear regalos cayendo
 setInterval(() => {
   const gift = document.createElement('div');
   gift.className = 'gift';
   gift.style.left = Math.random() * 100 + '%';
   document.body.appendChild(gift);
   
   // Eliminar el regalo después de la animación
   setTimeout(() => {
     gift.remove();
   }, 2000);
 }, 1000);