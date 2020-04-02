
exports.up = function(knex) {
    return knex.schema

        // admin 
        .createTable('admin', tbl => {
            tbl.increments(); 
            tbl
                .text('username')
                .unique()
                .notNullable()
            tbl
                .text('password')
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('admin');
};
