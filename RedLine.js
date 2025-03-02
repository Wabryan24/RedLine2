function confirmAge() {
    localStorage.setItem("ageConfirmed", "true"); // Stocke la confirmation
    document.getElementById("ageModal").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function denyAccess() {
    alert("Désolé, vous n'avez pas l'âge requis.");
    window.location.href = "https://ecole-it.com/";
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

/***************************************************************************************************************************/

