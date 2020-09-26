
exports.seed = async function(knex) {
  
  await knex('project').truncate()

  await knex("project").insert([{
    name:"node",description:"written by romeo",completed:true
  },{name:"db",description:"changed by romeo",completed:false}])
 
  await knex('task').truncate()
  await knex("task").insert([{description:"install knex",completed:true,projectid:1},
  {description:"create knex",completed:false,projectid:1}])

  await knex('resource').truncate()
  await knex('resource').insert([{name:'ipad pro'},{name:'mac pro'}])

  await knex('project_resource').truncate()
  await knex('project_resource').insert([{project_id:1,resource_id:2},{project_id:2,resource_id:1}])
  
};
