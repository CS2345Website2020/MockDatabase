const db = require('../data/db-config.js'); 

module.exports = {
    getArt, 
    getArtById, 
    addArt,
    removeArt, 
    editArt
}

function getArt() {
    return db('art').select('*')
}

function getArtById(id) {
    return db('art')
        .where({ id })
        .first();
}

async function addArt(piece) {
    const [id] = await db('art').insert(piece);

    return getArtById(id);
}

function removeArt(id) {
    return db('art')
        .where('id', id)
        .del();
}

function editArt(id, changes) {
    return db('admin')
        .where({ id })
        .update(changes)
}