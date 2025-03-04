document.addEventListener("DOMContentLoaded", function () {
  var heroCarousel = document.getElementById("heroCarousel");
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      wrap: true,
      keyboard: true,
      pause: "hover",
    });
  }

  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const filterCategory = this.textContent.toLowerCase();
      if (filterCategory === "all") {
        document.querySelectorAll(".movie-card").forEach((card) => {
          card.closest(".col-md-2").style.display = "block";
        });
      } else {
      }
    });
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

/*************************-- Cette barre de recherche :
*Enregistre toutes les recherches passées (historique).
*Empêche les doublons dans l'historique.
*Affiche automatiquement la dernière recherche dans le champ. -- */
  document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector("form.d-flex");
    const searchInput = searchForm?.querySelector("input");
  
    if (searchForm && searchInput) {
      // Charger l'historique des recherches (si disponible)
      let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  
      // Pré-remplir avec la dernière recherche si disponible
      if (searchHistory.length > 0) {
        searchInput.value = searchHistory[searchHistory.length - 1]; // Dernière recherche
      }
  
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
  
        if (searchTerm) {
          // Ajouter la nouvelle recherche en évitant les doublons
          if (!searchHistory.includes(searchTerm)) {
            searchHistory.push(searchTerm);
          }
  
          // Stocker en localStorage
          localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  
          console.log(`Recherche enregistrée : ${searchTerm}`);
          alert(`🔍 Recherche de : ${searchTerm}\nHistorique mis à jour !`);
        }
      });
    }
  });
  
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      alert("Connexion réussie! (Simulation)");
      const loginModalEl = document.getElementById("loginModal");
      if (loginModalEl) {
        jQuery("#loginModal").modal("hide");
      }
    });
  }
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas!");
        return;
      }
      alert("Inscription réussie! (Simulation)");
      const registerModalEl = document.getElementById("registerModal");
      if (registerModalEl) {
        jQuery("#registerModal").modal("hide");
      }
    });
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = this.querySelectorAll("input, textarea");
      let isValid = true;
      inputs.forEach((input) => {
        if (input.required && !input.value.trim()) {
          isValid = false;
          input.classList.add("is-invalid");
        } else {
          input.classList.remove("is-invalid");
        }
      });
      if (isValid) {
        alert("Votre message a été envoyé avec succès! (Simulation)");
        this.reset();
      } else {
        alert("Veuillez remplir tous les champs obligatoires.");
      }
    });
  }

  const subscribeBtn = document.querySelector(".subscribe-section button");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      const emailInput = document.querySelector(".subscribe-section input");
      const email = emailInput.value.trim();
      if (!email) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
      alert("Merci de vous être abonné! (Simulation)");
      emailInput.value = "";
    });
  }

  const scrollToTop = document.querySelector(".scroll-to-top");
  if (scrollToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTop.classList.add("show");
      } else {
        scrollToTop.classList.remove("show");
      }
    });
    scrollToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const plusFilmsButtons = document.querySelectorAll(".btn-danger.px-4");
  plusFilmsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Chargement de plus de films... (Fonctionnalité à implémenter)");
    });
  });

  document.addEventListener("click", function (e) {
    if (
      e.target.closest(".movie-btn") &&
      e.target.closest(".movie-btn").querySelector(".fa-play")
    ) {
      e.preventDefault();
      const movieCard = e.target.closest(".movie-card");
      const movieTitle = movieCard.nextElementSibling
        ? movieCard.nextElementSibling.textContent
        : "ce film";
      alert(
        "Lecture de la bande-annonce de " +
          movieTitle +
          " (Fonctionnalité à implémenter)"
      );
    }
  });
  document.addEventListener("click", function (e) {
    if (
      e.target.closest(".movie-btn") &&
      e.target.closest(".movie-btn").querySelector(".fa-heart")
    ) {
      e.preventDefault();
      const movieCard = e.target.closest(".movie-card");
      const movieTitle = movieCard.nextElementSibling
        ? movieCard.nextElementSibling.textContent
        : "ce film";
      alert(
        movieTitle +
          " a été ajouté à vos favoris (Fonctionnalité à implémenter)"
      );
    }
  });


document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
        .movie-overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex; justify-content: center; align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .movie-card:hover .movie-overlay { opacity: 1; }
        .movie-overlay-buttons { display: flex; gap: 10px; }
        .movie-btn {
            width: 40px; height: 40px;
            border-radius: 50%;
            background-color: #ff0000; color: white;
            border: none;
            display: flex; justify-content: center; align-items: center;
            transition: transform 0.2s ease;
        }
        .movie-btn:hover { transform: scale(1.1); }
        .scroll-to-top {
            position: fixed;
            bottom: 20px; right: 20px;
            width: 40px; height: 40px;
            border-radius: 50%;
            background-color: #ff0000; color: white;
            border: none;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        .scroll-to-top.show { opacity: 1; visibility: visible; }
        .is-invalid { border-color: #dc3545 !important; }
    `;
  document.head.appendChild(style);
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


      /*****************************************************************************************************/

      document.addEventListener('DOMContentLoaded', function() {

        // Données de films 
        const moviesData = [
            { title: "Assassin's Creed 3", year: "2016", image: "img/zoolander-2001-comedie.jpg" },
            // ... ajoutez d'autres films ici ...
            { title: "Film 2", year: "2023", image: "img/hostel-2005-thriller.jpg"},
            { title: "Film 3", year: "2021", image: "img/shutterisland-2010-thriller.jpg"},
            { title: "Film 4", year: "2019", image: "img/Survivestyle5-2004-comedie.jpg"},
            { title: "Film 5", year: "2023", image: "img/swissarmyman-2016-comedie.jpg"},
            { title: "Film 6", year: "2023", image: "img/inception-2010-scifi.jpg"},
            { title: "Film 7", year: "2023", image: "img/thefall-200


  

src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"