"use strict";

function emailError() {
  const emailInput = document.getElementById("inputEmail");
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const errorMessage = document.querySelector(".error-message");
  const imagen = document.querySelector(".icon-error");

  if (!emailRegex.test(emailValue)) {
    emailInput.style.border = "2px solid red";
    emailInput.style.borderRadius = "6px 6px 0 0";
    errorMessage.style.display = "block";
    imagen.style.display = "block";
  }
}




function featureTabs (){
    const options = document.querySelectorAll(".nav-options");
    const features = document.querySelectorAll(".feature-tab");
    
    options.forEach(option => {
      option.addEventListener("click", () => {
        const index = option.dataset.option;   
        features.forEach(f => f.classList.remove("active")); 
        document.querySelector(`.features-${index}`).classList.add("active"); 
      });
    });

}

featureTabs();
