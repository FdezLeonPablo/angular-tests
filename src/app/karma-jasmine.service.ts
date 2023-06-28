import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a:number, b: number): number {
    return a - b;
  }

  multiplicar(a:number, b: number): number {
    return a * b;
  }

  dividir(a: number, b:number): number {
    return a / b;
  }

  verificarNumeroPar(a: number): boolean {
    return a % 2 === 0;
  }

  comprobarPalíndromo(texto: string): boolean {
    const textoMinusculas = texto.toLowerCase().replace(/[\W_]/g, '');;

    const textoInvertido = textoMinusculas.split('').reverse().join('');

    return textoMinusculas === textoInvertido;
  }

  factorial(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else if (numero > 1) {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    } else {
      return NaN;
    }
  }
  


}
