// Create stars
const starsContainer = document.querySelector('.stars');
const numStars = 50; // Adjust the number of stars as needed

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  starsContainer.appendChild(star);
}
