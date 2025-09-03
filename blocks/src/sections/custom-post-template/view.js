document.addEventListener("DOMContentLoaded", () => {
    const toc = document.querySelector(".toc");
    if (!toc) return;

    // Safe ID generator
    const generateSafeId = (text) => {
        text = text.replace(/[\r\n\t]+/g, " "); // remove line breaks/tabs
        text = text.toLowerCase(); // lowercase
        text = text.replace(/[^a-z0-9]+/g, "-"); // replace non-alphanum with hyphen
        return text.replace(/^-+|-+$/g, ""); // trim hyphens
    };

    // 1️⃣ Generate TOC dynamically from headings
    const headings = document.querySelectorAll(".blog-wrapper h1, .blog-wrapper h2, .blog-wrapper h3, .blog-wrapper h4, .blog-wrapper h5, .blog-wrapper h6");
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

        // Check for following ul/ol (nested list)
        let next = heading.nextElementSibling;
        if (next && (next.tagName === "UL" || next.tagName === "OL")) {
            const nestedUl = document.createElement("ul");

            Array.from(next.children).forEach((nestedLi) => {
                if (nestedLi.tagName !== "LI") return;

                // 1️⃣ Determine text for ID
                let liText = "";
                const firstChild = nestedLi.firstChild;

                if (firstChild) {
                    if (firstChild.nodeType === Node.TEXT_NODE) {
                        // direct text node
                        liText = firstChild.textContent.trim();
                    } else if (firstChild.nodeType === Node.ELEMENT_NODE && firstChild.tagName === "STRONG") {
                        // first child is <strong>
                        liText = firstChild.textContent.trim();
                    }
                }

                // fallback to entire textContent if nothing found
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

    // 2️⃣ Add arrows to TOC list items
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

    // 3️⃣ IntersectionObserver to highlight TOC links
    const observableElements = document.querySelectorAll(".blog-wrapper h1, .blog-wrapper h2, .blog-wrapper h3, .blog-wrapper h4, .blog-wrapper h5, .blog-wrapper h6, .blog-wrapper li");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                const id = target.id;
                if (!id) return;

                const tocLink = toc.querySelector(`a[href="#${id}"]`);
                if (!tocLink) return;

                let liAfter = tocLink.parentElement;
                while (liAfter && liAfter.tagName !== "LI") {
                    liAfter = liAfter.parentElement;
                }
                if (!liAfter) return;

                if (entry.isIntersecting) {
                    liAfter.classList.add("in-view");
                } else {
                    liAfter.classList.remove("in-view");
                }
            });
        },
        {
            root: null,
            threshold: 0.3,
        }
    );

    observableElements.forEach((el) => observer.observe(el));
});
