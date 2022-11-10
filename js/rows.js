// // Ejercicio 7.1
function getAge(dateString) { //dateString es la fecha del nacimiento de un jugador en formato Año-Mes-Dia
    let arrayFechNacimiento = dateString.split("-");
    let actualDate = new Date(); //Fecha actual  

    let edad = (actualDate.getUTCFullYear() - arrayFechNacimiento[0])-1;

    // console.log("Dia actual: " + actualDate.getUTCDate());
    // console.log("Dia Nacimiento: " + arrayFechNacimiento[2]);
    // console.log("-----------------------------------------------");
    // console.log("Mes actual: " + (actualDate.getUTCMonth()+1));
    // console.log("Mes Nacimiento: " + arrayFechNacimiento[1]);


    if( ( arrayFechNacimiento[1] < (actualDate.getUTCMonth()+1) ) || ( (arrayFechNacimiento[1] == (actualDate.getUTCMonth()+1)) && (arrayFechNacimiento[2] <= actualDate.getUTCDate()) ) ){ //arrayFechNacimiento[1] = mes de nacimiento
        edad++;
    }
    console.log(edad);
}
// Para probar geAge(Date) : getAge("1999-01-14");

//Ejercicio 7.2
function check(theKey, theValue){
    
}


// Ejercicio 7.3
function getPlayer(playerId){

}

// Ejercicio 7.4
function leagueToFlag(leagueId){

}
