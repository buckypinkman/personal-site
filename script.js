(function () {
  'use strict';

  // ─── Active Section Highlight via Intersection Observer ───

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.page-nav nav a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.remove('active');
            });
            var activeLink = document.querySelector(
              '.page-nav nav a[href="#' + entry.target.id + '"]'
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

  // ─── Project Category Filter ───

  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('filter-btn--active');
        });
        btn.classList.add('filter-btn--active');

        var category = btn.getAttribute('data-filter');

        projectCards.forEach(function (card) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
})();
