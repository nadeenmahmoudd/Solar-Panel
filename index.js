
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.li a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default behavior if the links don't navigate
            event.preventDefault();

            // Remove 'active' class from all links
            navbarLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            event.target.classList.add('active');
        });
    });
});
// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll(".card-image");

images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.getElementById("menu-icon");
//     const navLinks = document.getElementById("nav-links");

//     menuIcon.addEventListener("click", function() {
//         navLinks.classList.toggle("show");
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function() {
        console.log("Menu icon clicked");
        navLinks.classList.toggle("show");
    });
});
