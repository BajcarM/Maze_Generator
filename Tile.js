export default class Tile {
  constructor(id) {
    this.id = id;
    this.wall = true;

    document.querySelector(
      ".gameboard"
    ).innerHTML += `<div class="tile" data-id="${this.id}"></div>`;
  }

  switchTo = (type) => {
    const tile = document.querySelector(`[data-id="${this.id}"]`);

    tile.className = `tile tile-${type}`;

    type === "wall" ? (this.wall = true) : (this.wall = false);
  };

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
