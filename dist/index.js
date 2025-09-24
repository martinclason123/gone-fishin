import bass from "../src/assets/speciesSVGs.js";
import { getAnimation } from "./utilities.js";
class Fish {
    constructor(start) {
        const { keyFrame, bottom, animation } = getAnimation();
        this.element = document.createElement("figure");
        this.element.classList.add("fish");
        this.element.style.bottom = bottom;
        this.element.style.animation = animation;
        const style = document.createElement("style");
        style.innerHTML = keyFrame;
        document.head.appendChild(style);
        if (start.horizontalStart === "left") {
            this.element.classList.add("leftStart");
        }
        else {
            this.element.classList.add("rightStart");
        }
    }
    move() { }
}
class Bass extends Fish {
    constructor(start) {
        super(start);
        this.element.innerHTML = bass;
        this.element.classList.add("bass");
    }
}
const createFish = (species = "sunfish", water, position) => {
    let fish;
    switch (species) {
        case "bass":
            fish = new Bass(position);
        case "perch":
            fish = new Bass(position);
        case "sunfish":
            fish = new Bass(position);
    }
    water.append(fish.element);
};
document.addEventListener("DOMContentLoaded", () => {
    const boat = document.getElementById("boat");
    const maxLeft = 0;
    const water = document.getElementById("water");
    let boatDimensions;
    let maxRight;
    if (boat) {
        boatDimensions = boat?.getBoundingClientRect();
        maxRight = window.innerWidth - boatDimensions.width;
    }
    const move = (element, direction) => {
        const left = parseInt(element.style.left || "0px");
        let moveMentPx = 50;
        if (direction === "left") {
            if (left - moveMentPx < maxLeft) {
                console.log("overflowing!", { maxLeft, moveMentPx });
                moveMentPx = maxLeft + left;
            }
            element.style.left = `${left - moveMentPx}px`;
        }
        else if (direction === "right") {
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
    createFish("bass", water, { verticalStart: 10, horizontalStart: "left" });
});
