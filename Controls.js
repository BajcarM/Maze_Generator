export default class Controls {
  constructor(targetGameboard) {
    this.targetGameboard = targetGameboard;

    this.buttons = ["start"];

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
      if (!this.targetGameboard.working) {
        this.targetGameboard.createRandomMaze();
      }
    });
  }
}
