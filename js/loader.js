document.addEventListener("DOMContentLoaded", function () {
    async function addClickListener(id, designer, scriptPath) {
        document
            .getElementById(id)
            .addEventListener("click", async function () {
                // Check for windowConfigurations in local storage
                const windowConfigurations = localStorage.getItem(
                    "windowConfigurations"
                );
                if (windowConfigurations) {
                    console.log(
                        "Found windowConfigurations:",
                        windowConfigurations
                    );
                    // Do something with windowConfigurations...
                } else {
                    console.log("No windowConfigurations found");
                }

                // Remove old script if it exists
                const oldScript = document.getElementById("designerScript");
                if (oldScript) {
                    oldScript.remove();
                }

                await loadDesigner(designer);

                // Create new script
                const script = document.createElement("script");
                script.id = "designerScript";
                script.src = scriptPath;
                document.body.appendChild(script);
            });
    }

    addClickListener(
        "window-engine",
        "window-designer",
        "/wp-content/plugins/quote-engine/js/window-engine.js"
    );
    addClickListener(
        "door-engine",
        "door-designer",
        "/wp-content/plugins/quote-engine/js/door-engine.js"
    );
    addClickListener(
        "conservatory-engine",
        "conservatory-designer",
        "/wp-content/plugins/quote-engine/js/conservatory-engine.js"
    );
    addClickListener(
        "conservatory-roof-engine",
        "conservatory-roof-designer",
        "/wp-content/plugins/quote-engine/js/conservatory-roof-engine.js"
    );
});

function loadDesigner(designer) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/wp-admin/admin-ajax.php", true);
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.querySelector(".calculator-container").innerHTML =
                        xhr.responseText;
                    resolve(); // resolve the Promise when the request is successful
                } else {
                    reject(xhr.status); // reject the Promise if there's an error
                }
            }
        };
        xhr.send(
            "action=load_designer&designer=" + encodeURIComponent(designer)
        );
    });
}
