function featureTabs() {
  const options = document.querySelectorAll(".nav-options");
  const features = document.querySelectorAll(".feature-tab");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const index = option.dataset.option;
      features.forEach((f) => f.classList.remove("active"));
      document.querySelector(`.features-${index}`).classList.add("active");
    });
  });
}

featureTabs();

document.getElementById("ctaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("inputEmail");
  const errorContainer = emailInput.closest(".error-container");
  const errorIcon = errorContainer.querySelector(".icon-error");
  const errorMessage = errorContainer.querySelector(".error-message");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(emailValue)) {
    // Añadir clase de error
    errorContainer.classList.add("error");
    errorIcon.classList.remove("d-none");
    errorMessage.classList.remove("d-none");
    errorMessage.classList.add("d-block");
  } else {
    // Quitar error si es válido
    errorContainer.classList.remove("error");
    errorIcon.classList.add("d-none");
    errorMessage.classList.add("d-none");
    errorMessage.classList.remove("d-block");
  }
});

function clickRedButton() {
  const btn = document.getElementById("ctaButton");

  btn.addEventListener("click", () => {
    if (window.innerWidth >= 992) {
      btn.classList.add("clicked");
    }
  });
}

clickRedButton();



