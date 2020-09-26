const db = require('./config');
module.exports = {
    findP,
    findT,
    findR
  
}
function findP(){
    return db('project')

};
function findT(){
    return db('task')
}

function findR(rid){
  return db("project_resource as PR")
  .join('project','project.id','PR.project_id')
  .join('resource','resource.id','PR.resource_id')
  .where('resource.id',rid)
  .select('project.name','project.description','resource.id as ResourceId','project.id as ProjectId')
}