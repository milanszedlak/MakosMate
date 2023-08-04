const carousel = document.querySelector('.carousel-thumbnails');
const scroller = document.querySelector('.thumbnails__scroller');

const thumbnails = document.querySelectorAll('.thumbnails__image');
const topbutton = document.getElementById('scrollTopButton');


scroller.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.thumbnails__image')) {
        const index = [...thumbnails].indexOf(target);
        carousel.goToSlide(index);
    }
});

carousel.addEventListener('sl-slide-change', e => {
    const slideIndex = e.detail.index;

    [...thumbnails].forEach((thumb, i) => {
        thumb.classList.toggle('active', i === slideIndex);
        if (i === slideIndex) {
            thumb.scrollIntoView({
                block: 'nearest'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollTopButton");

    // Show the button when the user scrolls down 20px from the top of the document
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Function to scroll back to the top of the page when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        // For smooth scrolling, use behavior: "smooth" in the options
        window.scrollTo({
            top: -100,
            behavior: "smooth"
        });
    });
});