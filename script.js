window.addEventListener('scroll', function() {
    var secondaryHeader = document.querySelector('.page-nav');
    var topOffset = secondaryHeader.offsetTop;

    if (window.pageYOffset > topOffset) {
      secondaryHeader.classList.add('sticky');
    } else {
      secondaryHeader.classList.remove('sticky');
    }
  });