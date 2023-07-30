const carousel = document.querySelector('.carousel-thumbnails');
const scroller = document.querySelector('.thumbnails__scroller');
const thumbnails = document.querySelectorAll('.thumbnails__image');

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