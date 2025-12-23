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