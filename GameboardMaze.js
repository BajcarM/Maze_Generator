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

  createRandomMaze() {
    // function frameWalls(entryTileId) {
    //   const frameWalls = this.tilesArray.filter((tile) => {
    //     return (
    //       tile.id < this.colsCount ||
    //       tile.id > this.colsCount * (this.rowsCount - 1) ||
    //       tile.id % this.colsCount === 0 ||
    //       tile.id % this.colsCount === this.colsCount - 1
    //     );
    //   });

    const remainingTiles = [];
    for (let row = 1; row < this.rowsCount; row += 2) {
      for (let col = 1; col < this.colsCount; col += 2) {
        let id = row * this.colsCount + col;

        remainingTiles.push(this.tilesArray[id]);
      }
    }
    remainingTiles.forEach((tile) => {
      tile.switchTo("path");
    });
  }
}
