// Arrange
const { simularTirada } = require('./ruleta');

// Act
const resultado = simularTirada();

// Assert
test('Prueba del resultado de la ruleta', () => {
    expect(resultado.vueltas).toBeGreaterThanOrEqual(5);
    expect(resultado.vueltas).toBeLessThanOrEqual(10);
    expect(resultado.posicion).toBeGreaterThanOrEqual(0);
    expect(resultado.posicion).toBeLessThanOrEqual(36);
});
