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
            // Check if it's the last slide (index 9 or greater)
            if (this.activeIndex >= 9) {
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
/*
const starContainer = document.getElementById('star-container');
const starCount = 300; // Even more static stars
const shootingStarCount = 100; // Heavy rain!

// Create static twinkling stars
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    
    starContainer.appendChild(star);
}

// Create shooting stars with intense rain parameters
for (let i = 0; i < shootingStarCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star', 'shooting');
    
    // Start from a MASSIVE range to ensure diagonal coverage across the whole screen.
    // Since they move -X and +Y, stars starting far right (300%) will cross the visible area.
    const left = Math.random() * 350 - 50; // -50% to 300%
    const top = Math.random() * 100 - 50; // -50% to 50%
    
    // Faster and more frequent rain
    const delay = Math.random() * 5; 
    const duration = Math.random() * 1 + 1; // 1s - 2s
    
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;
    
    starContainer.appendChild(star);
}
*/
