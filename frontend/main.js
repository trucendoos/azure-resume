//when the domstruture is loaded, run getvisitcout
window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const functionApiUrl = 'https://thisresumecounter.azurewebsites.net/api/GetResumeCounter?code=Sie4OVpdozTErPVyp9vSrinlkOoeR_Il5S0Cxuqrk0eAAzFu5XOy-g==';

const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function api.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}