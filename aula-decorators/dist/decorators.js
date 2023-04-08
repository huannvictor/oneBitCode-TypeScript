var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value) {
            console.log(`Calculando ${value} ao quadrado...`);
            return Math.pow(value, 2);
        };
    };
}
class AnyClass {
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        console.log(`Calculando ${value} × 2`);
        return value * 2;
    }
}
__decorate([
    Decorator()
], AnyClass.prototype, "calculate", null);
const multiplica = new AnyClass("multiplica");
const result = multiplica.calculate(5);
console.log(`Resultado: ${result}`);
