const db = require('../dbConfig.js')
const e = require('express')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}


async function add(resource) {
    const [id] = await db('resources').insert({
        name: resource.name,
        description: resource.description
    })
    await resource.projects.forEach(e => {
        console.log(e)
        db('project_resources').insert({
            project_id: e,
            resource_id: id
        })
    })
    return findById(id)
};
function find() {
    return db('resources')
};
function findBy(filter) {
    return db('resources').where(filter);
};
function findById(id) {
    return db('resources').where({id}).first();
};
function update(id, changes) {
    return db(`resources`).where({id}).update(changes);
};
function remove(id) {
    return db(`resources`).where('id', Number(id)).del();
};