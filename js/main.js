console.log("Hello Guys")

window.addEventListener("load", function() {
    setTimeout(()=> {
        document.querySelector(".preloader").classList.add("opacity-0");
        document.querySelector(".preloader").style.display = "none";
    }, 800)
    getAsyncEducationalExperiences()
    getAsyncWorkingExperiences()
})

var options = { year: 'numeric', month: 'long', day: 'numeric' };
var myBirthday = new Date(1996, 4, 5)
var infoBirthdayDiv = document.querySelector('.info-birthday')

if (infoBirthdayDiv) {
    var infoBirthdaySpan = infoBirthdayDiv.querySelector("span")
    if(infoBirthdaySpan) {
        infoBirthdaySpan.innerHTML = myBirthday.toLocaleDateString("en-EN",options)
    }
    var infoAgeDiv = document.querySelector(".info-age")
    if (infoAgeDiv) {
        var infoAgeSpan = infoAgeDiv.querySelector("span")
        if (infoAgeSpan) {
            infoAgeSpan.innerHTML = calculate_age(myBirthday)
        }
    }    
}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

// Portfolio Item Filter

var filterContainer = document.querySelector(".portfolio-filter")

if (filterContainer && filterContainer.children) {
    var filterButtons = filterContainer.children;
    var totalFilterBtn = filterButtons.length;
    var portfolioItems = document.querySelectorAll(".portfolio-item");
    var totalPortfolioItems = portfolioItems.length;
    console.log(totalPortfolioItems);
}

for (let i = 0; i < totalFilterBtn; i++) {
    const element = filterButtons[i];
    element.addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolioItems ; k++) {
            const element = portfolioItems[k];
            if(filterValue === element.getAttribute("data-category")) {
                element.classList.add("show")
                element.classList.remove("hide")
            } else {
                element.classList.add("hide")
                element.classList.remove("show")
            }
            if(filterValue === "all") {
                element.classList.add("show")
                element.classList.remove("hide") 
            }
        }
    })
}

// Portfolio Lightbox
var lightbox = document.querySelector(".lightbox")

if (lightbox) {
    var lightboxImg = lightbox.querySelector(".lightbox-img"),
        lightboxText = lightbox.querySelector(".caption-text"),
        lightboxClose = lightbox.querySelector(".lightbox-close"),
        lightboxCounter = lightbox.querySelector(".caption-counter");
}

    
var itemIndex = 0;

for (let i = 0; i < totalPortfolioItems; i++) {
    const element = portfolioItems[i];
    element.addEventListener("click", function() {
        itemIndex = i;
        changeItem()
        toggleLightbox()
    })
}

function changeItem() {
    const element = portfolioItems[itemIndex];
    var imgSrc = element.querySelector(".portfolio-img img").getAttribute("src")
    lightboxImg.src = imgSrc
    lightboxText.innerHTML = element.querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItems;
}

function toggleLightbox() {
    lightbox.classList.toggle("open")
}

function nextItem() {
    if (itemIndex == totalPortfolioItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem()
}

function previousItem() {
    if (itemIndex == 0) {
        itemIndex = totalPortfolioItems - 1;
    } else {
        itemIndex--;
    }
    changeItem()
}

if (lightbox) {
    lightbox.addEventListener("click", function(event) {
        if(event.target === lightboxClose || event.target === lightbox) { 
            toggleLightbox()
        }
    })
}


// Aside Navbar

var nav = document.querySelector(".nav")

if (nav) {
    var navList = nav.querySelectorAll("li"),
        allSections = document.querySelectorAll(".section");

    for (let i = 0; i < navList.length; i++) {
        const element = navList[i].querySelector("a");
        element.addEventListener("click", function() {

            // Remove Back-Section class
            removeBackSectionClass()

            for (let i = 0; i < navList.length; i++) {
                const element = navList[i].querySelector("a");
                if(element.classList.contains("active")) {
                    // Add  Back-Section class
                    addBackSection(i)
                } 
                element.classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200) {
                asideSectionToggleBtn()
            }
        })
    }    
}

function addBackSection(position) {
    allSections[position].classList.add("back-section");
}

function removeBackSectionClass() {
    for (let j = 0; j < allSections.length; j++) {
        const element = allSections[j];
        element.classList.remove("back-section");
    }
}


function showSection(element) {
    for (let i = 0;  i < allSections.length; i++) {
        const element = allSections[i];
        element.classList.remove("active");
    }
    const href = element.getAttribute("href").split("#");
    const target = href[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < navList.length; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// var hireMeButton = document.querySelector(".hire-me")

// if (hireMeButton) {
//     hireMeButton.addEventListener("click",function() {
//         const sectionIndex = this.getAttribute("data-section-index");
//         showSection(this);
//         updateNav(this);
//         removeBackSectionClass();
//         addBackSection(sectionIndex);
//     }) 
// }


var navTogglerBtn = document.querySelector(".nav-toggler")

if (navTogglerBtn) {
    var aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",asideSectionToggleBtn)
}

function asideSectionToggleBtn() {
    console.log("Toggle Click");
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0;  i < allSections.length; i++) {
        const element = allSections[i];
        element.classList.toggle("open");
    }
}