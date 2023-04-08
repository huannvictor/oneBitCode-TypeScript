//* função com tipagem any, o TS "trabalha as segas"
function first(array) {
    return array[0];
}
//* função com tipagem dinâmica, o TS infere os tipos de acordo com o array fornecido
//* dento de "<>" pode ser colocado qualquer nome
function last(array) {
    return array[array.length - 1];
}
const pilots = ["Luke", "Biggs", "Wedge", "Han", "Lando"];
const numbers = [1, 2, 3, 4, 5];
const fistPilot = first(pilots);
const lastPilot = last(pilots);
const fistNumber = first(numbers);
const lastNumber = last(numbers);
console.log(fistPilot, lastPilot);
console.log(fistNumber, lastNumber);
