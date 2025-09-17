type FishPosition = {
  verticalStart: number;
  horizontalStart: "right" | "left";
};
class Fish {
  element: HTMLElement;

  constructor(start: FishPosition) {
    this.element = document.createElement("div");
    this.element.classList.add("fish");
    this.element.style.bottom = `${start.verticalStart}vh`;
    if (start.horizontalStart === "left") {
      this.element.classList.add("leftStart");
    } else {
      this.element.classList.add("rightStart");
    }
  }
  move() {}
}

const createFish = (water: HTMLElement, position: FishPosition) => {
  const fish = new Fish(position);
  water.append(fish.element);
};

document.addEventListener("DOMContentLoaded", () => {
  const boat = document.getElementById("boat");
  const maxLeft = 0;
  const water = document.getElementById("water");

  let boatDimensions;
  let maxRight: number;

  if (boat) {
    boatDimensions = boat?.getBoundingClientRect();
    maxRight = window.innerWidth - boatDimensions.width;
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

  //   createFish(water!, { verticalStart: 10, horizontalStart: "left" });
});
