// script.js

const menuHeaders = document.querySelectorAll('.menu-parent');

menuHeaders.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
  });
});

const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.menu');
const bodyContent = document.querySelector('.body');

function checkMenuCollapse() {
  const headerBottom = document.querySelector('.header').getBoundingClientRect().bottom;
  const bodyTop = bodyContent.getBoundingClientRect().top;
  const distance = bodyTop - headerBottom;

  if (distance < 50) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

// Listen for window resize events to adjust menu visibility
window.addEventListener('resize', () => {
  // Only call the checkMenuCollapse function if the window width is greater than a certain value
  if (window.innerWidth < 1100) {
    checkMenuCollapse();
  } else {
    menu.style.display = 'block';    
  }
});

// Toggle the menu when the menu button is clicked
menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

// Join newsletter
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const joinButton = document.getElementById('join-button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (isValidEmail(emailInput.value)) {
    const formData = new FormData(form);

    try {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Thank you for joining our newsletter!');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  } else {
    alert('Please enter a valid email.');
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

