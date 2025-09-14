console.log("Gone Fishin'");

document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game");

  const boat = document.getElementById("boat");
  let boatDimensions;
  let gameDimensions;
  let maxRight: number;
  let maxLeft: number;

  if (boat && gameContainer) {
    gameDimensions = gameContainer.getBoundingClientRect();
    console.log("game dimensions", gameDimensions);
    boatDimensions = boat?.getBoundingClientRect();
    maxRight = gameDimensions.width - boatDimensions.width;
    maxLeft = 0;
  }

  const move = (element: HTMLElement, direction: "left" | "right") => {
    const left = parseInt(element.style.left || "0px");
    let moveMentPx = 50;

    if (direction === "left") {
      if (left - moveMentPx < maxLeft) {
        console.log("overflowing!", { maxLeft, moveMentPx });
        moveMentPx = maxLeft + left;
      }
      element.style.left = `${left - moveMentPx}px`;
    } else if (direction === "right") {
      if (left + moveMentPx > maxRight) {
        moveMentPx = maxRight - left;
      }
      element.style.left = `${left + moveMentPx}px`;
    }
  };

  if (boat) {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        move(boat, "left");
      }
      if (event.key === "ArrowRight") {
        move(boat, "right");
      }
    });
  }
});
