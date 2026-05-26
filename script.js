(function () {
  'use strict';

  // ─── Mobile Nav Toggle ───

  var toggleBtn = document.querySelector('.navbar__toggle');
  var navLinks = document.querySelector('.navbar__links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('navbar__links--open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.addEventListener('click', function () {
      navLinks.classList.remove('navbar__links--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // ─── Active Nav Highlight via Intersection Observer ───

  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.navbar__links a');

  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navAnchors.forEach(function (link) {
              link.classList.remove('active');
            });
            var activeLink = document.querySelector(
              '.navbar__links a[href="#' + entry.target.id + '"]'
            );
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
