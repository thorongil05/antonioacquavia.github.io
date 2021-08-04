var url = "https://portfolio-aa-server.herokuapp.com"


function getAsyncEducationalExperiences() {
    console.log('Call async educational experiences')
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = 'json'
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var education_experiences = xmlHttp.response.education
            console.log(education_experiences.length)
            var div = document.getElementById("education")
            div.innerHTML = ''; // to remove all the actual experiences
            education_experiences.forEach(element => {
                div.appendChild(getExperienceTemplate(element))
            });
        } else {
            console.log("State not ready or status != 200")
        }
    }
    xmlHttp.open( "GET", url + '/education_exp', true);
    //xmlHttp.withCredentials = true
    xmlHttp.send()
}

function getAsyncWorkingExperiences() {
    console.log('Call async working experiences')
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = 'json'
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.log(xmlHttp.response)
            var working_experiences = xmlHttp.response.workingExp
            console.log(working_experiences.length)
            var div = document.getElementById("working")
            div.innerHTML = ''; // to remove all the actual experiences
            working_experiences.forEach(element => {
                div.appendChild(getExperienceTemplate(element))
            });
        } else {
            console.log("State not ready or status != 200")
        }
    }
    xmlHttp.open( "GET", url + '/working_exp', true);
    xmlHttp.send();
}

function getSkills() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url + '/skills', false );
    xmlHttp.send( null );
    console.log(xmlHttp.responseText)
    return xmlHttp.responseText
}