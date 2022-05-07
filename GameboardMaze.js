import Tile from "./Tile.js";

export default class GameboardMaze {
  constructor(rowsCount, colsCount, height, width) {
    this.rowsCount = rowsCount;
    this.colsCount = colsCount;
    this.height = height;
    this.width = width;

    this.tilesArray = [];

    document.querySelector(".gameboard").innerHTML = "";

    for (let i = 0; i < rowsCount * colsCount; i++) {
      this.tilesArray.push(new Tile(i));
    }

    this.tilesArray.forEach((tile) => {
      tile.switchTo("wall");
    });
  }

  createRandomMaze = () => {
    let remainingTiles = [];

    for (let row = 1; row < this.rowsCount; row += 2) {
      for (let col = 1; col < this.colsCount; col += 2) {
        const id = row * this.colsCount + col;

        remainingTiles.push(id);
      }
    }



    const stackTiles = [remainingTiles[0]];

    let drill = setInterval(() => {
      console.log(stackTiles);

      const currentTile = stackTiles.pop();

      this.tilesArray[currentTile].switchTo("drill-head");

      const possibleMoves = remainingTiles.reduce((acc, tile) => {
        if (
          tile === currentTile + 2 ||
          tile === currentTile - 2 ||
          tile === currentTile + 2 * this.colsCount ||
          tile === currentTile - 2 * this.colsCount
        ) {
          acc.push(tile);
        }

        return acc;
      }, []);

      if (possibleMoves.length > 0) {
        const randomMove = Math.floor(Math.random() * possibleMoves.length);
        const nextMove = possibleMoves[randomMove];
        const wallBetween = (currentTile + possibleMoves[randomMove]) / 2;

        stackTiles.push(currentTile);
        stackTiles.push(nextMove);

        remainingTiles = remainingTiles.filter((tile) => {
          return tile !== nextMove;
        });

        this.tilesArray[nextMove].switchTo("drill-head");
        this.tilesArray[wallBetween].switchTo("drill-tail");
        this.tilesArray[currentTile].switchTo("drill-tail");
      } else {
        const wallBetween =
          (currentTile + stackTiles[stackTiles.length - 1]) / 2;

        this.tilesArray[currentTile].switchTo("path");
        if (wallBetween) {
          this.tilesArray[wallBetween].switchTo("path");
        }
      }

      if (stackTiles.length === 0) {
        clearInterval(drill);
      }
    }, 50);

    this.tilesArray[this.colsCount].switchTo('path')
  };
}
