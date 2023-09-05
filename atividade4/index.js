const express = require('express');
const app = express();
const port = 8080;


app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a + b;
  res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
});


app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a - b;
  res.send(`A subtração de ${a} e ${b} é igual a ${resultado}`);
});


app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a * b;
  res.send(`A multiplicação de ${a} e ${b} é igual a ${resultado}`);
});


app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (b === 0) {
    res.status(400).send('Não é possível dividir por zero.');
  } else {
    const resultado = a / b;
    res.send(`A divisão de ${a} por ${b} é igual a ${resultado}`);
  }
});


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
