function confirmAge() {
  localStorage.setItem("ageConfirmed", "true"); // Stocke la confirmation
  document.getElementById("ageModal").style.display = "none";
  document.getElementById("content").style.display = "block";
}

function denyAccess() {
  alert("Désolé, vous n'avez pas l'âge requis.");
  window.location.href = "https://youtu.be/fYE6Op49m1Y/";
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("ageConfirmed") === "true") {
      document.getElementById("ageModal").style.display = "none";
      document.getElementById("content").style.display = "block";
  } else {
      document.getElementById("ageModal").style.display = "flex";
      document.getElementById("content").style.display = "none";
  }
});


const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
      this.style.transition = "all 0.3s ease";
      const overlay = document.createElement("div");
      overlay.className = "movie-overlay";
      overlay.innerHTML = `
                <div class="movie-overlay-buttons">
                    <button class="movie-btn"><i class="fas fa-play"></i></button>
                    <button class="movie-btn"><i class="fas fa-heart"></i></button>
                </div>
            `;
      if (!this.querySelector(".movie-overlay")) {
        this.appendChild(overlay);
      }
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
      const overlay = this.querySelector(".movie-overlay");
      if (overlay) {
        overlay.remove();
      }
    });
  });




  const plusFilmsButtons = document.querySelectorAll(".btn-danger.px-4");
  plusFilmsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Chargement de plus de films");
    });
  });



/***************************************************************************************************************************/


  function loadTrailer(url) {
      let trailerContainer = document.getElementById('trailerContainer');
      let trailerFrame = document.getElementById('trailerFrame');
      
      trailerFrame.src = url;
      trailerContainer.classList.add('show');
  }

  function closeTrailer() {
      let trailerContainer = document.getElementById('trailerContainer');
      trailerContainer.classList.remove('show');
      
      // Petite code pour éviter que le son continue après fermeture
      setTimeout(() => {
          document.getElementById('trailerFrame').src = "";
      }, 500);
  }
  
  function loadTrailer(url) {
          document.getElementById('trailerFrame').src = url;
      }

  

src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"