let isNextStep = false;
let formData = {};
/**
 * 
 * @param {HTMLFormElement} form 
 */

function appendClassToInputs(form) {
    /** @type {HTMLInputElement[] | null} */
    const inputs = form.querySelectorAll('input,textarea');
    if (inputs == null) return

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.classList.add("wasFocused", "focused")
        })
        input.addEventListener("blur", () => {
            input.classList.remove("focused")
        })
    });
}

/**
 * @returns boolean
 */
function checkTextAreaInput() {
    /** @type {HTMLTextAreaElement | null} */
    const textarea = document.querySelector('textarea[name="text"]');
    if (!textarea) return false;


    if (!textarea.checkValidity()) {
        textarea.classList.add("invalid")
        textarea.reportValidity();
        return false;
    }
    if (textarea.classList.contains("invalid")) textarea.classList.remove("invalid")
    formData.text = textarea.value.trim();
    return true;
}
/**
 * Validate an input/textarea by its name attribute and set a custom error.
 * Usage: checkInputValidation('name', 'Please enter your name')
 * @param {string} inputName
 * @param {string} message
 * @returns {boolean}
 */
function checkInputValidation(inputName, message) {
    /** @type {HTMLInputElement | null} */
    const el = document.querySelector(`[name="${inputName}"]`);
    if (!el) return false;

    el.classList.remove('invalid');


    el.setCustomValidity("");
    if (!el.checkValidity()) {
        el.setCustomValidity(message);
        el.classList.add("invalid");
        el.reportValidity();
        return false;
    }

    formData[inputName] = el.value.trim();
    return true;
}
/**
 * @param {string} message
 * @returns {boolean}
 * 
*/
function checkCheckboxValidation(message) {
    /** @type {HTMLInputElement | null} */
    const checkbox = document.querySelector(`[name="privacy-policy"]`);
    if (!checkbox) return false;

    checkbox.classList.remove('invalid');

    checkbox.setCustomValidity("");
    if (!checkbox.checked) {
        checkbox.setCustomValidity(message)
        checkbox.reportValidity();
        return false;
    }

    formData["privacy-policy"] = checkbox.checked;
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

            if (!checkTextAreaInput()) {
                return;
            }

            isNextStep = true;
            animateSteps(firstStep, secondStep, 1);
            /**@type {HTMLInputElement | null} */
            const inputToFocus = secondStep.querySelector("input[name='name']")
            if (!inputToFocus) return;
            inputToFocus.focus()
        });
    }

    const form = document.querySelector("form.wp-block-common-reactive-form");
    if (form) {

        appendClassToInputs(form)

        // form.addEventListener("keydown", (e) => {
        //     if (e.key === "Enter" && e.target.tagName.toLowerCase() !== "textarea") {
        //         e.preventDefault();
        //     }
        // });


        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!checkInputValidation("mail", "Proszę podać poprawny adres e-mail")) return
            if (!checkInputValidation("name", "Proszę podać poprawnę imię")) return
            if (!checkCheckboxValidation("Do wysłania wiadomości wymagane jest potwierdzenie polityki prywatności")) return

            console.log(formData)

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
