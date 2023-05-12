// Get elements
const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const contactForm = document.getElementById("contact-form");
let windowConfigurations = [];

window.addEventListener("load", () => {
    const savedWindowConfigurations = localStorage.getItem(
        "windowConfigurations"
    );

    if (savedWindowConfigurations) {
        windowConfigurations = JSON.parse(savedWindowConfigurations);

        // Display the loaded window configurations
        windowConfigurations.forEach((config) => {
            // Create a new summary element for the loaded configuration
            const summaryElement = document.createElement("div");
            summaryElement.id = `summary-${config.id}`; // Set the element ID
            summaryElement.innerHTML = `
                Window ID: ${config.id}<br>
                Window Style: ${config.windowStyle}<br>
                Dimensions: ${config.dimensions.width} x ${config.dimensions.height} mm<br>
                External Frame Color: ${config.externalFrameColor}<br>
                Internal Frame Color: ${config.internalFrameColor}<br>
                Handle Color: ${config.handleColor}<br>
                Glazing Style: ${config.glazingStyle}<br>
                <button class="remove-window" data-window-id="${config.id}">Remove</button>
                <hr>
            `;

            // Check if a summary with the same ID already exists
            const existingSummary = document.getElementById(
                `summary-${config.id}`
            );
            if (existingSummary) {
                // Replace the existing summary
                existingSummary.replaceWith(summaryElement);
            } else {
                // Append the new summary
                document.getElementById("summary").appendChild(summaryElement);
            }
        });
    }
});

let selectedOptions = {
    id: Date.now(),
    windowStyle: null,
    dimensions: null,
    externalFrameColor: null,
    internalFrameColor: null,
    handleColor: null,
    glazingStyle: null,
    userInfo: null,
};

// Add click event listeners to window styles, frame colors, and glazing styles
document.querySelectorAll(".window-style").forEach((el) => {
    el.addEventListener("click", () => {
        document
            .querySelectorAll(".window-style.selected")
            .forEach((selected) => {
                selected.classList.remove("selected");
            });
        el.classList.add("selected");
        selectedOptions.windowStyle = el.querySelector("p").textContent;
        console.log("Selected window style:", selectedOptions.windowStyle);
    });
});

// Add input event listeners to dimensions
document.getElementById("width").addEventListener("input", (e) => {
    const width = e.target.value;
    const height = document.getElementById("height").value;
    selectedOptions.dimensions = { width, height };
    console.log("Selected dimensions:", selectedOptions.dimensions);
});

document.getElementById("height").addEventListener("input", (e) => {
    const height = e.target.value;
    const width = document.getElementById("width").value;
    selectedOptions.dimensions = { width, height };
    console.log("Selected dimensions:", selectedOptions.dimensions);
});

// Add input event listeners to external frame colour
document.querySelectorAll(".external-frame-color").forEach((el) => {
    el.addEventListener("click", () => {
        document
            .querySelectorAll(".external-frame-color.selected")
            .forEach((selected) => {
                selected.classList.remove("selected");
            });
        el.classList.add("selected");
        selectedOptions.externalFrameColor = el.querySelector("p").textContent;
        console.log(
            "Selected External Glazing Colour:",
            selectedOptions.externalFrameColor
        );
    });
});

// Add input event listeners to internal frame colour
document.querySelectorAll(".internal-frame-color").forEach((el) => {
    el.addEventListener("click", () => {
        document
            .querySelectorAll(".internal-frame-color.selected")
            .forEach((selected) => {
                selected.classList.remove("selected");
            });
        el.classList.add("selected");
        selectedOptions.internalFrameColor = el.querySelector("p").textContent;
        console.log(
            "Selected Internal Glazing Colour:",
            selectedOptions.internalFrameColor
        );
    });
});

// Add click event listeners for handle colors
document.querySelectorAll(".handle-color").forEach((el) => {
    el.addEventListener("click", () => {
        document
            .querySelectorAll(".handle-color.selected")
            .forEach((selected) => {
                selected.classList.remove("selected");
            });
        el.classList.add("selected");
        selectedOptions.handleColor = el.querySelector("p").textContent;
        console.log("Selected handle color:", selectedOptions.handleColor);
    });
});

// Add click event listeners for glazing style
document.querySelectorAll(".glazing-style").forEach((el) => {
    el.addEventListener("click", () => {
        document
            .querySelectorAll(".glazing-style.selected")
            .forEach((selected) => {
                selected.classList.remove("selected");
            });
        el.classList.add("selected");
        selectedOptions.glazingStyle = el.querySelector("p").textContent;
        console.log("Selected glazing style:", selectedOptions.glazingStyle);
    });
});

// Navigation
nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleNextButtonClick(index + 1));
});

prevButtons.forEach((button, index) => {
    button.addEventListener("click", () => showStep(index));
});

