document.addEventListener("DOMContentLoaded", () => {

    function generate_thumb_swiper() {
        const element_to_append_child = document.querySelector("div.wp-block-atoms-thumbs-swiper");
        if (!element_to_append_child) return;

        const swiper_wrapper = get_swiper();
        if (!swiper_wrapper) return;

        const cloned_wrapper = swiper_wrapper.cloneNode(true);

        const thumb_swiper = document.createElement("div");
        thumb_swiper.className = "swiper thumb-swiper";
        thumb_swiper.setAttribute("thumbsSlider", "");

        thumb_swiper.appendChild(cloned_wrapper);

        element_to_append_child.appendChild(thumb_swiper);
    }

    function get_swiper() {
        const parent_swiper = document.querySelector(".thumbs-parent-swiper");
        if (!parent_swiper) return null;
        return parent_swiper.querySelector(".swiper-wrapper");
    }

    function append_swiper_slides() {
        const wrappers = document.querySelectorAll(".swiper-wrapper");
        wrappers.forEach(div => {
            const figures = div.querySelectorAll("figure");
            figures.forEach(figure => {
                if (!figure.classList.contains("swiper-slide")) {
                    figure.classList.add("swiper-slide");
                }
            });
        });
    }

    append_swiper_slides();
    generate_thumb_swiper();

    var swiper_thumb = new Swiper(".thumb-swiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var main_swiper = new Swiper(".thumbs-parent-swiper", {
        spaceBetween: 10,
        grabCursor: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_thumb,
        },
    });
});
