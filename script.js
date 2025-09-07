// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Represents the <html> tag

// Function to set the theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save preference
}

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Detect system preference if no saved theme
    setTheme('dark');
} else {
    setTheme('light'); // Default to light
}

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});


// counter event functionality
let counterValue = 0;
const counterDisplay = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementBtn');
const decrementButton = document.getElementById('decrementBtn');
const resetButton = document.getElementById('resetBtn');

function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}   
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});
resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounterDisplay();
});


// FAQ section functionality
const faqItems = document.querySelectorAll('.faq-question');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            item.classList.remove('active');
        } else {
            answer.style.display = 'block';
            item.classList.add('active');
        }
    });
});


// Tab functionality
function openTab(evt, dogbreed) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(dogbreed).style.display = "block";
  evt.currentTarget.className += " active";
}