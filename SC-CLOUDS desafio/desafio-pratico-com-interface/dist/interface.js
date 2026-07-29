import { FBRecursiva, FBLinear } from "./fibonacci.js";
import { primosRecursivo, primosLinear } from "./primos.js";
const fibonacciInput = document.getElementById("fibonacciInput");
const fibonacciButton = document.getElementById("fibonacciButton");
const limparFibonacciButton = document.getElementById("limparFibonacciButton");
const fibonacciResultado = document.getElementById("fibonacciResultado");
const primosInput = document.getElementById("primosInput");
const primosButton = document.getElementById("primosButton");
const limparPrimosButton = document.getElementById("limparPrimosButton");
const primosResultado = document.getElementById("primosResultado");
function definirResultado(elemento, mensagem, tipo) {
    elemento.textContent = mensagem;
    elemento.className = `resultado resultado-${tipo}`;
}
fibonacciButton.addEventListener("click", () => {
    try {
        const valor = fibonacciInput.value.trim();
        if (valor === "") {
            definirResultado(fibonacciResultado, "Digite um número para calcular Fibonacci.", "erro");
            return;
        }
        const n = Number(valor);
        if (!Number.isInteger(n)) {
            definirResultado(fibonacciResultado, "Informe um número inteiro válido.", "erro");
            return;
        }
        if (n < 0) {
            definirResultado(fibonacciResultado, "O valor de Fibonacci deve ser maior ou igual a 0.", "erro");
            return;
        }
        if (n > 40) {
            definirResultado(fibonacciResultado, "Para evitar travamento da interface, a versão recursiva aceita até 40.", "erro");
            return;
        }
        const resultadoRecursivo = FBRecursiva(n);
        const resultadoLinear = FBLinear(n);
        definirResultado(fibonacciResultado, `Fibonacci de ${n} calculado com sucesso.

Recursivo: ${resultadoRecursivo}
Linear: ${resultadoLinear}`, "sucesso");
    }
    catch (error) {
        definirResultado(fibonacciResultado, error instanceof Error ? error.message : "Erro ao calcular Fibonacci.", "erro");
    }
});
primosButton.addEventListener("click", () => {
    try {
        const valor = primosInput.value.trim();
        if (valor === "") {
            definirResultado(primosResultado, "Digite um número para calcular os primos.", "erro");
            return;
        }
        const n = Number(valor);
        if (!Number.isInteger(n)) {
            definirResultado(primosResultado, "Informe um número inteiro válido.", "erro");
            return;
        }
        if (n <= 1) {
            definirResultado(primosResultado, "Para números primos, o valor deve ser maior que 1.", "erro");
            return;
        }
        if (n > 10000) {
            definirResultado(primosResultado, "Para evitar lentidão na interface, use um valor até 10000.", "erro");
            return;
        }
        const resultadoRecursivo = primosRecursivo(n);
        const resultadoLinear = primosLinear(n);
        definirResultado(primosResultado, `Números primos até ${n} calculados com sucesso.

Recursivo: [${resultadoRecursivo.join(", ")}]
Linear: [${resultadoLinear.join(", ")}]`, "sucesso");
    }
    catch (error) {
        definirResultado(primosResultado, error instanceof Error ? error.message : "Erro ao calcular números primos.", "erro");
    }
});
limparFibonacciButton.addEventListener("click", () => {
    fibonacciInput.value = "";
    definirResultado(fibonacciResultado, "Campo limpo. Informe um valor para calcular.", "neutro");
    fibonacciInput.focus();
});
limparPrimosButton.addEventListener("click", () => {
    primosInput.value = "";
    definirResultado(primosResultado, "Campo limpo. Informe um valor para calcular.", "neutro");
    primosInput.focus();
});
