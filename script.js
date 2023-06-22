window.addEventListener('scroll', function() {
    var secondaryHeader = document.querySelector('.page-nav');
    var primaryHeader = document.querySelector('.primary-nav');
    var topOffset = secondaryHeader.offsetTop - 30;

    if (window.pageYOffset > topOffset) {
      primaryHeader.classList.add('nav-flex-display');
    } else {
      primaryHeader.classList.remove('nav-flex-display');
    }
  });