"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primosRecursivo = primosRecursivo;
exports.primosLinear = primosLinear;
function valPrimosInput(n) {
    if (!Number.isInteger(n) || n <= 1) {
        throw new Error("O número deve ser inteiro maior que 1");
    }
}
function ehPrimoRecursivo(n, divisor = 2) {
    if (n === 2)
        return true;
    if (divisor * divisor > n)
        return true;
    if (n % divisor === 0)
        return false;
    return ehPrimoRecursivo(n, divisor + 1);
}
function primosRecursivo(n) {
    valPrimosInput(n);
    const resultado = [];
    function coletar(atual) {
        if (atual > n)
            return;
        if (ehPrimoRecursivo(atual)) {
            resultado.push(atual);
        }
        coletar(atual + 1);
    }
    coletar(2);
    return resultado;
}
function ehPrimoLinear(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function primosLinear(n) {
    valPrimosInput(n);
    const resultado = [];
    for (let i = 2; i <= n; i++) {
        if (ehPrimoLinear(i)) {
            resultado.push(i);
        }
    }
    return resultado;
}
