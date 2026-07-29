# SC-CLOUDS desafio

Esta pasta reúne os projetos desenvolvidos para o desafio da SC Clouds.

## Estrutura

- `desafio-pratico/`  
  Versão base do desafio, com implementação em TypeScript dos algoritmos solicitados.

- `desafio-pratico-com-interface/`  
  Versão com interface web para testar Fibonacci e números primos no navegador.

## Como rodar

Cada projeto possui sua própria estrutura e pode ser executado separadamente.

### Projeto base

```bash
cd desafio-pratico
npm install
npm run build
```

### Projeto com interface

```bash
cd desafio-pratico-com-interface
npm install
npm run build
npm run serve
```

Depois, abra no navegador:

```text
http://localhost:3000/public/index.html
```

## Observação

A pasta foi organizada para manter as duas versões do desafio no mesmo repositório, separadas por projeto.