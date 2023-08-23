function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    
    if (colsA !== rowsB) {
        return "Não é possível calcular. O número de colunas da matriz A não é igual ao número de linhas da matriz B.";
    }
    
    const resultMatrix = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        resultMatrix[i] = new Array(colsB).fill(0);
    }
    
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    
    return resultMatrix;
}

const matrixA = [
    [1, 2],
    [3, 4]
];

const matrixB = [
    [5, 6],
    [7, 8]
];

const result = multiplyMatrices(matrixA, matrixB);

if (typeof result === 'string') {
    console.log(result);
} else {
    console.log("Resultado da multiplicação:");
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}