function resetForm() {
    // Reset window style selection
    document.querySelectorAll(".window-style.selected").forEach((selected) => {
        selected.classList.remove("selected");
    });

    // Reset dimensions input values
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";

    // Reset external frame color selection
    document
        .querySelectorAll(".external-frame-color.selected")
        .forEach((selected) => {
            selected.classList.remove("selected");
        });

    // Reset internal frame color selection
    document
        .querySelectorAll(".internal-frame-color.selected")
        .forEach((selected) => {
            selected.classList.remove("selected");
        });

    // Reset handle color selection
    document.querySelectorAll(".handle-color.selected").forEach((selected) => {
        selected.classList.remove("selected");
    });

    // Reset glazing style selection
    document.querySelectorAll(".glazing-style.selected").forEach((selected) => {
        selected.classList.remove("selected");
    });

    // Clear validation messages
    document.querySelectorAll(".validation-message").forEach((element) => {
        element.textContent = "";
    });
}

function handleNextButtonClick(stepIndex) {
    let validationMessage = "";

    // Check if the required fields are filled before moving to the next step
    switch (stepIndex) {
        case 1:
            if (!selectedOptions.windowStyle) {
                validationMessage = "Please select a window style.";
            }
            break;
        case 2:
            const width = document.getElementById("width").value;
            const height = document.getElementById("height").value;
            if (!width || !height) {
                validationMessage =
                    "Please enter both width and height dimensions.";
            }
            break;
        case 3:
            if (!selectedOptions.externalFrameColor) {
                validationMessage = "Please select an external frame color.";
            }
            break;
        case 4:
            if (!selectedOptions.internalFrameColor) {
                validationMessage = "Please select an internal frame color.";
            }
            break;
        case 5:
            if (!selectedOptions.handleColor) {
                validationMessage = "Please select a handle color.";
            }
            break;
        case 6:
            if (!selectedOptions.glazingStyle) {
                validationMessage = "Please select a glazing style.";
            }
            break;
    }

    // If validation fails, show the validation message; otherwise, proceed to the next step
    if (validationMessage) {
        document.querySelectorAll(".validation-message")[
            stepIndex - 1
        ].textContent = validationMessage;
    } else {
        // Clear validation message
        document.querySelectorAll(".validation-message").forEach((element) => {
            element.textContent = "";
        });

        // If the next step is the first step, it means a new window configuration is being started
        if (stepIndex === 0) {
            // Push the completed window configuration to windowConfigurations array
            if (selectedOptions.id !== null) {
                const existingIndex = windowConfigurations.findIndex(
                    (config) => config.id === selectedOptions.id
                );
                if (existingIndex >= 0) {
                    // Update the existing window configuration
                    windowConfigurations[existingIndex] = {
                        ...selectedOptions,
                    };
                } else {
                    // Add the new window configuration
                    windowConfigurations.push({ ...selectedOptions });
                }
            }

            // Assign a new unique ID to the new window configuration
            selectedOptions.id = Date.now();
            resetForm();
        }

        showStep(stepIndex);
    }
}

// Add a click event listener to the "Configure another window" button
document
    .getElementById("configure-another-window")
    .addEventListener("click", () => {
        showStep(0);
    });

// Add a click event listener to the "Configure another window" button
document
    .getElementById("view-quote-summary-btn")
    .addEventListener("click", () => {
        showStep(6);
    });

// Update the showStep function to populate the summary when step 6 is shown
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.classList.toggle("hidden", index !== stepIndex);
    });
}

// Add a click event listener to update the summary when the button is clicked
document.getElementById("next-step5").addEventListener("click", updateSummary);

function updateSummary() {
    const windowId = selectedOptions.id; // Get the current window ID

    // Check if the window configuration already exists in the array
    const existingIndex = windowConfigurations.findIndex(
        (config) => config.id === windowId
    );

    if (existingIndex >= 0) {
        // Update the existing window configuration
        windowConfigurations[existingIndex] = { ...selectedOptions };
    } else {
        // Add the new window configuration to the array
        windowConfigurations.push({ ...selectedOptions });
    }
    const summaryElement = document.createElement("div");

    summaryElement.id = `summary-${windowId}`; // Set the element ID
    summaryElement.innerHTML = `

    <span class="hidden-id">${
        windowId !== null ? `Window ID: ${windowId}<br>` : ""
    }</span>
    Window Style: ${selectedOptions.windowStyle}<br>
    Dimensions: ${selectedOptions.dimensions.width} x ${
        selectedOptions.dimensions.height
    } mm<br>
    External Frame Color: ${selectedOptions.externalFrameColor}<br>
    Internal Frame Color: ${selectedOptions.internalFrameColor}<br>
    Handle Color: ${selectedOptions.handleColor}<br>
    Glazing Style: ${selectedOptions.glazingStyle}<br>
    <button class="remove-window" data-window-id="${windowId}">Remove</button>
    <hr>
  `;

    // Check if a summary with the same ID already exists
    const existingSummary = document.getElementById(`summary-${windowId}`);
    if (existingSummary) {
        // If a summary with the same ID exists, replace it with the new summary
        existingSummary.replaceWith(summaryElement);
    } else {
        // If no summary with the same ID exists, append the new summary
        document.getElementById("summary").appendChild(summaryElement);
    }

    // Save the windowConfigurations to localStorage
    localStorage.setItem(
        "windowConfigurations",
        JSON.stringify(windowConfigurations)
    );
}

