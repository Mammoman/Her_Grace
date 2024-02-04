
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    // Add a class to initiate the transition
    document.body.classList.add('page-transition');

    // Redirect to the next page after the transition duration
    setTimeout(() => {
      window.location.href = '/Pictures.html';
    }, 2000); // This value should match the animation duration
  }, 2000);
});
