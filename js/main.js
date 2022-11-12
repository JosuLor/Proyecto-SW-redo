import { folder, leftArrow } from "./fragments.js";
import { fetchJSON } from "./loaders.js";
import { setupRows } from './rows.js';
import { autocomplete } from "./autocomplete.js";

export { game }

// ejercicio 6.1
function differenceInDays(date1) {
  let difference = new Date().getTime() - date1.getTime();
  let days = Math.floor(difference / (1000 * 3600 * 24));
  return days + 1; //ese +1 es para que cuente el dia actual
}

let difference_In_Days = differenceInDays(new Date("08-18-2022"));

window.onload = function () {
  document.getElementById("gamenumber").innerText = difference_In_Days.toString();
  document.getElementById("back-icon").innerHTML = folder + leftArrow;
};

// array central
let game = {
  guesses: [],
  solution: {},
  players: [],
  leagues: [],
};


// ejercicio 6.3
function getSolution(players, solutionArray, difference_In_Days) {
  let sol = solutionArray[(difference_In_Days%solutionArray.length) - 1];
  let player = players.find((p) => p.id == sol.id);
  return player;
}

Promise.all([fetchJSON("../json/fullplayers.json"), fetchJSON("../json/solution.json")]).then(
  (values) => {
    let solution;
    [game.players, solution] = values;

    game.solution = getSolution(game.players, solution, difference_In_Days);

    console.log(game.solution);

    document.getElementById(
      "mistery"
    ).src = `https://playfootball.games/media/players/${
      game.solution.id % 32
    }/${game.solution.id}.png`;

    autocomplete(document.getElementById("myInput"), game) //



      // YOUR CODE HERE
      //TODO
    let addRow = setupRows( /* THIS NEEDS A PARAMETER */ );
    // get myInput object...
      // when the user types a number an press the Enter key:
        addRow( /* the ID of the player, where is it? */);
    //  

  }
);

//Ejercicio 7.6

let inputelem = document.getElementById("myInput"); // DEBO comprobar que es así...
inputelem.addEventListener("keydown", (tecla)=>{
  if(tecla.key == "Enter"){  //Enter, sí
    let addRow = setupRows(game);
    addRow(inputelem.value);
  }
});
