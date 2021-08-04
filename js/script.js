var currentMenuItem = 0;

window.onload = function() {
    console.log("Welcome in the Antonio's website.");
    var previewContainer = document.getElementById("previewContainer");
    var previewContinueButton = document.getElementById("previewContinueButton");
    previewContinueButton.onclick = function () {
        previewContainer.classList.add("hidden");
        console.log("Preview hidden correctly");
        // alert("The page is not yet implemented.\nThe website will be available very soon.\nEnjoy this typewriting animation.")
    };
}

