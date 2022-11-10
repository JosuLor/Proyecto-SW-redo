import { folder, leftArrow } from "./fragments.js";
import { fetchJSON } from "./loaders.js";

// ejercicio 6.1
function differenceInDays(date1) {
  let difference = new Date().getTime() - date1.getTime();
  let days = Math.floor(difference / (1000 * 3600 * 24));
  return days + 1; //ese +1 es para que cuente el dia actual
}

let difference_In_Days = differenceInDays(new Date("08-18-2022"));

window.onload = function () {
  document.getElementById("gamenumber").innerText =
    difference_In_Days.toString();
  document.getElementById("back-icon").innerHTML = folder + leftArrow;
};

let game = {
  guesses: [],
  solution: {},
  players: [],
  leagues: [],
};

// ejercicio 6.3
function getSolution(players, solutionArray, difference_In_Days) {
  let sol = solutionArray[difference_In_Days - 1];
  let player = players.find((p) => p.id == sol.id);
  //return the player on a json
  return player;
}

Promise.all([fetchJSON("fullplayers"), fetchJSON("solution")]).then(
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
  }
);

//sfghjksghfjkglhkkdstaytkflg