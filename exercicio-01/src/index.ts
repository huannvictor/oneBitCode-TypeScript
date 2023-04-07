const spaceships = [];

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const newSpaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(newSpaceship);
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => ship.name === name);

  return spaceship;
}

function addCrewMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`${member} não pode ser adicionado. Limite da tripulação atingido.`);
  } else {
    spaceship.crew.push(member);

    alert(`${member} foi adicionado à tripulação da ${spaceship.name}`);
  }
}

function sendInMission(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission) {
    alert(`${spaceship.name} não pode ser enviada. Nave em missão.`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`);
  } else {
    spaceship.inMission = true;

    alert(`${spaceship.name} enviada à missão!`);
  }
}

function firstMenuOption() {
  const name = prompt(`Insira o nome da nave: `);
  const pilot = prompt(`Insira o nome do Piloto: `);
  const crewLimit = Number(
    prompt(`Insira a quantidade limite de tripulantes: `)
  );

  const confirmation = confirm(`
  Confira o registro da nave: ${name}
  - Piloto: ${pilot}
  - Limite da Tripulação: ${crewLimit}
  `);

  if (confirmation) {
    addSpaceship(name, pilot, crewLimit);
  }
}

function secondMenuOption() {
  const member = prompt("Insira o nome do tripulante: ");
  const name = prompt(
    `Insira o nome da nave que ${member} deverá ser designado:`
  );

  const spaceship = findSpaceship(name);

  if (spaceship) {
    const confirmation = confirm(
      `Confirma a inclusão de ${member} na tripulação de ${spaceship.name}`
    );

    if (confirmation) {
      addCrewMember(member, spaceship);
    }
  }
}

function thirdMenuOption() {
  const name = prompt(`Insira o nome da nave que deseja enviar: `);

  const spaceship = findSpaceship(name);

  if (spaceship) {
    const confirmation = confirm(`Confirma o envio da nave ${name} em missão?`);

    if (confirmation) {
      sendInMission(spaceship);
    }
  }
}

function fourthMenuOption() {
  let list = "Naves Registradas: \n";

  spaceships.forEach(
    (spaceship: {
      name: string;
      pilot: string;
      crewLimit: number;
      crew: string[];
      inMission: boolean;
    }) => {
      list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      ${spaceship.inMission ? "Nave está em missão" : "Nave não está em missão"}
      Tripulação máxima: ${spaceship.crewLimit}
      Ao total são ${spaceship.crew.length} tripulantes:
      `;

      spaceship.crew.forEach((member) => {
        list += `--- ${member}\n`;
      });
    }
  );

  alert(list);
}

let useOption = 0;

while (useOption !== 5) {
  const menu = `
  Painel principal:
  1 - Registrar uma nova nave;
  2 - Adicionar um membro à tripulação;
  3 - Enviar nave em missão;
  4 - Listar naves Registradas;
  5 - Encerrar
  `;

  useOption = Number.parseInt(prompt(menu));

  switch (useOption) {
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
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Opção errada, retornando ao menu principal...");
      break;
  }
}
