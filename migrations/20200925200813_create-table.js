
exports.up = async function(knex) {
  await knex.schema.createTable("project",tbl=>{
      tbl.increments("projectID")
      tbl.text("name").notNull()
      tble.text("description")
      tbl.boolean("completed").notNullable().defaultTo(false)
  });
  await knex.schema.createTable("task",tbl=>{
      tbl.increments("taskID")
      tbl.text("description").notNull()
      tbl.text("notes")
      tbl.boolean("completed").notNullable().defaultTo(false)
      tbl.integer("project_id").reference("projectID").inTable("project")
      .onDelete("SET NULL")
  });

  await knex.schema.createTable("resource",tbl=>{
      tbl.increments("resourceID")
      tbl.text("name").notNull()
      tbl.text("description")
    });

  await knex.schema.createTable("project_resource",tbl=>{
     tbl.integer('project_id').reference('projectID').inTable('project')
     tbl.integer('resource_id').reference('resourceID').inTable('resource')
     tbl.primary(['project_id','resource_id'])
  
  })

};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists("project_resource")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("project")
};
