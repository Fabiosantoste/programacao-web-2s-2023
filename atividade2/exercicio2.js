function transposeMatrix(matrix, rows, columns) {
    const transposed = new Array(columns);
    
    for (let i = 0; i < columns; i++) {
        transposed[i] = new Array(rows);
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    
    return transposed;
}

function printMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    
    for (let i = 0; i < rows; i++) {
        let rowStr = "";
        for (let j = 0; j < columns; j++) {
            rowStr += matrix[i][j] + " ";
        }
        console.log(rowStr);
    }
}

const rows = 3;
const columns = 2;

const matrixA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log("Matriz A:");
printMatrix(matrixA);

const matrixAt = transposeMatrix(matrixA, rows, columns);

console.log("\nMatriz Transposta:");
printMatrix(matrixAt);
