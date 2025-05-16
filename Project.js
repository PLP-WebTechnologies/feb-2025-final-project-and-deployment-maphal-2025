// Highlight the active page in navigation
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });
});

// Form Validation on Contact Page
function validateForm(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    alert("Message sent successfully!");
    return true;
}

// Attach validation to form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});


        const images = ["Car1.jpg", "House 2.jpg", "Investment 2.jpg", "Investment 1.jpg"];
        let currentIndex = 0;

        function updateImage() {
            const galleryImage = document.getElementById("gallery-image");
            galleryImage.style.opacity = 0;
            setTimeout(() => {
                galleryImage.src = images[currentIndex];
                galleryImage.style.opacity = 1;
            }, 300);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
