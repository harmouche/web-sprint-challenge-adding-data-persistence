
exports.up = function(knex) {
    return knex.schema
    .table('tasks', tbl => {
        tbl.foreign('project_id')
        .references('projects.id');
    })
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.foreign('project_id')
        .references('projects.id');
      tbl.foreign('resource_id')
        .references('resources.id');
  })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .table('tasks', tbl => {tbl.dropColumn('project_id')})
      .dropTableIfExists('project_resources')
  };