
var mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function sidebar_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function sidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

const galleryImages = Array.from(document.querySelectorAll('.gallery-item img')).map(img => img.src);

let currentIndex = 0;


function openModal(image, index) {
    currentIndex = index;
    document.getElementById('modalImage').src = image.src;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
}


function navigate(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    } else if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    document.getElementById('modalImage').src = galleryImages[currentIndex];
}