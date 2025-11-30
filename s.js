// Smooth scroll to features section
function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}
// OPEN MODAL
function openModal(id){
    document.getElementById(id).style.display = "block";
}

// CLOSE MODAL
function closeModal(id){
    document.getElementById(id).style.display = "none";
}

// CLOSE MODAL WHEN CLICKING OUTSIDE
window.onclick = function(event){
    document.querySelectorAll(".modal").forEach(modal => {
        if(event.target == modal){
            modal.style.display = "none";
        }
    });
};

// FACULTY SEARCH FILTER
function filterFaculty(){
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("faculty-card");

    for(let card of cards){
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    }
}
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("form-status").innerText = 
        "Your message has been sent successfully! ✔";

    document.getElementById("form-status").style.color = "green";

    this.reset();
});
