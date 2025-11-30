"use strict";

function emailError(){

const emailInput = document.getElementById("inputEmail");
const emailValue = emailInput.value.trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const errorMessage = document.querySelector(".error-message");
const imagen = document.querySelector(".icon-error")

if(!emailRegex.test(emailValue)){
    emailInput.style.border = '2px solid red';
    emailInput.style.borderRadius = '6px 6px 0 0';
errorMessage.style.display = "block";
imagen.style.display = "block";


}



}