function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
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
