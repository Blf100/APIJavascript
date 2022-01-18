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
const database = [];

// Creating middleware for authentication
function logRoutes(request, response, next) {
  const { method, url } = request;

  const route = `[${method.toUpperCase()}]${url}`;

  console.log(route);

  return next();
}

// Using middleware on all routes
app.use(logRoutes);

// Route to search: projects
app.get("/projects", (request, response) => {
  
  const { title } = request.query;

  const results = title 
        ? database.filter(project => project.title.includes(title))
        : database;

  return response.json(results);
});

// Rot to post: projects
app.post("/projects", (request, response) => {
  
  const {title, owner } = request.body;

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
  
  const { id } = request.params;

  const projectIndex = database.findIndex(project => project.id === id);

  if(projectIndex === -1) {
    return response.status(400).json({message: "Este ID não existe"});
  }

  database.splice(projectIndex, 1);

  return response.status(204).json([]);
  
});

// Port for server access
app.listen(3333);
