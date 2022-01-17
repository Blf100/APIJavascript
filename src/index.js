// Requesting the express
const { response, request } = require("express");
const express = require("express");

// Requesting the uuid
const { v4: uuidv4 } = require("uuid");

// Instantiating the express
const app = express();

// Middleware for json
app.use(express.json());

// Array to database
const database = []

// Route to search: projects
app.get("/projects", (require, response) => {
  
  return response.json(database);
});

// Rot to post: projects
app.post("/projects", (request, response) => {
  
  const { title, owner } = request.body;

  const project = {
    id: uuidv4(),
    title,
    owner
  };
  
  database.push(project);
  
  return response.status(201).json(database);
});
// Route to put: project
app.put("/projects/:id", (request, response) => {

  const { id } = request.params;

  const { title, owner} = request.body;

  const projectIndex = database.findIndex(project => project.id === id);

  if(projectIndex === -1) {
    return response.status(400).json({error: "Projet not found!"});
  } 
     
  const project = {
      id, 
      title,
       owner
     };

  database[projectIndex] = project;
  

  return response.status(201).json(project);
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
app.listen(3333);
