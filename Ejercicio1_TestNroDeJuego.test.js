
//arrange
NroDeJuegoAnterior=5; 

// act
const NroDeJuegoActual = NroDeJuegoAnterior + 1;

// assert 
test('prueba ', () => {
  expect(NroDeJuegoActual).toBeGreaterThanOrEqual(1);
    expect(NroDeJuegoActual).toBeLessThanOrEqual(10);
    expect(NroDeJuegoActual).toBe(6); // Cambiar este valor si NroDeJuegoAnterior cambia
  });

