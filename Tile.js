export default class Tile {
  constructor(id) {
    this.id = id;
    this.wall = true;

    document.querySelector(
      ".gameboard"
    ).innerHTML += `<div class="tile" data-id="${this.id}"></div>`;
  }

  switchTo(type) {
    const tile = document.querySelector(`[data-id="${this.id}"]`);

    switch (type) {
      case "wall":
        this.wall = true;
        tile.classList.remove("tile-type-path");
        tile.classList.add("tile-type-wall");
        break;
      case "path":
        this.wall = false;
        tile.classList.remove("tile-type-wall");
        tile.classList.add("tile-type-path");
        break;
    }
  }

  revealYourself(arg) {
    let iAmCheese = false;

    switch (arg) {
      case undefined:
        console.log("null");
        break;
      case "youAreCheese":
        iAmCheese = true;
        console.log(iAmCheese);
        break;
      case "notCheese":
        iAmCheese = false;
        console.log("not cheese");
        break;
    }
  }
}
