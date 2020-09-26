const express = require('express');
const server = express();
server.use(express.json());
const PORT = process.env.PORT || 5500;
const Project = require('./knex-hlep');

server.use((err,req,res,next)=>{
    res.status(500).json({
        message:"sth wrong,try later"
    })
});

server.get('/project',async(req,res,next)=>{
    try{
        const projects = await Project.findP()
        res.json(projects)
    }catch(err){
        next(err)
    }
})

server.get('/task',async(req,res,next)=>{
    try{
        const tasks = await Project.findT()
        res.json(tasks)
    }catch(err){
        next(err)
    }
})

server.get('/resource/:id',async(req,res,next)=>{
    try{
        const prs= await Project.findR(req.params.id)
        res.json(prs)
    }catch(err){
        next(err)
    }
})
server.listen(PORT, () => {
    console.log(`Romeo is Listening on port ${PORT}...`);
  });

