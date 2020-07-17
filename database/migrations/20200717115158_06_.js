exports.up = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 1024).notNullable();
        tbl.string('notes', 1024);
        tbl.boolean('complete').defaultTo(0);
        tbl.integer('project_id').unsigned();
        tbl.foreign('project_id').references('resources.id');
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('tasks')
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 1024).notNullable();
        tbl.string('notes', 1024);
        tbl.boolean('complete').defaultTo(0);
      })
  };