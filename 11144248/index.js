window.addEventListener("scroll", function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > navbar.offsetTop) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-100px';
    }
  });
  

  function expandCard() {
    var educationCard = document.querySelector('.education-card');
    educationCard.style.transform = 'scale(1.0)';
}
