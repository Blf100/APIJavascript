// Requesting the express
const { response, request } = require("express");
const express = require("express");

// Instantiating the express
const app = express();

// Middleware for json
app.use(express.json());

// Route to search: projects
app.get("/projects", (require, response) => {
  
  const query = request.query;
  
  console.log(query);
  
  return response.json([
    "Projeto 1",
    "Projeto 2",
    "Projeto 3"
  ]);
});

// Rot to post: projects
app.post("/projects", (request, response) => {
  
  const body = request.body;

  console.log(body);
  
  return response.json([
    
      "Projeto 1",
      "Projeto 2",
      "Projeto 3",
      "Projeto 4"
    
  ]);
});

// Route to put: project
app.put("/projects/:id", (request, response) => {

  const { id } = request.params;
  
  console.log(id)
  
  return response.json([
    
    "Projeto 1",
    "Projeto 2",
    "Projeto 3",
    "Projeto 5"
  ])
});

// Route to delet: projects
app.delete("/projects/:id", (request, response) => {
  
  const id = request.params;

  console.log(id)
  
  
  return response.json([
    "Projeto 1",
    "Projeto 2",
    "Projeto 3"
    
  ])
});

// Port for server access
app.listen(3333, () => {
  console.log("Servidor rodando!");
});




