// ********** Navbar ************

export function createNavbar() {
  const nav = document.createElement('nav');
  nav.id = 'nav';
  nav.className = 'nav';

  const navCenter = document.createElement('div');
  navCenter.className = 'nav__center';

  // Nav header
  const navHeader = document.createElement('div');
  navHeader.className = 'nav__header';

  const logoLink = document.createElement('a');
  logoLink.href = '../index.html?skipIntro';

  const logoImg = document.createElement('img');
  logoImg.src = '../shared/logo.png';
  logoImg.className = 'nav__logo';
  logoImg.alt = 'logo';

  logoLink.appendChild(logoImg);
  navHeader.appendChild(logoLink);

  // Slogan
  const sloganDiv = document.createElement('div');
  sloganDiv.className = 'nav__slogan';

  const sloganP = document.createElement('p');
  sloganP.textContent = "Your limitation - it's only your imagination";

  sloganDiv.appendChild(sloganP);
  
  // Links
  const containerLinksDiv = document.createElement('div');
  containerLinksDiv.className = 'nav__container-links';

  const ulLinks = document.createElement('ul');
  ulLinks.className = 'nav__links';

  const links = [
    { text: 'Home', href: '../index.html?skipIntro' },
    { text: 'Video', href: '../video/video.html' },
    { text: 'Audio', href: '../audio/audio.html' },
    { text: 'About Us', href: '../about/about.html' }
  ];

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    li.appendChild(a);
    ulLinks.appendChild(li);
  });

  // Add the close button for the menu
  const closeButton = document.createElement('button');
  closeButton.className = 'nav__close-btn btn';
  const closeIcon = document.createElement('i');
  closeIcon.className = 'fas fa-times';
  closeButton.appendChild(closeIcon);
  ulLinks.appendChild(closeButton);
  
  // Append elements to containerLinksDiv
  containerLinksDiv.appendChild(ulLinks);

  // Toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'nav__toggle btn';

  const toggleIcon = document.createElement('i');
  toggleIcon.className = 'fas fa-bars';

  toggleButton.appendChild(toggleIcon);

  // Append elements to navCenter
  navCenter.appendChild(navHeader);
  navCenter.appendChild(sloganDiv);
  navCenter.appendChild(containerLinksDiv);
  navCenter.appendChild(toggleButton);

  // Append navCenter to nav
  nav.appendChild(navCenter);

  return nav;
}

// ********** Toggle Links ************

function initNavToggle() {
  const navToggle = document.querySelector('.nav__toggle');
  const closeBtn = document.querySelector('.nav__close-btn');
  const navLinks = document.querySelector('.nav__links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
  });

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show-links');
  });
}

// ********** Fixed Navbar ************

function initFixedNavbar() {
  const navbar = document.getElementById('nav');
  const topLink = document.querySelector('.top-link');

  function handleScroll() {
    navbar.classList.toggle('fixed__nav', window.scrollY > 0);
    const scrollHeight = window.scrollY;

    // Setup back to top link
    if (scrollHeight > 500) {
      topLink.classList.add('show-link');
    } else {
      topLink.classList.remove('show-link');
    }
  }

  window.addEventListener('scroll', handleScroll);
}


document.addEventListener('DOMContentLoaded', () => {
  // Initialize the navbar toggle and fixed navbar functionality
  createNavbar();
  initNavToggle();
  initFixedNavbar();


  // ***** Add 'selected' class to the opened link *****

  // Get all the Navbar links
  const navLinks = document.querySelectorAll('.nav__links a');

  // Get the current page's URL
  const currentURL = window.location.pathname;

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    // Removing '../' and '?skipIntro' from the link href
    const linkHrefSubstr = linkHref.substring(3);
    const linkHrefIndexSubstr = linkHref.replace(/\.\.\//g, '').replace(/\?skipIntro/g, '');

    // Check if the currentURL includes the linkHref after removing '../' and '?skipIntro'
    if ( currentURL.includes(linkHrefSubstr) || currentURL.includes(linkHrefIndexSubstr)) {
      link.classList.add('selected');
    } 
  });
});

// ********** Footer **********

export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  // Footer Items
  const footerItems = document.createElement('div');
  footerItems.className = 'footer__items';

  // Logo
  const logoDiv = document.createElement('div');
  const logoLink = document.createElement('a');
  logoLink.href = '../index.html?skipIntro';
  const logoImg = document.createElement('img');
  logoImg.src = '../shared/logo.png';
  logoImg.className = 'footer__logo';
  logoImg.alt = 'logo';
  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);
  footerItems.appendChild(logoDiv);

  // Footer Links
  const navList = document.createElement('ul');
  navList.className = 'footer__nav';

  const navLinks = [
    { text: 'Home', href: '../index.html?skipIntro' },
    { text: 'Video', href: '../video/video.html' },
    { text: 'Audio', href: '../audio/audio.html' },
    { text: 'About Us', href: '../about/about.html' },
  ];

  navLinks.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    navList.appendChild(li);
  });

  footerItems.appendChild(navList);

  // Footer Social
  const socialDiv = document.createElement('div');
  socialDiv.className = 'footer__social';

  const socialText = document.createElement('p');
  socialText.textContent = 'Follow us on:';
  socialDiv.appendChild(socialText);

  const socialIconsDiv = document.createElement('div');
  socialIconsDiv.className = 'footer__social-icons';

  const socialLinks = [
    { href: 'https://facebook.com/', icon: 'fa-brands fa-facebook' },
    { href: 'https://instagram.com/', icon: 'fa-brands fa-instagram' },
    { href: 'https://twitter.com/', icon: 'fa-brands fa-twitter' },
    { href: 'https://linkedin.com/', icon: 'fa-brands fa-linkedin' },
  ];

  socialLinks.forEach((link) => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = link.icon;
    socialIconsDiv.appendChild(a);
  });

  socialDiv.appendChild(socialIconsDiv);
  footerItems.appendChild(socialDiv);

  footer.appendChild(footerItems);

  // Select date
  const currentYear = new Date().getFullYear();

  // Footer Rights
  const footerRights = document.createElement('div');
  footerRights.className = 'footer__rights';

  const rightsText = document.createElement('p');
  rightsText.innerHTML = `Copyright &copy; InspireMe <span id='date'>${currentYear}</span>. All rights reserved`;
  footerRights.appendChild(rightsText);

  footer.appendChild(footerRights);

  // Return the footer element
  return footer;
}
