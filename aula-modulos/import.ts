import { Spaceship } from "./export";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let navinhaVlazackie: BattleSpaceship = {
  name: "Navinha Vlazackie",
  pilot: "Barbie Astronauta",
  speed: 300,
  weapons: 6,
};
