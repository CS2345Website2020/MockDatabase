exports.seed = function(knex) {
    return knex('art').truncate()
    .then(function () {
        return knex('art').insert([
            {
                id: 1,
                artist: 'John Singleton Copley',
                title: 'Portrait of Thomas Flucker', 
                type: 'painting',
                medium_support: 'oil on canvas', 
                description: 'This painting is considered the most physically and psychologically striking colonial portrait at Bowdoin, Thomas Flucker was an important political figure in late eighteenth-century Boston. A Tory, he fled to England in 1775. It has been suggested that the painting’s somber palette and empty background (without the traditional attributes which situate the sitter in society) may allude to the gathering storm clouds and upheavals which would culminate in the American Revolution.', 
                creation_date: 'ca. 1770-1771', 
                credit_line: 'Bequest of Mrs. Lucy Flucker Thatcher', 
                accession_number: '1855.1'
            },
            {
                id: 2,
                artist: 'William Searle',
                title: 'Joined Great Chair', 
                type: 'furniture',
                medium_support: 'oak', 
                description: 'Bowdoin’s chair collection began in 1872 with the arrival of this extraordinary joined great chair. William Searle, an English-trained joiner who emigrated to America in 1663, is believed to have produced it for his own household in Ispwich, Massachusetts. After his death, his widow married another joiner, Thomas Dennis (1638–1706), who like Searle was from Devonshire, England. Dennis took over Searle’s workshop, and it is through the Dennis family that the chair descended. The handsomely carved ornament, with anthropomorphic figures decorating the stiles, is based on the Renaissance and Baroque strapwork seen on furniture from the region in which Searle trained. Used for many years as the president’s chair at Commencement, the chair is now recognized as among the nation’s finest examples of seventeenth-century furniture.', 
                creation_date: '1663-1667', 
                credit_line: 'Gift of Ephraim Wilder Farley, Class of 1836', 
                accession_number: '1872.1'
            },

        ]);
    });
}