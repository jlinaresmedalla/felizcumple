var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 0,
    cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 2,
        slideShadows: true,
    },
    on: {
        slideChange: function () {
            // Check if it's the last slide (index 7 or greater)
            if (this.activeIndex >= 7) {
                triggerConfetti();
            }
        }
    }
});

document.getElementById('replay-btn').addEventListener('click', () => {
    swiper.slideTo(0);
});

function triggerConfetti() {
    // Simple confetti burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Continuous random confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

// Background Stars Logic
// Background Stars Logic removed as per request
const starContainer = document.getElementById('star-container');
const starCount = 200; 
const shootingStarCount = 15; 

// Create static twinkling stars
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1; // 1px to 3px
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${duration}s`);
    star.style.animationDelay = `${delay}s`;
    
    starContainer.appendChild(star);
}

// Create shooting stars
for (let i = 0; i < shootingStarCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star', 'shooting');
    
    // Random start positions
    const top = Math.random() * 50; 
    const left = Math.random() * 100;
    
    const delay = Math.random() * 10; 
    const duration = Math.random() * 1 + 2; // 2s - 3s
    
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    
    starContainer.appendChild(star);
}
