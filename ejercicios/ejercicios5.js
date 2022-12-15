// //ejercicio 5

//create request http client
const request = new XMLHttpRequest();
//open connection
request.open('GET', 'http://api.football-data.org/v4/competitions/2021/teams', true);
//set headers
request.setRequestHeader('X-Auth-Token', 'b91818bb9ecd4282a9a86754e76f319b');
//send request
request.send();
//handle response and add it to json
request.onload = function () {
    const premiere = JSON.parse(this.response);

    //save premiere to local storage
    localStorage.setItem('premiere', JSON.stringify(premiere));
    console.log(premiere);
}