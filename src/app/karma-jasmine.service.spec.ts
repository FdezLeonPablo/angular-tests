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
    const resultado = service.dividir(4, 4)
    expect(resultado).toBe(1)
  })

  it('debería dividir dos números negativos', () => {
    const resultado = service.dividir(-4, -8)
    expect(resultado).toBe(0.5)
  })

  it('debería dividir un número positivo a un número negativo', () => {
    const resultado = service.dividir(-40, 4)
    expect(resultado).toBe(-10)
  })

  it('debería devolver true para un número par', () => {
    const resultado = service.verificarNumeroPar(4);
    expect(resultado).toBeTruthy();
  })

  it('debería devolver false para un número impar', () => {
    const resultado = service.verificarNumeroPar(7);
    expect(resultado).toBeFalsy();
  })

  it('debería devolver true para cero porque cero es ¿par?', () => {
    const resultado = service.verificarNumeroPar(0);
    expect(resultado).toBeTruthy();
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

  it('debería devolver el máximo entre dos números positivos', () => {
    const resultado = service.obtenerMaximo(5, 8);
    expect(resultado).toBe(8);
  });

  it('debería devolver el máximo entre dos números negativos', () => {
    const resultado = service.obtenerMaximo(-10, -5);
    expect(resultado).toBe(-5);
  });

  it('debería devolver el máximo entre un número positivo y un número negativo', () => {
    const resultado = service.obtenerMaximo(-3, 7);
    expect(resultado).toBe(7);
  });

  it('debería convertir una cadena de texto en minúsculas a mayúsculas', () => {
    const resultado = service.convertirMayusculas('que onda mundo');
    expect(resultado).toBe('QUE ONDA MUNDO');
  });

  it('debería mantener una cadena de texto en mayúsculas sin cambios', () => {
    const resultado = service.convertirMayusculas('OPA AHI MUNDO');
    expect(resultado).toBe('OPA AHI MUNDO');
  });

  it('debería convertir una cadena de texto con combinación de mayúsculas y minúsculas a mayúsculas', () => {
    const resultado = service.convertirMayusculas('EsGuErEeE MuUnDoOo');
    expect(resultado).toBe('ESGUEREEE MUUNDOOO');
  });

  it('debería devolver true para un número primo', () => {
    const resultado = service.comprobarPrimo(7);
    expect(resultado).toBe(true);
  });

  it('debería devolver false para un número compuesto', () => {
    const resultado = service.comprobarPrimo(10);
    expect(resultado).toBe(false);
  });

  it('debería devolver false para el número 1', () => {
    const resultado = service.comprobarPrimo(1);
    expect(resultado).toBe(false)
  });

  it('debería devolver true para un número positivo', () => {
    const resultado = service.comprobarPositivo(5);
    expect(resultado).toBe(true);
  });

  it('debería devolver false para un número negativo', () => {
    const resultado = service.comprobarPositivo(-10);
    expect(resultado).toBe(false);
  });

  it('debería devolver false para el número 0', () => {
    const resultado = service.comprobarPositivo(0);
    expect(resultado).toBe(false);
  });

  it('debería devolver el número correcto de elementos en un array con elementos', () => {
    const array = [1, 2, 3, 4, 5];
    const resultado = service.contadorElementos(array);
    expect(resultado).toBe(5);
  });

  it('debería devolver 0 para un array vacío', () => {
    const array: any[] = [];
    const resultado = service.contadorElementos(array);
    expect(resultado).toBe(0);
  });

  it('debería devolver el número correcto de elementos en un array con elementos de diferentes tipos', () => {
    const array = [{ nombre: 'Pablo' }, 2, false, 'Cuatro'];
    const resultado = service.contadorElementos(array);
    expect(resultado).toBe(4);
  service.contadorElementos
  });

  it('debería devolver true cuando la cadena contiene el substring', () => {
    const cadena = 'Que onda mundo!';
    const subcadena = 'mundo';
    const resultado = service.contieneSubstring(cadena, subcadena);
    expect(resultado).toBe(true);
  });
  
  it('debería devolver false cuando la cadena no contiene el substring', () => {
    const cadena = 'Que onda mundo';
    const subcadena = 'Adiós mundo';
    const resultado = service.contieneSubstring(cadena, subcadena);
    expect(resultado).toBe(false);
  });
  
  it('debería devolver false cuando la cadena está vacía y el substring no', () => {
    const cadena = '';
    const subcadena = 'Esguere';
    const resultado = service.contieneSubstring(cadena, subcadena);
    expect(resultado).toBe(false);
  });
  
})
