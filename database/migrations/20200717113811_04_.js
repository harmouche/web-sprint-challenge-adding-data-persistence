
exports.up = function(knex) {
    return knex.schema
    .table('tasks', tbl => {
        tbl.foreign('t_project_id')
        .references('projects.id')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .table('tasks', tbl => {
          tbl.dropForeign('t_project_id')
      })
  };