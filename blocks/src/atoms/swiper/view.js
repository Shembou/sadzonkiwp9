document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".swiper-wrapper")
    if (!wrapper) return;

    const figures = wrapper.querySelectorAll("figure");
    figures.forEach(figure => {
        if (figure.classList.contains("swiper-slide")) return;
        figure.classList.add("swiper-slide");
    })
    const swiper = new Swiper('.swiper-container', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 40,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
        },
        initialSlide: 3,
    });
});