const db = require('../data/db-config'); 

module.exports = {
    addAdmin,
    findBy,  
    findById, 
    getAll
}

async function addAdmin(administrator) {
    const [id] = await db('admin').insert(administrator); 

    return findById(id)
}

function findBy(filter) {
    return db('admin').where(filter)
}

function findById(id) {
    return db('admin')
        .where({ id })
        .first(); 
}

function getAll() {
    return db('admin').select('id','username')
}
