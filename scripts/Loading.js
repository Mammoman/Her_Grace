
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    document.body.classList.add('page-transition');

    // Redirect to the next page after the transition duration
    setTimeout(() => {
      window.location.href = 'Pictures.html';
    }, 2000); 
  }, 2000);
});
