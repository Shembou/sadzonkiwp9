export default class Form {
    async submitReactiveForm(formData) {
        try {
            const response = await fetch("/wp-json/blocks/v1/contact-min", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server error (${response.status}): ${errorText}`);
            }

            let data;
            try {
                data = await response.json();
            } catch (err) {
                throw new Error("Invalid JSON response from server");
            }

            if (data.error) {
                console.error("API error:", data.error);
                return { success: false, message: data.error };
            }

            console.log("Success:", data);
            return { success: true, data };
        } catch (err) {
            console.error("Request failed:", err);
            return { success: false, message: err.message };
        }
    }
    async submitContactForm(formData) {
        try {
            const response = await fetch("/wp-json/blocks/v1/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server error (${response.status}): ${errorText}`);
            }

            let data;
            try {
                data = await response.json();
            } catch (err) {
                throw new Error("Invalid JSON response from server");
            }

            if (data.error) {
                console.error("API error:", data.error);
                return { success: false, message: data.error };
            }

            console.log("Success:", data);
            return { success: true, data };
        } catch (err) {
            console.error("Request failed:", err);
            return { success: false, message: err.message };
        }
    }
}