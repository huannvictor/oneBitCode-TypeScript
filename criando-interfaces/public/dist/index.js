try {
    let mercurio = {
        name: "Mercúrio",
        mass: 3.3 * Math.pow(10, 23),
        population: 0,
        createSatellite: (name) => {
            name.length > 0
                ? console.log(`Criando satélite ${name} para ${mercurio.name}`)
                : console.log(`Planeta não possui satélites`);
        },
    };
    let venus;
    venus = {
        name: "Vênus",
        mass: 4.87 * Math.pow(10, 24),
        population: 7.93e9,
        createSatellite: (name) => {
            name.length > 0
                ? console.log(`Criando satélite ${name} para ${mercurio.name}`)
                : console.log(`Planeta não possui satélites`);
        },
    };
    let terra;
    terra = {
        name: "Terra",
        mass: 5.97 * Math.pow(10, 24),
        population: 7.93e9,
        createSatellite: (name) => {
            name.length > 0
                ? console.log(`Criando satélite ${name} para ${mercurio.name}`)
                : console.log(`Planeta não possui satélites`);
        },
    };
    let sun;
    sun = {
        name: "Sol",
        mass: 1.989 * Math.pow(10, 30),
        age: 4.603 * Math.pow(10, 9),
        planets: [mercurio, venus, terra],
    };
}
catch (error) {
    console.log(error);
}
