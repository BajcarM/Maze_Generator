import GameboardMaze from "./GameboardMaze.js";
import Controls from "./Controls.js";

const gameboard = new GameboardMaze(33, 67, 600, 600);
const controls = new Controls(gameboard);

gameboard.createRandomMaze();
