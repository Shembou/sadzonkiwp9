document.addEventListener('DOMContentLoaded', () => {
    /** @type {NodeListOf<HTMLElement>} */
    const sections = document.querySelectorAll('section');
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                section.classList.add('animate-section');

                const children = section.querySelectorAll(':scope >*');
                if (!children) return;
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-child');
                    }, index * 250);
                });

                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => sectionObserver.observe(section));
});
