function Decorator() {
  return function (target, key, descriptor) {
    descriptor.value = function (value: number) {
      console.log(`Calculando ${value} ao quadrado...`);
      return value ** 2;
    };
  };
}

function Log() {
  return function (target, key, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("---------------------------------");
      console.log(
        `Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`
      );

      const result = originalMethod.apply(this, args);

      console.log(
        `Chamando o método ${key} retornou o valor: ${JSON.stringify(result)}`
      );
      console.log("---------------------------------");

      return result;
    };
  };
}

class AnyClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log()
  calculate(value: number) {
    console.log(`Calculando ${value} × 2`);
    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split("").reverse().join("");
  }
}

const multiplica = new AnyClass("multiplica");
const result = multiplica.calculate(5);

console.log(`Resultado: ${result}`);

multiplica.invertName();
