import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it('debería restar dos números positivos', () => {
    const resultado = service.restar(5, 5)
    expect(resultado).toBe(0);
  })

  it('debería restar un número negativo a un número positivo', () => {
    const resultado = service.restar(10, -5)
    expect(resultado).toBe(15);
  })

  it('debería restar dos números negativos', () => {
    const resultado = service.restar(-7, -8)
    expect(resultado).toBe(1);
  })

  it('debería multiplicar dos números positivos', () => {
    const resultado = service.multiplicar(4, 40)
    expect(resultado).toBe(160);
  })

  it('debería multiplicar dos números negativos', () => {
    const resultado = service.multiplicar(-3, -8)
    expect(resultado).toBe(24);
  })

  it('debería multiplicar un número positivo a un número negativo', () => {
    const resultado = service.multiplicar(-7, 8)
    expect(resultado).toBe(-56);
  })

  it('debería dividir dos números positivos', () => {
    const resultado = service.dividir(4,4)
    expect(resultado).toBe(1)
  })

  it('debería dividir dos números negativos', () => {
    const resultado = service.dividir(-4,-8)
    expect(resultado).toBe(0.5)
  })

  it('debería dividir un número positivo a un número negativo', () => {
    const resultado = service.dividir(-40,4)
    expect(resultado).toBe(-10)
  })
  
  it('debería devolver true para un número par', () => {
    const resultado = service.verificarNumeroPar(4);
    expect(resultado).toBeTruthy();
  })

  it('debería devolver false para un número impar', () => {
    const resultado = service.verificarNumeroPar(7);
    expect (resultado).toBeFalsy();
  })

  it('debería devolver true para cero porque cero es ¿par?', () => {
    const resultado = service.verificarNumeroPar(0);
    expect (resultado).toBeTruthy();
  })

  it('debería devolver true para un palíndromo válido', () => {
    const resultado = service.comprobarPalíndromo('reconocer');
    expect(resultado).toBe(true);
  });

  it('debería devolver false para un palíndromo inválido', () => {
    const resultado = service.comprobarPalíndromo('hola');
    expect(resultado).toBe(false);
  });

  it('debería devolver true para un palíndromo con espacios y mayúsculas', () => {
    const resultado = service.comprobarPalíndromo('Anita lava la tina');
    expect(resultado).toBe(true);
  });
  
  it('debería devolver 1 para el factorial de 0', () => {
    const resultado = service.factorial(0);
    expect(resultado).toBe(1);
  });
  
  it('debería devolver el factorial correcto para un número positivo', () => {
    const resultado = service.factorial(5);
    expect(resultado).toBe(120);
  });
  
  it('debería devolver NaN para un número negativo', () => {
    const resultado = service.factorial(-3);
    expect(isNaN(resultado)).toBe(true);
  });
  
  
});
