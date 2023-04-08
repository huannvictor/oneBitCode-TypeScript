function cloneShip(ship, newName, newPilot) {
    const newShip = Object.assign({}, ship);
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const falcon = {
    name: "Millenium Falcon",
    pilot: "Han",
};
const xWing = {
    name: "Red Five",
    pilot: "Luke",
    weapons: 4,
    shields: 1,
};
const copy1 = cloneShip(falcon, "Milano", "Peter");
const copy2 = cloneShip(xWing, "Black One", "Poe");
console.log({ copy1, copy2 });
const enemyCopy = cloneShip(falcon, "Enemy", "Enemy");
const enemyCopy2 = cloneShip(falcon, "Enemy", "Enemy");
enemyCopy2.flag = "Imperial";
//* a propriedade flag não funciona em enemyCopy pois ela não herda as propriedades de EnemyShip
console.log({ enemyCopy, enemyCopy2 });
