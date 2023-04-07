type Planet =
  | "Mercúrio"
  | "Venus"
  | "Terra"
  | "Marte"
  | "Saturno"
  | "Urano"
  | "Netuno";

let planet: Planet;

if (planet === "Terra") {
  console.log("estamos na Terra");
}

type GreetingCallback = (name: string) => string;

function greet(callbackfn: GreetingCallback) {
  let name: "huann";

  callbackfn(name);
}
