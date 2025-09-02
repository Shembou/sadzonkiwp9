function createArrowSvg(index) {
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "25");
    svg.setAttribute("viewBox", "0 0 24 25");
    svg.setAttribute("fill", "none");
    svg.setAttribute("iter", index.toString());
    svg.classList.add("arrow");

    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("clip-path", "url(#clip0_6549_2995)");

    const path1 = document.createElementNS(svgNS, "path");
    path1.setAttribute("d", "M5 12.2084H19");
    path1.setAttribute("stroke", "#388E3C");
    path1.setAttribute("stroke-width", "1.5");
    path1.setAttribute("stroke-linecap", "round");
    path1.setAttribute("stroke-linejoin", "round");

    const path2 = document.createElementNS(svgNS, "path");
    path2.setAttribute("d", "M13 18.2084L19 12.2084");
    path2.setAttribute("stroke", "#388E3C");
    path2.setAttribute("stroke-width", "1.5");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");

    const path3 = document.createElementNS(svgNS, "path");
    path3.setAttribute("d", "M13 6.20837L19 12.2084");
    path3.setAttribute("stroke", "#388E3C");
    path3.setAttribute("stroke-width", "1.5");
    path3.setAttribute("stroke-linecap", "round");
    path3.setAttribute("stroke-linejoin", "round");

    g.append(path1, path2, path3);
    svg.appendChild(g);

    return svg;
}

document.addEventListener("DOMContentLoaded", () => {
    /** @type {HTMLDivElement} */
    const enumeratedCardsElement = document.querySelector("div.wp-block-components-enumerated-cards");
    if (!enumeratedCardsElement) return;

    const columns = enumeratedCardsElement.querySelectorAll('.wp-block-column');
    if (!columns.length) return;

    columns.forEach((column, index) => {
        if (index !== columns.length - 1) {
            column.appendChild(createArrowSvg(index));
        }
    });
});
