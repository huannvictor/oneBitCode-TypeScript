interface CelestialBody {
  name: string;
  mass: number;
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

try {
  let mercurio: Planet = {
    name: "Mercúrio",
    mass: 3.3 * 10 ** 23,
    population: 0,
    createSatellite: (name: string) => {
      name.length > 0
        ? console.log(`Criando satélite ${name} para ${mercurio.name}`)
        : console.log(`Planeta não possui satélites`);
    },
  };

  let venus: Planet;
  venus = {
    name: "Vênus",
    mass: 4.87 * 10 ** 24,
    population: 7.93e9,
    createSatellite: (name: string) => {
      name.length > 0
        ? console.log(`Criando satélite ${name} para ${mercurio.name}`)
        : console.log(`Planeta não possui satélites`);
    },
  };

  let terra: Planet;
  terra = {
    name: "Terra",
    mass: 5.97 * 10 ** 24,
    population: 7.93e9,
    createSatellite: (name: string) => {
      name.length > 0
        ? console.log(`Criando satélite ${name} para ${mercurio.name}`)
        : console.log(`Planeta não possui satélites`);
    },
  };

  let sun: Star;
  sun = {
    name: "Sol",
    mass: 1.989 * 10 ** 30,
    age: 4.603 * 10 ** 9,
    planets: [mercurio, venus, terra],
  };
} catch (error) {
  console.log(error);
}
