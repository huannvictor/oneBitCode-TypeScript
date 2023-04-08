interface Ship {
  name: string;
  pilot: string;
}

interface Fighter extends Ship {
  weapons: number;
  shields: number;
}

interface Transport extends Ship {
  capacity: number;
}

interface Speeder extends Ship {
  speed: number;
  acceleration: number;
}

function cloneShip<ShipType extends Ship>(
  ship: ShipType,
  newName: string,
  newPilot: string
) {
  const newShip = { ...ship };
  newShip.name = newName;
  newShip.pilot = newPilot;
  return newShip;
}

const falcon: Ship = {
  name: "Millenium Falcon",
  pilot: "Han",
};

const xWing: Fighter = {
  name: "Red Five",
  pilot: "Luke",
  weapons: 4,
  shields: 1,
};

const copy1 = cloneShip(falcon, "Milano", "Peter");
const copy2 = cloneShip(xWing, "Black One", "Poe");

console.log({ copy1, copy2 });

interface EnemyShip {
  name: string;
  pilot: string;
  flag?: string;
}

const enemyCopy = cloneShip(falcon, "Enemy", "Enemy");
const enemyCopy2 = cloneShip<EnemyShip>(falcon, "Enemy", "Enemy");

enemyCopy2.flag = "Imperial";

//* a propriedade flag não funciona em enemyCopy pois ela não herda as propriedades de EnemyShip

console.log({ enemyCopy, enemyCopy2 });
