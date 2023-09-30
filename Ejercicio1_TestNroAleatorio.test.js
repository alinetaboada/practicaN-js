

//Arrange
CantMin=185; // 37*5
CantMax=370; // 37*10

//Act
ValorA=Math.floor(Math.floor()*(CantMax-(CantMin)+1))+CantMin%37; 

//Assert

test('prueba ', () => {
    expect(ValorA).toBeLessThanOrEqual(36);
    expect(ValorA).toBeGreaterThanOrEqual(0);
  });
