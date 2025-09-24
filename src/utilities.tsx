export const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const getDirection = (): "left" | "right" => {
  const num = getRandomNumber(1, 2);
  if (num < 1) {
    return "left";
  }
  return "right";
};

export const getRandomY = (): number => {
  const depth = getRandomNumber(2, 80);
  return depth;
};

export const getRandomSpeed = (): number => {
  const speed = getRandomNumber(2, 6);
  return speed;
};

export const getRandomX = (): number => {
  const width = getRandomNumber(5, 95);
  return width;
};

export const getSwimInObject = () => {
  return {
    y: getRandomY(),
    x: getRandomX(),
    speed: getRandomSpeed(),
    direction: getDirection(),
  };
};

export const getAnimation = () => {
  const { x, y, speed, direction } = getSwimInObject();

  const keyFrame = `
    @keyframes swimIn-${direction} {
     from {
        transform: translateX(${direction === "left" ? "-120vw" : "120vw"});
     }
     to {
       transform: translateX(${x}vw);
     }
    }`;

  const bottom = `${y}vh`;
  const animation = `swimIn-${direction} ${speed}s linear forwards`;

  return { keyFrame, bottom, animation };
};
