function Decorator() {
  return function (target, key, descriptor) {
    descriptor.value = function (value: number) {
      console.log(`Calculando ${value} ao quadrado...`);
      return value ** 2;
    };
  };
}

class AnyClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Decorator()
  calculate(value: number) {
    console.log(`Calculando ${value} × 2`);
    return value * 2;
  }
}

const multiplica = new AnyClass("multiplica");
const result = multiplica.calculate(5);

console.log(`Resultado: ${result}`);
