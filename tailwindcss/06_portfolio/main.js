const menuBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');

const themeBtn = document.querySelector('#theme-btn');
const themeIcon = document.querySelector('#theme-btn i');
const mobileThemeBtn = document.querySelector('#mobile-theme-btn');
const mobileThemeIcon = document.querySelector('#mobile-theme-btn i');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});

function iconToggle(icon, prev, curr) {
  icon.classList.replace(prev, curr);
}

function initaliseIcon() {
  if (localStorage.theme === 'dark') {
    iconToggle(themeIcon, 'fa-moon', 'fa-sun');
    iconToggle(mobileThemeIcon, 'fa-moon', 'fa-sun');
  } else {
    iconToggle(themeIcon, 'fa-sun', 'fa-moon');
    iconToggle(mobileThemeIcon, 'fa-sun', 'fa-moon');
  }
}

//initialise darkmode based on the system
function initialiseTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    iconToggle(themeIcon, 'fa-moon', 'fa-sun');
    iconToggle(mobileThemeIcon, 'fa-moon', 'fa-sun');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    iconToggle(themeIcon, 'fa-sun', 'fa-moon');
    iconToggle(mobileThemeIcon, 'fa-sun', 'fa-moon');
    localStorage.theme = 'light';
  }
}

function darkToggle(node) {
  const isDark = document.documentElement.classList.toggle('dark');

  if (isDark) {
    node.classList.replace('fa-moon', 'fa-sun');
    localStorage.theme = 'dark';
  } else {
    node.classList.replace('fa-sun', 'fa-moon');
    localStorage.theme = 'light';
  }
}

initialiseTheme();
themeBtn.addEventListener('click', () => darkToggle(themeIcon));
mobileThemeBtn.addEventListener('click', () => darkToggle(mobileThemeIcon));
