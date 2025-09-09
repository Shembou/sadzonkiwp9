function generateSafeId(text) {
    text = text.replace(/[\r\n\t]+/g, " ");
    text = text.toLowerCase();
    text = text.replace(/[^a-z0-9]+/g, "-");
    return text.replace(/^-+|-+$/g, "");
}

function generateToC(toc) {
    const headings = document.querySelectorAll(".policy-wrapper h1, .policy-wrapper h2, .policy-wrapper h3, .policy-wrapper h4, .policy-wrapper h5, .policy-wrapper h6");
    const ul = document.createElement("ul");

    headings.forEach((heading) => {
        const title = heading.textContent.trim();
        let id = heading.id || generateSafeId(title);
        heading.id = id;

        const li = document.createElement("li");
        li.className = "base-li";

        const a = document.createElement("a");
        a.href = `#${id}`;
        a.textContent = title;

        const strong = document.createElement("strong");
        strong.appendChild(a);
        li.appendChild(strong);

        let next = heading.nextElementSibling;
        if (next && (next.tagName === "UL" || next.tagName === "OL")) {
            const nestedUl = document.createElement("ul");

            Array.from(next.children).forEach((nestedLi) => {
                if (nestedLi.tagName !== "LI") return;

                let liText = "";
                const firstChild = nestedLi.firstChild;

                if (firstChild) {
                    if (firstChild.nodeType === Node.TEXT_NODE) {
                        liText = firstChild.textContent.trim();
                    } else if (firstChild.nodeType === Node.ELEMENT_NODE && firstChild.tagName === "STRONG") {
                        liText = firstChild.textContent.trim();
                    }
                }

                if (!liText) liText = nestedLi.textContent.trim();

                nestedLi.id = generateSafeId(liText);

                const nestedItem = document.createElement("li");
                nestedItem.className = "nested-li";

                const a = document.createElement("a");
                a.href = `#${nestedLi.id}`;
                a.textContent = liText;

                nestedItem.appendChild(a);
                nestedUl.appendChild(nestedItem);
            });

            if (nestedUl.children.length > 0) li.appendChild(nestedUl);
        }

        ul.appendChild(li);
    });

    toc.appendChild(ul);
}

function appendArrowsToBaseList(toc) {
    const liArray = toc.querySelectorAll(".base-li");
    liArray.forEach((element) => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "18");
        svg.setAttribute("height", "18");
        svg.setAttribute("viewBox", "0 0 18 18");
        svg.setAttribute("fill", "none");
        svg.setAttribute("class", "arrow");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
            "d",
            "M9.40332 5.21767C9.64082 4.98017 10.0252 4.98017 10.2627 5.21767L13.5967 8.55067C13.834 8.78818 13.8341 9.17356 13.5967 9.41103L10.2627 12.744C10.0252 12.981 9.64067 12.9812 9.40332 12.744C9.16595 12.5067 9.1662 12.1212 9.40332 11.8837L11.6982 9.58876H4.83301C4.49742 9.58855 4.22481 9.31595 4.22461 8.98036C4.22481 8.64478 4.49743 8.37315 4.83301 8.37294H11.6982L9.40332 6.07704C9.16596 5.83966 9.1662 5.4552 9.40332 5.21767Z"
        );
        path.setAttribute("fill", "#388E3C");

        svg.appendChild(path);
        element.insertAdjacentElement("afterbegin", svg);
    });
}

function appendReturnSvgToNestedList(toc) {
    /** @type {HTMLLIElement[] | null} */
    const nestedLiArray = toc.querySelectorAll(".nested-li");
    if (!nestedLiArray) return;

    nestedLiArray.forEach((element) => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "21");
        svg.setAttribute("viewBox", "0 0 20 21");
        svg.setAttribute("fill", "none");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("class", "back-arrow");

        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute(
            "d",
            "M14.0579 5.72203H7.39128C5.09128 5.72203 3.22461 7.58869 3.22461 9.88869C3.22461 12.1887 5.09128 14.0554 7.39128 14.0554H16.5579"
        );
        path1.setAttribute("stroke", "#388E3C");
        path1.setAttribute("stroke-width", "1.5");
        path1.setAttribute("stroke-miterlimit", "10");
        path1.setAttribute("stroke-linecap", "round");
        path1.setAttribute("stroke-linejoin", "round");

        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M14.6416 11.972L16.7749 14.1053L14.6416 16.2387");
        path2.setAttribute("stroke", "#388E3C");
        path2.setAttribute("stroke-width", "1.5");
        path2.setAttribute("stroke-linecap", "round");
        path2.setAttribute("stroke-linejoin", "round");

        svg.appendChild(path1);
        svg.appendChild(path2);

        element.insertAdjacentElement("afterbegin", svg);
    });
}

function applyIntersectionObserverToPostLinks(toc) {
    const container = document.querySelector("section.wp-block-sections-privacy-policy-template");
    if (!container) return;

    const containerWidth = container.offsetWidth;
    if (containerWidth < 600) {
        const listItems = toc.querySelectorAll(".base-li");
        if (!listItems) return;
        listItems.forEach((listItem) => {
            listItem.classList.add("in-view")
        })
        return
    }

    const observableElements = document.querySelectorAll(".policy-wrapper h1, .policy-wrapper h2, .policy-wrapper h3, .policy-wrapper h4, .policy-wrapper h5, .policy-wrapper h6, .policy-wrapper li");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                const id = target.id;
                if (!id) return;

                const tocLink = toc.querySelector(`a[href="#${id}"]`);
                if (!tocLink) return;
                /** @type {HTMLLIElement | null} */
                let liAfter = tocLink.parentElement;

                while (liAfter && liAfter.tagName !== "LI") {
                    liAfter = liAfter.parentElement;
                }

                if (!liAfter) return;

                if (entry.isIntersecting && liAfter.classList.contains("base-li")) {
                    liAfter.classList.add("in-view");
                } else if (entry.isIntersecting && liAfter.classList.contains("nested-li")) {
                    liAfter.querySelector("a").tabIndex = 0;
                } else if (!entry.isIntersecting && liAfter.classList.contains("nested-li")) {
                    liAfter.querySelector("a").tabIndex = -1;
                }
                else {
                    liAfter.classList.remove("in-view");
                }
            });
        },
        {
            root: null,
            threshold: 1,
        }
    );

    observableElements.forEach((el) => observer.observe(el));
}

function removeOverflowHiddenFromMain() {
    const main = document.querySelector("main");
    if (!main) return;
    main.style.overflow = "visible"
}

function enableSmoothScrolling(toc) {
    const links = toc.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (!targetElement) return;

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.pushState(null, "", `#${targetId}`);
        });
    });
}

function observePolicyWrapperChildren() {
    const blogWrapper = document.querySelector(".policy-wrapper");
    if (!blogWrapper) return;

    const children = blogWrapper.querySelectorAll(":scope > *");
    if (!children.length) return;

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-child");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    children.forEach((child) => observer.observe(child));
}

document.addEventListener("DOMContentLoaded", () => {
    const toc = document.querySelector(".toc");
    if (!toc) return;
    generateToC(toc);
    appendArrowsToBaseList(toc)
    appendReturnSvgToNestedList(toc)
    applyIntersectionObserverToPostLinks(toc)
    removeOverflowHiddenFromMain()
    enableSmoothScrolling(toc)
    observePolicyWrapperChildren();
});
