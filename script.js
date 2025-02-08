// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
      }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
      }
  });
});

// Array of romantic and motivational messages from Manish Chhetri
const messages = [
  "Dear beautiful, this is Manish Chhetri, and your smile makes my world brighter every day! ❤️",
  "From Manish: Every moment I spend thinking about you feels like a beautiful dream! 💕",
  "Hey there! Manish here, just wanted to say you make my heart skip a beat! 💗",
  "Manish Chhetri's message for you: Your kindness and beauty inspire me endlessly! 🌹",
  "A note from Manish: You're the most amazing person I've ever met! ❤️",
  "Manish here: Just thinking about you makes my whole day better! 💝",
  "Dear crush, Manish wants you to know you're incredibly smart and amazing! 🌺",
  "Message from Manish Chhetri: Your presence in my life would be the greatest gift! 🎁",
  "Manish's thought: Every love story is beautiful, but I hope ours could be the best! 💖",
  "From Manish with love: You're the reason I believe in magic and love! 💕"
];

// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 5 + 10 + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.3;
  heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
      heart.remove();
  }, 15000);
}

// Create hearts periodically
setInterval(createHeart, 300);

// Function to display random message
function displayRandomMessage() {
  const messageElement = document.getElementById('message');
  const randomIndex = Math.floor(Math.random() * messages.length);

  messageElement.style.opacity = 0;

  setTimeout(() => {
      messageElement.textContent = messages[randomIndex];
      messageElement.style.opacity = 1;
  }, 300);
}

// Initialize first message
displayRandomMessage();

// Add click event listener to button
document.getElementById('newMessage').addEventListener('click', () => {
  displayRandomMessage();
});