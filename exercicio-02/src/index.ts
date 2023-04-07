type PlanetSituation = "habitado" | "habitável" | "inabitável" | "inexplorado";
type PlanetCoordenantes = [number, number, number, number];
type Planet = {
  name: string;
  coordinates: PlanetCoordenantes;
  situation: PlanetSituation;
  satellites: string[];
};

const planets: Planet[] = [];

function addPlanet(
  name: string,
  coordinates: PlanetCoordenantes,
  situation: PlanetSituation
) {
  const newPlanet: Planet = {
    name,
    coordinates,
    situation,
    satellites: [],
  };

  planets.push(newPlanet);

  alert(`O planeta ${name} foi registrado com sucesso.`);
}

function findPlanet(searchPlanet: string) {
  const planet = planets.find(
    (foundPlanet) => foundPlanet.name === searchPlanet
  );

  return planet ?? false;
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
  planet.situation = situation;

  alert(
    `A situação do planeta ${planet.name} foi atualizada para ${situation}.`
  );
}

function addSatellite(satelliteName: string, planet: Planet) {
  planet.satellites.push(satelliteName);

  alert(
    `Satélite ${satelliteName} associado com sucesso ao planeta ${planet.name}.`
  );
}

function removeSatellite(satelliteName: string, planet: Planet) {
  const pos = planet.satellites.indexOf(satelliteName);

  planet.satellites.splice(pos, 1);

  alert(
    `Satélite: ${satelliteName} removido com sucesso do planeta ${planet.name}`
  );
}

function promptValidSituation() {
  let situation: PlanetSituation;
  let validSituation = false;

  while (!validSituation) {
    const situationInput = prompt(`
      Informe a situação do Planeta:
      1 - Habitado
      2 - Habitável
      3 - Inabitável
      4 - Inexplorado
    `);

    switch (situationInput) {
      case "1":
        situation = "habitado";
        validSituation = true;
        break;
      case "2":
        situation = "habitável";
        validSituation = true;
        break;
      case "3":
        situation = "inabitável";
        validSituation = true;
        break;
      case "4":
        situation = "inexplorado";
        validSituation = true;
        break;
      default:
        alert("Situação inserida inválida.");
        break;
    }
  }

  return situation;
}

function promptValidPlanet(callbackfn: (planet: Planet) => void) {
  const planetName = prompt("Insira o nome do planeta: ");
  const planet = findPlanet(planetName);

  planet
    ? callbackfn(planet)
    : alert("Planeta não encontrado. Retornando ao menu.");
}

function firstMenuOption() {
  const name = prompt("Insira o nome do planeta: ");

  const coordA = Number(prompt("Informe a 1ª coordenada: "));
  const coordB = Number(prompt("Informe a 2ª coordenada: "));
  const coordC = Number(prompt("Informe a 3ª coordenada: "));
  const coordD = Number(prompt("Informe a 4ª coordenada: "));

  const situation = promptValidSituation();

  const confirmation = confirm(`
    Confirma o registro do planeta ${name}?
    Coordenadas: (${coordA}, ${coordB}, ${coordC}, ${coordD})
    Situação: ${situation}
  `);

  // if (confirmation) {
  //   addPlanet(name, [coordA, coordB, coordC, coordD], situation);
  // }

  confirmation && addPlanet(name, [coordA, coordB, coordC, coordD], situation);
}

function secondMenuOption() {
  promptValidPlanet((planet) => {
    const situation = promptValidSituation();
    updateSituation(situation, planet);
  });
}

function thirdMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt("Insira o nome do satélite a ser associado: ");
    addSatellite(satellite, planet);
  });
}

function fourthMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt("Insira o nome do satélite a ser removido: ");
    removeSatellite(satellite, planet);
  });
}

function fifthMenuOption() {
  let list = `Planetas:\n`;

  planets.forEach((planet) => {
    const [a, b, c, d] = planet.coordinates;

    list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      ${planet.satellites.length} satélites: 
    `;

    planet.satellites.forEach((satellite) => (list += `--- ${satellite}\n`));

    alert(list);
  });
}

let userOption = 0;

while (userOption !== 6) {
  const menu = `Menu
  1 - Registrar um novo planeta
  2 - Atualizar situação do planeta
  3 - Adicionar um satélite ao planeta
  4 - Remover um satélite do planeta
  5 - Listar todos os planetas
  6 - Sair
  `;

  userOption = Number.parseInt(prompt(menu));

  switch (userOption) {
    case 1:
      firstMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      fifthMenuOption();
      break;
    case 6:
      alert("Encerrando o sistema");
      break;
    default:
      alert("Opção inválida, retornando ao painel principal");
      break;
  }
}
