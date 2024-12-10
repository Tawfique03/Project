
document.getElementById("confirm-logout").addEventListener("click", function () {
  const modal = document.querySelector(".logout-modal");

 
  modal.style.animation = "fade-out 0.5s ease forwards";

  setTimeout(() => {
      
      window.location.href = "/logout"; 
  }, 500);
});


document.getElementById("cancel-logout").addEventListener("click", function () {
  const modal = document.querySelector(".logout-modal");

  
  modal.style.animation = "shake 0.5s ease";

  setTimeout(() => {
      modal.style.animation = ""; 
      alert("Logout canceled!");
  }, 500);
});


(function preventBackNavigation() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
  };
})();
