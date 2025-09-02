import Form from '../../classes/Form'
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


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form.wp-block-common-contact-form");
    if (form) {

        appendClassToInputs(form)

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!checkInputValidation("mail", "Proszę podać poprawny adres e-mail")) return
            if (!checkInputValidation("name", "Proszę podać poprawnę imię")) return
            if (!checkInputValidation("tel", "Proszę podać poprawny numer telefonu")) return
            if (!checkTextAreaInput()) return
            if (!checkCheckboxValidation("Do wysłania wiadomości wymagane jest potwierdzenie polityki prywatności")) return

            const form = new Form();

            form.submitContactForm(formData).then(result => {
                if (result.success) {
                    alert("Form submitted successfully!");
                } else {
                    alert("Error: " + result.message);
                }
            });
        });
    }
});
