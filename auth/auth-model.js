const db = require('../data/db-config'); 

module.exports = {
    addAdmin, 
    findBy, 
    getAll
}

async function addAdmin(administrator) {
    const [id] = await db('admin').insert(administrator); 

    return findBy(id)
}

function findBy(filter) {
    return db('admin').where(filter)
}

function getAll() {
    return db('admin').select('id','username')
}
