window.addEventListener('resize', function() {
  adjustFormLayout();
});

function adjustFormLayout() {
  var form = document.querySelector('.form');
  var windowWidth = window.innerWidth;

  if (windowWidth <= 600) {
  
    form.style.width = '100%';
  } else {
  
    form.style.width = '400px';
  }
}

adjustFormLayout();
