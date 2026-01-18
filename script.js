const scriptURL = 'https://script.google.com/macros/s/AKfycbyhg_fuhgz3wvhEU6T61hjQyRCjQN46_FSh3PhPSOWMLD3whTjUeNfYm5BH-P2ZJk8n/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Visual feedback that it's sending
  const btn = form.querySelector('.btn');
  const originalBtnText = btn.value;
  btn.value = "Sending...";
  btn.disabled = true;

  fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors'})
    .then(response => {
        // Note: With 'no-cors', we cannot read the response, so we just assume success.
        alert("Message sent!");
        form.reset();
        btn.value = originalBtnText;
        btn.disabled = false;
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Error sending message. Please try again.");
        btn.value = originalBtnText;
        btn.disabled = false;
    });
});

// Mobile menu toggle (if needed later)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Reveal Animation
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300; // Trigger animation a bit before the section is fully in view
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
    });
};
