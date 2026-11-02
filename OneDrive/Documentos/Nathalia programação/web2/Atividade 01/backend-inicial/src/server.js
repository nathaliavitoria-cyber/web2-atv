import express from "express";

const app = express();
const PORT = 3000;

// Middleware: interpreta o corpo (body) das requisições em JSON.
// Sem isto, req.body ficaria indefinido nos POST/PUT.
app.use(express.json());

// "Banco de dados" em memória (por enquanto, sem banco real).
// Ao reiniciar o servidor, os dados voltam ao estado inicial.
let tarefas = [
  { id: 1, titulo: "Estudar API REST", concluida: false },
];
let proximoId = 2;

// =====================================================================
// AS ROTAS DA API SERÃO CRIADAS DURANTE A AULA.
// Siga o passo a passo em ROTEIRO-AULA.md:
//
//   GET    /api/tarefas          -> listar   (query + header)
//   POST   /api/tarefas          -> criar    (body)
//   PUT    /api/tarefas/:id      -> editar   (path + body)
//   DELETE /api/tarefas/:id      -> excluir  (path)
//
// Escreva as rotas ABAIXO desta linha.
// =====================================================================
app.get("/api/tarefas", (req, res) => {
  res.json(tarefas);
});

app.get("/api/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find((t) => t.id === parseInt(id));

  if (!tarefa) {
    res.status(404).json({ error: "Tarefa não encontrada" });
  } else {
    res.json(tarefa);
  }
});

app.post("/api/tarefas", (req, res) => {
  const tarefa = {
    id: proximoId++,
    titulo: req.body.titulo,
    concluida: false,
  };

  tarefas.push(tarefa);
  res.json(tarefa);
});

app.put("/api/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find((t) => t.id === parseInt(id));

  if (!tarefa) {
    res.status(404).json({ error: "Tarefa não encontrada" });
  } else {
    tarefa.titulo = req.body.titulo;
    tarefa.concluida = req.body.concluida;
    res.json(tarefa);
  }
});

app.delete("/api/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const tarefa = tarefas.find((t) => t.id === parseInt(id));

  if (!tarefa) {
    res.status(404).json({ error: "Tarefa não encontrada" });
  } else {
    tarefas = tarefas.filter((t) => t.id !== parseInt(id));
    res.json(tarefa);
  }
});

app.listen(PORT, () => {
  console.log(`API To-Do rodando em http://localhost:${PORT}`);
});
