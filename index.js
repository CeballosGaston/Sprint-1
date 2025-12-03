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