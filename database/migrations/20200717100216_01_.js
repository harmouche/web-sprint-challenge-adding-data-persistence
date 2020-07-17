
exports.up = function(knex) {
    return knex.schema
    .table('tasks', tbl => {
        tbl.integer('t_projects_id')
        .unsigned();
    })
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
      .unsigned();
      tbl.foreign('project_id')
      .references('resources.id');
      tbl.integer('resource_id')
      .unsigned();
      tbl.foreign('resource_id')
      .references('resources.id');
  });
  };
  
  exports.down = function(knex) {
      return knex.schema
      .table('tasks', tbl => {tbl.dropColumn('t_projects_id')})
      .dropTableIfExists('project_resources');
  };