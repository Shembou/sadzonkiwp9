document.addEventListener("DOMContentLoaded", () => {
    const faq = document.getElementsByName("faq");
    if (!faq) return;

    faq.forEach((element) => {
        const heading = element.querySelector("h1,h2,h3,h4,h5,h6");
        if (heading) {
            const summary = document.createElement("summary");

            const wrapper = document.createElement("span");
            wrapper.style.display = "inline-flex";
            wrapper.style.alignItems = "center";
            wrapper.style.gap = "0.5rem";

            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", "16");
            svg.setAttribute("height", "16");
            svg.setAttribute("viewBox", "0 0 16 16");
            svg.classList.add("faq-icon");

            const lineH = document.createElementNS("http://www.w3.org/2000/svg", "path");
            lineH.setAttribute("d", "M2 8H14");
            lineH.setAttribute("stroke", "#388E3C");
            lineH.setAttribute("stroke-width", "1.5");
            lineH.setAttribute("stroke-linecap", "round");

            const lineV = document.createElementNS("http://www.w3.org/2000/svg", "path");
            lineV.setAttribute("d", "M8 2V14");
            lineV.setAttribute("stroke", "#388E3C");
            lineV.setAttribute("stroke-width", "1.5");
            lineV.setAttribute("stroke-linecap", "round");
            lineV.classList.add("faq-icon-vertical");

            svg.appendChild(lineH);
            svg.appendChild(lineV);

            wrapper.appendChild(svg);
            wrapper.insertAdjacentText("beforeend", heading.textContent);

            summary.appendChild(wrapper);
            element.insertBefore(summary, element.firstChild);
            heading.remove();
        }
    });
});
