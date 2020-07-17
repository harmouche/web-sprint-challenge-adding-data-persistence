const db = require('../dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getResources
}


async function add(project) {
    const [id] = await db('projects').insert(project)
    return findById(id)
};
function find() {
    return db('projects')
};
function findBy(filter) {
    return db('projects').where(filter);
};
function findById(id) {
    return db('projects').where({id}).first();
};
function update(id, changes) {
    return db(projects).where({id}).update(changes);
};
function remove(id) {
    return db(projects).where('id', Number(id)).del();
};
function getResources(id) {
    return db('projects')
    .join('project_resources', 'project_resources.project_id', '=','projects.id')
    .join('resources', 'project_resources.resource_id', '=','resources.id')
    .select('projects.*', 'resources.*')
}