export {updateStats, getStats, initState}

// ejercicio 9.1
let initState = function(what, solutionId) { 

    let item = localStorage.getItem(what);
    let respuesta = [];
    let varJson;
    
    // si no existe el item en el localStorage, se crea una variable con formato JSON y luego se convierte en un objeto JSON
    // si existe el item en el localStorage, se convierte el string en un objeto JSON
    if (item == null) {
        item = { "guesses" : [], "solution": -1}; 
        varJson = JSON.parse(item); 
    } else { 
        varJson = JSON.parse(item); 
        respuesta.push(varJson); 
    }
    
    respuesta.push(function(guess) {
        varJson.guesses.push(guess);
        localStorage.setItem(what, JSON.stringify(varJson));
    });
    
    return respuesta;
}

function successRate (e){
    // YOUR CODE HERE
}

let getStats = function(what) {
    // YOUR CODE HERE
    //
};


function updateStats(t){
 // YOUR CODE HERE
};


let gamestats = getStats('gameStats');

