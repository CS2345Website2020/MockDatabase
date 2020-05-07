
exports.up = function(knex) {
    return knex.schema

        // admin 
        .createTable('admin', function(tbl) {
            tbl.increments(); 
            tbl
                .text('username')
                .unique()
                .notNullable();
            tbl
                .text('password')
                .notNullable();
        })

        // art pieces 
        .createTable('art', function(tbl) {
            tbl.increments();
            tbl    
                .string('artist')
                .notNullable();
            tbl
                .text('title')
                .notNullable();
            tbl
                .text('type')
                .notNullable();
            tbl 
                .text('medium_support')
                .notNullable();
            tbl
                .string('description_basic')
                .notNullable();
            tbl
                .string('description_spatial')
                .notNullable();
            tbl
                .string('description_thematic')
                .notNullable();
            tbl
                .text('accession_number')
                .unique()
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('art')
        .dropTableIfExists('admin');
};
