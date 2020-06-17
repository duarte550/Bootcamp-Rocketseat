const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");


// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());


const repositories = [];

app.get("/repositories", (request, response) => {
    return response.json(repositories)
});

app.post("/repositories", (request, response) => {
    const {title, url, techs} = request.body
    const repository = {id:uuid(),title,url,techs}
    repositories.push(repository)

    return response.json(repository)

});

app.put("/repositories/:id", (request, response) => {
    const {id} = request.params
    console.log(repositories)
    repositoryIndex = repositories.findIndex(repository => repository.id == id)
    console.log(repositoryIndex)    
    if (repositoryIndex <0){
      return response.status(400).json({error: 'project not found'})
    }
    repositories[repositoryIndex].title = "ALTEREI"
    repository = repositories[repositoryIndex]
    

    return response.json(repository)
});

app.delete("/repositories/:id", (request, response) => {
  
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