document.getElementById("summary").addEventListener("click", function (event) {
    // If a 'Remove' button was clicked
    if (event.target.matches("button.remove-window")) {
        const windowId = event.target.dataset.windowId;
        removeWindow(windowId);
    }
});

function removeWindow(windowId) {
    // Convert windowId to a number
    windowId = Number(windowId);

    // Find the window configuration by ID
    const windowConfigIndex = windowConfigurations.findIndex(
        (config) => Number(config.id) === windowId
    );

    // If a window configuration was found, remove it from the array
    if (windowConfigIndex >= 0) {
        windowConfigurations.splice(windowConfigIndex, 1);

        // Reset the selected options if the removed window was the last selected one
        if (selectedOptions.id === windowId) {
            resetSelectedOptions();
        }

        // Log that the configuration has been removed
        console.log(
            `Window configuration with ID ${windowId} has been removed.`
        );

        // Save the updated window configurations to localStorage
        localStorage.setItem(
            "windowConfigurations",
            JSON.stringify(windowConfigurations)
        );
    } else {
        console.error(
            `Could not find window configuration with ID ${windowId}`
        );
    }

    // Remove the corresponding summary element
    const summaryElement = document.getElementById(`summary-${windowId}`);
    if (summaryElement) {
        summaryElement.remove();
    }

    // Log the updated window configurations
    console.log("Updated window configurations:", windowConfigurations);
}

function resetSelectedOptions() {
    selectedOptions = {
        id: null,
        windowStyle: null,
        dimensions: null,
        externalFrameColor: null,
        internalFrameColor: null,
        handleColor: null,
        glazingStyle: null,
        userInfo: null,
    };
}

// Initialize EmailJS
emailjs.init("SMAtirpg6hG7wZzBt");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user info from form
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    selectedOptions.userInfo = data;

    // Log all selected options
    console.log("All selected options:", selectedOptions);

    // Check if the window configuration already exists
    const existingIndex = windowConfigurations.findIndex(
        (config) => config.id === selectedOptions.id
    );
    if (existingIndex >= 0) {
        // Update the existing window configuration
        windowConfigurations[existingIndex] = { ...selectedOptions };
    } else {
        // Add the new window configuration
        windowConfigurations.push({ ...selectedOptions });
    }
    // resetSelectedOptions();

    // Clear the summary section
    document.getElementById("summary").innerHTML = "";

    // Update the summary section with all window configurations
    windowConfigurations.forEach((config) => {
        const summaryElement = document.createElement("div");
        summaryElement.id = `summary-${config.id}`; // Set the element ID
        summaryElement.innerHTML = `
            Window ID: ${config.id}<br>
            Window Style: ${config.windowStyle}<br>
            Dimensions: ${config.dimensions.width} x ${config.dimensions.height} mm<br>
            External Frame Color: ${config.externalFrameColor}<br>
            Internal Frame Color: ${config.internalFrameColor}<br>
            Handle Color: ${config.handleColor}<br>
            Glazing Style: ${config.glazingStyle}<br>
            <hr>
        `;

        // Check if a summary with the same ID already exists
        const existingSummary = document.getElementById(`summary-${config.id}`);
        if (existingSummary) {
            // Replace the existing summary
            existingSummary.replaceWith(summaryElement);
        } else {
            // Append the new summary
            document.getElementById("summary").appendChild(summaryElement);
        }
    });

    // Initialize EmailJS
    emailjs.init("SMAtirpg6hG7wZzBt");

    // Format window configurations into a nicely formatted message
    const message = windowConfigurations
        .map((config) => {
            return `
      Window ID: ${config.id}<br>
      Window Style: ${config.windowStyle}<br>
      Dimensions: ${config.dimensions.width} x ${config.dimensions.height} mm<br>
      External Frame Color: ${config.externalFrameColor}<br>
      Internal Frame Color: ${config.internalFrameColor}<br>
      Handle Color: ${config.handleColor}<br>
      Glazing Style: ${config.glazingStyle}<br>
      <hr>
    `;
        })
        .join("");

    // Send the email
    emailjs
        .send(
            "service_2unt24a",
            "template_o9wu516",
            {
                type: "Window",
                name: selectedOptions.userInfo.name,
                email: selectedOptions.userInfo.email,
                phone: selectedOptions.userInfo.phone,
                postcode: selectedOptions.userInfo.postcode,
                message: message, // Insert the window configurations into the message
            },
            "SMAtirpg6hG7wZzBt"
        )
        .then(
            function (response) {
                console.log(
                    "Email successfully sent!",
                    response.status,
                    response.text
                );
                // After a successful email send, redirect to a new page
                window.location.href = "https://www.example.com/success";
            },
            function (error) {
                console.log("Failed...", error);
            }
        );
});
