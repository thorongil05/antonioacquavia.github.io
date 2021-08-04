const links = document.querySelectorAll(".alternative-style");

function setActiveStyle(color) {
    console.log("Color:", color)
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        console.log("Attribute:", element.getAttribute("title"))
        if(color === element.getAttribute("title")) {
            element.removeAttribute("disabled")
        } else {
            element.setAttribute("disabled", "true")
        }
    }
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher .toggle-style-switcher .fa").classList.toggle("fa-spin");
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Body Skin 
var bodySkin =  document.querySelectorAll(".body-skin"),
    totalBodySkin =  bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    const element = bodySkin[i];
    element.addEventListener("change", function() {
        if(this.value === "dark") {
            document.body.className = "dark";
        } else {
            document.body.className = "light";
        }
    })
}