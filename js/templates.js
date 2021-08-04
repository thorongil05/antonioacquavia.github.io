function getExperienceTemplate(experience) {
    console.log(experience)
    var div = document.createElement("div")
    div.className = "timeline-item"
    
    var circleDotDiv = document.createElement("div")
    circleDotDiv.className = "circle-dot"
    div.appendChild(circleDotDiv)

    var h6 = document.createElement("h6")
    h6.className = "timeline-date"
    div.appendChild(h6)

    var i = document.createElement("i")
    i.classList.add("fa")
    i.classList.add("fa-calendar")
    h6.appendChild(i)
    h6.appendChild(document.createTextNode(experience.period))

    console.log(h6)

    var h4 = document.createElement("h4")
    h4.classList.add("timeline-title")
    if (experience.hasOwnProperty('originalName')) {
        h4.textContent = experience.originalName
    } else {
        h4.textContent = experience.name
    }
    div.appendChild(h4)

    var p = document.createElement("p")
    p.classList.add("timeline-text")
    p.textContent = experience.description
    div.appendChild(p)

    return div
}