
exports.up = async function(knex) {
  await knex.schema.createTable("project",tbl=>{
      tbl.increments()
      tbl.text("name").notNull()
      tbl.text("description")
      tbl.boolean("completed").defaultTo(false)
  });
  await knex.schema.createTable("task",tbl=>{
      tbl.increments()
      tbl.text("description").notNull()
      tbl.text("notes")
      tbl.boolean("completed").defaultTo(false)
      tbl.integer("projectid").references("id").inTable("project")
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  });

  await knex.schema.createTable("resource",tbl=>{
      tbl.increments()
      tbl.text("name").notNull()
      tbl.text("description")
    });

  await knex.schema.createTable("project_resource",tbl=>{
     tbl.integer("project_id").notNull().references('id').inTable('project')
     tbl.integer("resource_id").notNull().references('id').inTable('resource')
     tbl.primary(["project_id","resource_id"])
  
  })

};


exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resource")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("project")
};
