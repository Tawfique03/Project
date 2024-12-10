// Handle logout confirmation
document.getElementById("confirm-logout").addEventListener("click", function () {
  const modal = document.querySelector(".logout-modal");

  // Animate modal fade-out
  modal.style.animation = "fade-out 0.5s ease forwards";

  setTimeout(() => {
      // Redirect to server logout route and invalidate the session
      window.location.href = "/logout"; // Replace with your server's logout endpoint
  }, 500);
});

// Handle logout cancellation
document.getElementById("cancel-logout").addEventListener("click", function () {
  const modal = document.querySelector(".logout-modal");

  // Shake animation for feedback
  modal.style.animation = "shake 0.5s ease";

  setTimeout(() => {
      modal.style.animation = ""; // Reset animation for reusability
      alert("Logout canceled!");
  }, 500);
});

// Prevent back navigation after logout
(function preventBackNavigation() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
  };
})();
