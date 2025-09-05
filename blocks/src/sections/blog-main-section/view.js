function removeOverflowHiddenFromMain() {
    const main = document.querySelector("main");
    if (!main) return;
    main.style.overflow = "visible"
}

document.addEventListener("DOMContentLoaded", () => {
    /**@type {HTMLSelectElement | null} */
    const input = document.querySelector("select[name='orderby']");
    if (!input) return
    input.addEventListener('change', function () {
        const params = new URLSearchParams(window.location.search);

        params.set('orderby', this.value);

        window.location.search = params.toString();
    })

    document.querySelectorAll('input[name="category[]"]').forEach(el => {
        el.addEventListener('change', () => {
            document.getElementById('paged-field').value = 1;
        });
    });

    removeOverflowHiddenFromMain()
})
