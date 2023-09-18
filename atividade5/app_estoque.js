const express = require('express');
const app = express();

let estoque = {};

app.use(express.json());

app.post('/api/estoque/cadastrar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  estoque[id] = { nome, quantidade: parseInt(qtd) };
  res.send('Item cadastrado no estoque');
});

app.get('/api/estoque/listar', (req, res) => {
  res.json(estoque);
});

app.put('/api/estoque/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  if (estoque[id]) {
    estoque[id].quantidade = parseInt(qtd);
    res.send('Quantidade atualizada com sucesso');
  } else {
    res.status(404).send('Item não encontrado no estoque');
  }
});

app.delete('/api/estoque/remover/:id', (req, res) => {
  const { id } = req.params;
  if (estoque[id]) {
    delete estoque[id];
    res.send('Item removido do estoque');
  } else {
    res.status(404).send('Item não encontrado no estoque');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});