"use strict";
console.log("Gone Fishin'");
document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game");
    const boat = document.getElementById("boat");
    let boatDimensions;
    let gameDimensions;
    let maxRight;
    let maxLeft;
    if (boat && gameContainer) {
        gameDimensions = gameContainer.getBoundingClientRect();
        boatDimensions = boat?.getBoundingClientRect();
        maxRight = gameDimensions.width - boatDimensions.width;
        maxLeft = 0;
    }
    const move = (element, direction) => {
        const left = parseInt(element.style.left || "0px");
        let moveMentPx = 5;
        if (direction === "left") {
            if (left - 5 < maxLeft) {
                moveMentPx = maxLeft - left;
            }
            element.style.left = `${left - moveMentPx}px`;
        }
        else if (direction === "right") {
            if (left + 5 > maxRight) {
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
