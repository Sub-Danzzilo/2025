// Declare variable
const starsContainer = document.getElementById('stars');
const starCount = 300;

// Generate star
for (let i = 1; i <= starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position and animation
    star.style.left = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    
    // Random starting position (already spread throughout the page)
    const startY = Math.random() * 100; // Random vertical position from 0% to 100%
    star.style.top = startY + 'vh';
    
    // Random animation duration
    star.style.animationDuration = (Math.random() * 30 + 20) + 's';
    
    // Random color
    const colors = ['#ffffff', '#f8f8ff', '#e6e6fa', '#b0e0e6'];
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Set custom animation
    star.style.animation = `moveUp ${star.style.animationDuration} linear infinite ${star.style.animationDelay}`;
    
    // Set initial opacity
    star.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
    
    starsContainer.appendChild(star);
}

// Smooth scroll dengan easing function
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Jika target adalah home
            if (targetId === '#home-page') {
                smoothScrollTo(0, 800);
                return;
            }
            
            // Jika target adalah section lain
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Hitung posisi dengan offset untuk header
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                smoothScrollTo(targetPosition, 800);
            }
        });
    });
    
    // Fungsi smooth scroll custom dengan easing
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function (easeInOutCubic)
            const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            window.scrollTo(0, startPosition + (distance * ease));
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
});