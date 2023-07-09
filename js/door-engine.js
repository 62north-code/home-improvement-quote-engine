// Get elements
const steps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");
const contactForm = document.getElementById("contact-form");
let doorConfigurations = [];

let selectedOptions = {
	id: Date.now(),
	doorStyle: null,
	dimensionsWidth: null,
	dimensionsHeight: null,
	externalFrameColor: null,
	internalFrameColor: null,
	handleColor: null,
	glazingStyle: null,
	userInfo: null
};

window.addEventListener("load", () => {
	checkdoorConfigurations(doorConfigurations);
	const saveddoorConfigurations = localStorage.getItem("doorConfigurations");

	if (saveddoorConfigurations) {
		doorConfigurations = JSON.parse(saveddoorConfigurations);

		// Display the loaded door configurations
		doorConfigurations.forEach((config) => {
			// Create a new summary element for the loaded configuration
			const summaryElement = document.createElement("div");
			summaryElement.id = `summary-${config.id}`; // Set the element ID
			summaryElement.innerHTML = `
                Door ID: ${config.id}<br>
                Door Style: ${config.doorStyle}<br>
                Door Dimensions: ${config.dimensionsWidth} x ${config.dimensionsHeight} mm<br>
                External Door Frame Color: ${config.externalFrameColor}<br>
                Internal Door Frame Color: ${config.internalFrameColor}<br>
                Door Handle Color: ${config.handleColor}<br>
                Door Glazing Style: ${config.glazingStyle}<br>
                <button class="edit-door" data-door-id="${config.id}">Edit</button>
                <button class="remove-door" data-door-id="${config.id}">Remove</button>
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

// Add click event listeners to door styles, frame colors, and glazing styles
document.querySelectorAll(".door-style").forEach((el) => {
	el.addEventListener("click", () => {
		document
			.querySelectorAll(".door-style.selected")
			.forEach((selected) => {
				selected.classList.remove("selected");
			});
		el.classList.add("selected");
		selectedOptions.doorStyle = el.querySelector("p").textContent;
		console.log("Selected door style:", selectedOptions.doorStyle);
	});
});

// Add input event listeners to dimensions
document.getElementById("width").addEventListener("input", (e) => {
	selectedOptions.dimensionsWidth = e.target.value;
	console.log("Selected width:", selectedOptions.dimensionsWidth);
});

document.getElementById("height").addEventListener("input", (e) => {
	selectedOptions.dimensionsHeight = e.target.value;
	console.log("Selected height:", selectedOptions.dimensionsHeight);
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
	// Reset door style selection
	document.querySelectorAll(".door-style.selected").forEach((selected) => {
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
			if (!selectedOptions.doorStyle) {
				validationMessage = "Please select a door style.";
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

		// If the next step is the first step, it means a new door configuration is being started
		if (stepIndex === 0) {
			resetSelectedOptions();
			// Push the completed door configuration to doorConfigurations array
			if (selectedOptions.id !== null) {
				const existingIndex = doorConfigurations.findIndex(
					(config) => config.id === selectedOptions.id
				);
				if (existingIndex >= 0) {
					// Update the existing door configuration
					doorConfigurations[existingIndex] = {
						...selectedOptions
					};
				} else {
					// Add the new door configuration
					doorConfigurations.push({ ...selectedOptions });
				}
			}

			// Assign a new unique ID to the new door configuration
			selectedOptions.id = Date.now();
			resetForm();
		}

		showStep(stepIndex);
	}
}

// Add a click event listener to the "Configure another door" button
document
	.getElementById("configure-another-door")
	.addEventListener("click", () => {
		handleNextButtonClick(0);
	});

document.getElementById("inline-begin").addEventListener("click", () => {
	handleNextButtonClick(0);
});

// Add a click event listener to the "Configure another door" button
document
	.getElementById("view-quote-summary-btn")
	.addEventListener("click", () => {
		showStep(6);
	});

// Update the showStep function to populate the summary when step 6 is shown
function showStep(stepIndex) {
	// Load selectedOptions into form fields if on the first step
	if (stepIndex === 0) {
		loadFormFields(selectedOptions);
	}

	steps.forEach((step, index) => {
		step.classList.toggle("hidden", index !== stepIndex);
	});
}

function loadFormFields(options) {
	// Load options into form fields
	// Replace 'formFieldId' with the actual IDs of your form fields
	document.getElementById("width").value = options.dimensionsWidth;
	document.getElementById("height").value = options.dimensionsHeight;
}

// Add a click event listener to update the summary when the button is clicked

document.getElementById("next-step5").addEventListener("click", function () {
	updateSummary();
	checkdoorConfigurations(doorConfigurations);
});

function updateSummary() {
	const doorId = selectedOptions.id; // Get the current Door ID

	// Check if the door configuration already exists in the array
	const existingIndex = doorConfigurations.findIndex(
		(config) => config.id === doorId
	);

	if (existingIndex >= 0) {
		// Update the existing door configuration
		doorConfigurations[existingIndex] = { ...selectedOptions };
	} else {
		// Add the new door configuration to the array
		doorConfigurations.push({ ...selectedOptions });
	}
	const summaryElement = document.createElement("div");

	summaryElement.id = `summary-${doorId}`; // Set the element ID
	summaryElement.innerHTML = `

    <span class="hidden-id">${
		doorId !== null ? `Door ID: ${doorId}<br>` : ""
	}</span>
    door Style: ${selectedOptions.doorStyle}<br>
    Dimensions: ${selectedOptions.dimensionsWidth} mm x ${
		selectedOptions.dimensionsHeight
	} mm<br>
    External Frame Color: ${selectedOptions.externalFrameColor}<br>
    Internal Frame Color: ${selectedOptions.internalFrameColor}<br>
    Handle Color: ${selectedOptions.handleColor}<br>
    Glazing Style: ${selectedOptions.glazingStyle}<br>

    <button class="edit-door" data-door-id="${doorId}">Edit</button>
    <button class="remove-door" data-door-id="${doorId}">Remove</button>
    <hr>
  `;

	// Check if a summary with the same ID already exists
	const existingSummary = document.getElementById(`summary-${doorId}`);
	if (existingSummary) {
		// If a summary with the same ID exists, replace it with the new summary
		existingSummary.replaceWith(summaryElement);
	} else {
		// If no summary with the same ID exists, append the new summary
		document.getElementById("summary").appendChild(summaryElement);
	}

	// Save the doorConfigurations to localStorage
	localStorage.setItem(
		"doorConfigurations",
		JSON.stringify(doorConfigurations)
	);
}

document.getElementById("summary").addEventListener("click", function (event) {
	// If an 'Edit' button was clicked
	if (event.target.matches("button.edit-door")) {
		const doorId = event.target.dataset.doorId;
		editdoor(doorId);
	}

	// If a 'Remove' button was clicked
	else if (event.target.matches("button.remove-door")) {
		const doorId = event.target.dataset.doorId;
		removedoor(doorId);
	}
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".door-style img").forEach((img) => {
		img.addEventListener("click", (event) => {
			// Get the door style from the clicked image
			const doorStyle = event.target.dataset.doorStyle;

			// Update the selectedOptions with the clicked door style
			selectedOptions.doorStyle = doorStyle;

			// Log the updated selectedOptions
			console.log("Selected door style:", selectedOptions.doorStyle);
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".external-frame-color img").forEach((img) => {
		img.addEventListener("click", (event) => {
			// Get the door style from the clicked image
			const externalFrameColor = event.target.dataset.doorStyle;

			// Update the selectedOptions with the clicked door style
			selectedOptions.externalFrameColor = externalFrameColor;

			// Log the updated selectedOptions
			console.log(
				"Selected external frame color:",
				selectedOptions.externalFrameColor
			);
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".internal-frame-color img").forEach((img) => {
		img.addEventListener("click", (event) => {
			// Get the door style from the clicked image
			const internalFrameColor = event.target.dataset.doorStyle;

			// Update the selectedOptions with the clicked door style
			selectedOptions.internalFrameColor = internalFrameColor;

			// Log the updated selectedOptions
			console.log(
				"Selected internal frame color:",
				selectedOptions.internalFrameColor
			);
		});
	});
});

function editdoor(doorId) {
	// Convert doorId to a number
	doorId = Number(doorId);

	// Find the door configuration by ID
	const doorConfig = doorConfigurations.find(
		(config) => Number(config.id) === doorId
	);

	// If a door configuration was found, load it into selectedOptions
	if (doorConfig) {
		selectedOptions = { ...doorConfig };

		// Get all door style images
		const doorStyleImages = document.querySelectorAll(
			"img[data-door-style]"
		);

		// Remove 'selected' class from all door style divs
		doorStyleImages.forEach((img) => {
			img.parentNode.classList.remove("selected");
		});

		// Loop over images and add 'selected' class to the div that matches the door style in selectedOptions
		doorStyleImages.forEach((img) => {
			if (img.dataset.doorStyle === selectedOptions.doorStyle) {
				img.parentNode.classList.add("selected");
			}
		});

		// Get all external frame color images
		const externalFrameColorImages = document.querySelectorAll(
			"img[data-external-frame-color]"
		);

		// Remove 'selected' class from all external frame color divs
		externalFrameColorImages.forEach((img) => {
			img.parentNode.classList.remove("selected");
		});

		// Loop over images and add 'selected' class to the div that matches the external frame color in selectedOptions
		externalFrameColorImages.forEach((img) => {
			if (
				img.dataset.externalFrameColor ===
				selectedOptions.externalFrameColor
			) {
				img.parentNode.classList.add("selected");
			}
		});

		// Get all internal frame color images
		const internalFrameColorImages = document.querySelectorAll(
			"img[data-internal-frame-color]"
		);

		// Remove 'selected' class from all external frame color divs
		internalFrameColorImages.forEach((img) => {
			img.parentNode.classList.remove("selected");
		});

		// Loop over images and add 'selected' class to the div that matches the external frame color in selectedOptions
		internalFrameColorImages.forEach((img) => {
			if (
				img.dataset.internalFrameColor ===
				selectedOptions.externalFrameColor
			) {
				img.parentNode.classList.add("selected");
			}
		});

		// Get all internal frame color images
		const handleColorImages = document.querySelectorAll(
			"img[data-handle-color]"
		);

		// Remove 'selected' class from all external frame color divs
		handleColorImages.forEach((img) => {
			img.parentNode.classList.remove("selected");
		});

		// Loop over images and add 'selected' class to the div that matches the external frame color in selectedOptions
		handleColorImages.forEach((img) => {
			if (img.dataset.handleColor === selectedOptions.handleColor) {
				img.parentNode.classList.add("selected");
			}
		});

		// Get all internal frame color images
		const glazingStyleImages = document.querySelectorAll(
			"img[data-glazing-style]"
		);

		// Remove 'selected' class from all external frame color divs
		glazingStyleImages.forEach((img) => {
			img.parentNode.classList.remove("selected");
		});

		// Loop over images and add 'selected' class to the div that matches the external frame color in selectedOptions
		glazingStyleImages.forEach((img) => {
			if (img.dataset.glazingStyle === selectedOptions.glazingStyle) {
				img.parentNode.classList.add("selected");
			}
		});

		// Log that the configuration has been loaded
		console.log(`Loaded door configuration with ID ${doorId} for editing.`);

		// Navigate to the first step
		showStep(0);
	} else {
		console.error(`Could not find door configuration with ID ${doorId}`);
	}
}

function updateSelection(attribute, option) {
	// Get all attribute images
	const attributeImages = document.querySelectorAll(`img[data-${attribute}]`);

	// Remove 'selected' class from all attribute divs and add 'selected' class to the div that matches the option
	attributeImages.forEach((img) => {
		img.parentNode.classList.remove("selected");

		if (img.dataset[attribute] === option) {
			img.parentNode.classList.add("selected");
		}
	});
}

function removedoor(doorId) {
	// Convert doorId to a number
	doorId = Number(doorId);

	// Find the door configuration by ID
	const doorConfigIndex = doorConfigurations.findIndex(
		(config) => Number(config.id) === doorId
	);

	// If a door configuration was found, remove it from the array
	if (doorConfigIndex >= 0) {
		doorConfigurations.splice(doorConfigIndex, 1);

		// Reset the selected options if the removed door was the last selected one
		if (selectedOptions.id === doorId) {
			resetSelectedOptions();
		}

		// Log that the configuration has been removed
		console.log(`door configuration with ID ${doorId} has been removed.`);

		// Save the updated door configurations to localStorage
		localStorage.setItem(
			"doorConfigurations",
			JSON.stringify(doorConfigurations)
		);
	} else {
		console.error(`Could not find door configuration with ID ${doorId}`);
	}

	// Remove the corresponding summary element
	const summaryElement = document.getElementById(`summary-${doorId}`);
	if (summaryElement) {
		summaryElement.remove();
	}

	// Log the updated door configurations
	console.log("Updated door configurations:", doorConfigurations);
	checkdoorConfigurations(doorConfigurations);
}

function checkdoorConfigurations(doorConfigurations) {
	if (doorConfigurations.length === 0) {
		document.getElementById("no-config-doors-msg").style.display = "block";
		//console.log("warning visible");
		document.getElementById("view-quote-summary-btn").style.display =
			"none";
		//console.log("button hidden");
		document.getElementById("configure-another-door").style.display =
			"none";
		//console.log("configure more button hidden");
	} else {
		document.getElementById("no-config-doors-msg").style.display = "none";
		//console.log("warning hidden");
		document.getElementById("view-quote-summary-btn").style.display =
			"block";
		//console.log("button visible");
		document.getElementById("configure-another-door").style.display =
			"block";
		//console.log("configure more button visable");
	}
}

window.addEventListener("load", (event) => {
	checkdoorConfigurations(doorConfigurations);
});

function resetSelectedOptions() {
	selectedOptions = {
		id: null,
		doorStyle: null,
		dimensionsWidth: null,
		dimensionsHeight: null,
		externalFrameColor: null,
		internalFrameColor: null,
		handleColor: null,
		glazingStyle: null,
		userInfo: null
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

	// Check if the door configuration already exists
	const existingIndex = doorConfigurations.findIndex(
		(config) => config.id === selectedOptions.id
	);
	if (existingIndex >= 0) {
		// Update the existing door configuration
		doorConfigurations[existingIndex] = { ...selectedOptions };
	} else {
		// Add the new door configuration
		doorConfigurations.push({ ...selectedOptions });
	}

	// Format door configurations into a nicely formatted message
	const message = doorConfigurations
		.map((config) => {
			return `
      Door ID: ${config.id}<br>
      Door Style: ${config.doorStyle}<br>
      Door Dimensions: ${config.dimensionsWidth} x ${config.dimensionsHeight} mm<br>
      External Door Frame Color: ${config.externalFrameColor}<br>
      Internal Door Frame Color: ${config.internalFrameColor}<br>
      Door Handle Color: ${config.handleColor}<br>
      Door Glazing Style: ${config.glazingStyle}<br>
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
				type: "door",
				name: selectedOptions.userInfo.name,
				email: selectedOptions.userInfo.email,
				phone: selectedOptions.userInfo.phone,
				postcode: selectedOptions.userInfo.postcode,
				message: message // Insert the door configurations into the message
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
				// After a successful email send, clear the localStorage and reset arrays and objects
				localStorage.removeItem("doorConfigurations"); // Clear localStorage
				doorConfigurations.splice(0, doorConfigurations.length); // Clear array
				resetSelectedOptions(); // Clear selectedOptions object
				// Redirect to a new page
				door.location.href = "/success";
			},
			function (error) {
				console.log("Failed...", error);
			}
		);
});
