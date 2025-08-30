let isNextStep = false;
let formData = {};

function getTextareaInputData() {
    const textarea = document.querySelector('textarea[name="text"]');
    if (!textarea || textarea.value.trim() === "") return false;
    formData.text = textarea.value.trim();
    return true;
}

function animateSteps(fromEl, toEl, direction = 1) {
    if (!fromEl || !toEl) return;

    const container = fromEl.parentElement;

    const fromHeight = fromEl.offsetHeight;
    toEl.style.display = "grid";
    const toHeight = toEl.offsetHeight;
    toEl.style.display = "none";

    gsap.set(container, { height: fromHeight });
    gsap.to(container, { height: toHeight, duration: 0.5, ease: "power1.inOut" });

    gsap.set(toEl, { x: direction * 100 + "%", opacity: 0, display: "grid" });

    gsap.to(fromEl, {
        x: -direction * 100 + "%",
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            fromEl.style.display = "none";
        },
    });

    gsap.to(toEl, {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const firstStep = document.querySelector(".first-step");
    const secondStep = document.querySelector(".second-step");

    if (firstStep) {
        gsap.set(firstStep, { x: "0%", opacity: 1, display: "grid" });
    }
    if (secondStep) {
        gsap.set(secondStep, { x: "100%", opacity: 0, display: "none" });
    }

    const button = document.getElementById("next-step");
    if (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            if (!getTextareaInputData()) {
                alert("Please enter text first.");
                return;
            }

            isNextStep = true;
            animateSteps(firstStep, secondStep, 1);
        });
    }

    const form = document.querySelector("form.wp-block-common-reactive-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.querySelector('input[name="name"]');
            const mailInput = document.querySelector('input[name="mail"]');
            const privacyPolicy = document.querySelector('input[name="privacy-policy"]');

            if (!nameInput.value.trim() || !mailInput.value.trim() || !privacyPolicy.checked) {
                alert("Please fill out all required fields and accept privacy policy.");
                return;
            }

            formData.name = nameInput.value.trim();
            formData.mail = mailInput.value.trim();
            formData["privacy-policy"] = privacyPolicy.checked;

            console.log("Final form data:", formData);

            fetch("/wp-json/blocks/v1/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
                .then(res => res.text()) // <- see raw output
                .then(text => {
                    console.log("Raw response:", text);
                    try {
                        const data = JSON.parse(text);
                        console.log("Parsed JSON:", data);
                    } catch (e) {
                        console.error("Not JSON:", e);
                    }
                });
        });
    }
});
