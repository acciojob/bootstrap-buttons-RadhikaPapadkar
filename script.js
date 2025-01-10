//your code here
document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.getElementById("buttons-container");

  const buttonConfigs = [
    { id: "button-1", text: "Primary Button", classes: "btn btn-primary" },
    { id: "button-2", text: "Outline Secondary", classes: "btn btn-outline-secondary" },
    { id: "button-3", text: "Success Large", classes: "btn btn-success btn-lg" },
    { id: "button-4", text: "Danger Small", classes: "btn btn-danger btn-sm" },
    { id: "button-5", text: "Warning Full-Width", classes: "btn btn-warning btn-lg w-100" },
    { id: "button-6", text: "Disabled Info", classes: "btn btn-info", disabled: true },
    { id: "button-7", text: "Light Button", classes: "btn btn-light" },
    { id: "button-8", text: "Link Button", classes: "btn btn-link", href: "#" },
  ];

  buttonConfigs.forEach((config) => {
    const button = document.createElement(config.href ? "a" : "button");
    button.id = config.id;
    button.textContent = config.text;
    button.className = config.classes;

    if (config.disabled) button.setAttribute("disabled", true);
    if (config.href) button.setAttribute("href", config.href);

    buttonsContainer.appendChild(button);
  });
});
