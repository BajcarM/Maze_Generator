export default class Controls {
  constructor(targetGameboard) {
    this.targetGameboard = targetGameboard;

    this.buttons = ["start"];
    this.gameboardReady = true;

    this.targetGameboard.controls = this;

    document.querySelector(".control-panel").innerHTML = this.buttons
      .map((button) => {
        return `
        <button type="button" class="button-${button}" data-id="${button}">
          <div class="button-image"></div>
          <div class="button-name">${button}</div>
        </button>
        `;
      })
      .join("");

    document.querySelector(".button-start").addEventListener("click", () => {
      if (this.gameboardReady) {
        this.targetGameboard.createRandomMaze();
      }
    });
  }

  gameboardIsReady(status) {
    switch (status) {
      case "working":
        this.gameboardReady = false;
        document.querySelector(".button-start").classList.toggle('button-working')
        break;
      case "ready":
        this.gameboardReady = true;
        document.querySelector(".button-start").classList.toggle('button-working')
        break;
    }
  }
}
