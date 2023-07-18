emailjs.init("SMAtirpg6hG7wZzBt");

// Retrieve data from local storage
var windowConfigurations = JSON.parse(
	localStorage.getItem("windowConfigurations")
);
var doorConfigurations = JSON.parse(localStorage.getItem("doorConfigurations"));

// Update the form values
document.getElementById("windowConfigurations").value = JSON.stringify(
	windowConfigurations,
	null,
	2
);
document.getElementById("doorConfigurations").value = JSON.stringify(
	doorConfigurations,
	null,
	2
);

// Format window configurations
var formattedWindowConfigurations = "";
if (windowConfigurations && windowConfigurations.length > 0) {
	formattedWindowConfigurations += "Windows:\n\n";
	windowConfigurations.forEach(function (window) {
		formattedWindowConfigurations +=
			"Customer Window SKU: " + window.id + "\n";
		formattedWindowConfigurations +=
			"Window Style: " + window.windowStyle + "\n";
		formattedWindowConfigurations +=
			"Window Dimensions: " +
			window.dimensionsWidth +
			" x " +
			window.dimensionsHeight +
			" mm\n";
		formattedWindowConfigurations +=
			"External Frame Color: " + window.externalFrameColor + "\n";
		formattedWindowConfigurations +=
			"Internal Frame Color: " + window.internalFrameColor + "\n";
		formattedWindowConfigurations +=
			"Handle Color: " + window.handleColor + "\n";
		formattedWindowConfigurations +=
			"Glazing Style: " + window.glazingStyle + "\n\n";
	});
}

// Format door configurations
var formattedDoorConfigurations = "";
if (doorConfigurations && doorConfigurations.length > 0) {
	formattedDoorConfigurations += "Doors:\n\n";
	doorConfigurations.forEach(function (door) {
		formattedDoorConfigurations += "Customer Door SKU: " + door.id + "\n";
		formattedDoorConfigurations += "Door Style: " + door.doorStyle + "\n";
		formattedDoorConfigurations +=
			"Door Dimensions: " +
			door.dimensionsWidth +
			" x " +
			door.dimensionsHeight +
			" mm\n";
		formattedDoorConfigurations +=
			"External Door Frame Color: " + door.externalFrameColor + "\n";
		formattedDoorConfigurations +=
			"Internal Door Frame Color: " + door.internalFrameColor + "\n";
		formattedDoorConfigurations +=
			"Door Handle Color: " + door.handleColor + "\n";
		formattedDoorConfigurations +=
			"Door Glazing Style: " + door.glazingStyle + "\n\n";
	});
}

// Send the form data using email.js
document
	.getElementById("contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the form from submitting normally

		// Retrieve form data
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value;
		var postcode = document.getElementById("postcode").value;
		var windowConfigurationsString = JSON.stringify(
			windowConfigurations,
			null,
			2
		);
		var doorConfigurationsString = JSON.stringify(
			doorConfigurations,
			null,
			2
		);

		// Prepare the template parameters for email.js
		var templateParams = {
			name: name,
			email: email,
			phone: phone,
			postcode: postcode,
			windowConfigurations: formattedWindowConfigurations,
			doorConfigurations: formattedDoorConfigurations
		};

		// Send the email using email.js
		emailjs
			.send("service_2unt24a", "template_o9wu516", templateParams)
			.then(
				function (response) {
					console.log(
						"Email sent successfully!",
						response.status,
						response.text
					);
					// Clear localStorage for windowConfigurations and doorConfigurations
					localStorage.removeItem("windowConfigurations");
					localStorage.removeItem("doorConfigurations");
					window.location.href = "thank-you.html";
					// You can display a success message or redirect to another page here
				},
				function (error) {
					console.error("Failed to send email.", error);
					// You can display an error message here
				}
			);
	});
