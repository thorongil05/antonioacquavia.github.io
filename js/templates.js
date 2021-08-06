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

function getSkillTemplate(skill) {
    console.log(skill)

    var ext_div = document.createElement("div");
    ext_div.className = "skill-item padd-15"

    var h5 = document.createElement("h5");
    h5.textContent = skill.name;
    ext_div.appendChild(h5);


    var div_progress = document.createElement("div");
    div_progress.className = "progress";

    var div_progress_in = document.createElement("div");
    div_progress_in.className = "progress-in";
    div_progress_in.style = "width: " + skill.value +"%;";
    div_progress.appendChild(div_progress_in);

    var div_skill_percentage = document.createElement("div");
    div_skill_percentage.className = "skill-percent";
    div_skill_percentage.textContent = skill.value + "%"
    div_progress.appendChild(div_skill_percentage);

    ext_div.appendChild(div_progress);
    return ext_div;
}