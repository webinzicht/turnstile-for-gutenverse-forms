/**
 * Turnstile for Gutenverse Forms
 * Configurable site key (edit only here)
 * Get your key here: https://www.cloudflare.com/application-services/products/turnstile/
 */

// ------------------------------------------------------------
// 1. CONFIG — replace with your real site key
// ------------------------------------------------------------

const TFGF_SITEKEY = "YOUR_SITE_KEY_HERE";

// Optional: Cloudflare test keys 
// const TFGF_SITEKEY = "2x00000000000000000000BB"; // invisible - always fails
// const TFGF_SITEKEY = "1x00000000000000000000BB"; // invisible - always passes
// ------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll(".guten-form-builder");

    if (!forms.length || typeof turnstile === "undefined") {
        return;
    }

    forms.forEach(function (form, index) {

        const submitBtn =
            form.querySelector("button[type='submit'], input[type='submit']");
        if (!submitBtn) return;

        // Track state per form
        let tokenReady = false;

        // Create container for Turnstile
        const containerId = "turnstile-container-" + index;
        const container = document.createElement("div");
        container.id = containerId;
        form.appendChild(container);

        // Render widget
        const widgetId = turnstile.render("#" + containerId, {
            sitekey: TFGF_SITEKEY,
            action: "submit",
            size: "invisible",
            execution: "execute", // IMPORTANT: prevents auto-run on page load

            callback: function (token) {

                tokenReady = true;

                // store token in hidden input
                let hidden = form.querySelector("input[name='cf-turnstile-response']");
                if (!hidden) {
                    hidden = document.createElement("input");
                    hidden.type = "hidden";
                    hidden.name = "cf-turnstile-response";
                    form.appendChild(hidden);
                }
                hidden.value = token;

                // trigger the REAL submit click
                submitBtn.click();
            }
        });

        // Intercept submit button clicks
        submitBtn.addEventListener("click", function (e) {

            if (tokenReady) {
                return; // let Gutenverse submit normally
            }

            e.preventDefault();
            e.stopImmediatePropagation();

            turnstile.execute(widgetId);
        });

    });

});
