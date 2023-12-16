const form = document.querySelector(".header__form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const input = document.querySelector(".js__search-input");
      const inputValue = input.value.toLowerCase();
  
      if (inputValue.includes("start")) {
        window.location.href = "Get_started.html";
      } else if (inputValue.includes("document")) {
        window.location.href = "Documentation.html";
      } else if (inputValue.includes("mission") || inputValue.includes("vision") || inputValue.includes("company") || inputValue.includes("about you")){
        window.location.href = "AboutUs.html";
      } else if (inputValue.includes("home") || inputValue.includes("main")){
         window.location.href = "Intro%20page.html"; 
      } else if (inputValue.includes("code") || inputValue.includes("source")|| inputValue.includes("web")){
         window.location.href = "code.html";
      } else if (inputValue.includes("contact") || inputValue.includes("report")|| inputValue.includes("problem")|| inputValue.includes("issue")|| inputValue.includes("error")|| inputValue.includes("work")){
        window.location.href = "contact_form.html";
      } else if (inputValue.includes("feature") || inputValue.includes("function")|| inputValue.includes("secret")|| inputValue.includes("research")|| inputValue.includes("google")|| inputValue.includes("keys")){
          window.location.href = "cheat_keys.html";
      } else{
        window.location.href = "NoPageFound.html";
      }

    });
