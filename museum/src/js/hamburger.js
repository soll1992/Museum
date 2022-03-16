(function() {
  
    let toggles = document.querySelectorAll(".c-hamburger");
    let burgerBody = document.querySelector(".navigation-menu")
    let textContent = document.querySelector('.text-content-wrapper')
  
    for (let i = toggles.length - 1; i >= 0; i--) {
      let toggle = toggles[i];
      toggleHandler(toggle);

      document.addEventListener('click', e => {
        let target = e.target;
        let its_hamburger = target == toggle || toggle.contains(target);        
  
        if (!its_hamburger) {
          toggle.classList.remove("is-active");
          burgerBody.classList.remove("navigation-menu-active");
          textContent.classList.remove("text-content-wrapper-hidden");
        }
    });
    };
  
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();

        (burgerBody.classList.contains("navigation-menu-active") === true) ? burgerBody.classList.remove("navigation-menu-active") : burgerBody.classList.add("navigation-menu-active");

        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

        (this.classList.contains("is-active") === true) ? textContent.classList.add("text-content-wrapper-hidden") : textContent.classList.remove("text-content-wrapper-hidden");
      });
    }
  
  })();

