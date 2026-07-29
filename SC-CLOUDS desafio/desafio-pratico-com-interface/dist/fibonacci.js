function valFBInput(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("O numero deve ser inteiro maior ou igual a 0");
    }
}
export function FBRecursiva(n) {
    valFBInput(n);
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    return FBRecursiva(n - 1) + FBRecursiva(n - 2);
}
export function FBLinear(n) {
    valFBInput(n);
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    let previous = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}
