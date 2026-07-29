function valPrimosInput(n: number): void {
  if (!Number.isInteger(n) || n <= 1) {
    throw new Error("O número deve ser inteiro maior que 1");
  }
}
function ehPrimoRecursivo(n: number, divisor = 2): boolean {
  if (n === 2) return true;
  if (divisor * divisor > n) return true;
  if (n % divisor === 0) return false;

  return ehPrimoRecursivo(n, divisor + 1);
}
export function primosRecursivo(n: number): number[] {
  valPrimosInput(n);

  const resultado: number[] = [];

  function coletar(atual: number): void {
    if (atual > n) return;

    if (ehPrimoRecursivo(atual)) {
      resultado.push(atual);
    }

    coletar(atual + 1);
  }

  coletar(2);
  return resultado;
}
function ehPrimoLinear(n: number): boolean {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

export function primosLinear(n: number): number[] {
  valPrimosInput(n);

  const resultado: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (ehPrimoLinear(i)) {
      resultado.push(i);
    }
  }

  return resultado;
}