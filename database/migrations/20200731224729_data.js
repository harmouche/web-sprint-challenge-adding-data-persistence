exports.up = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned().notNullable();
        tbl.foreign('project_id')
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('resource_id')
        .unsigned();
        tbl.foreign('resource_id')
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
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