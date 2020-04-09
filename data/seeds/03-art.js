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
            {
                id: 3,
                artist: 'Elihu Vedder',
                title: 'Rome (The Art Idea)', 
                type: 'painting',
                medium_support: 'oil on canvas', 
                description: 'The Museum’s central rotunda is a magisterial space decorated below the dome by four large semicircular murals by the four leading painters of the American Renaissance: Elihu Vedder, Kenyon Cox, Abbott Thayer and John LaFarge. They were commissioned by McKim who believed in the unity of the arts and constituted an extremely important ensemble of architectural decoration. The original mural scheme called for each artist to paint an allegorical representation of one of the four cities perceived at the time as most central to the development of western art. Elihu Vedder’s mural depicts Rome under whose gaze appear the different elements of art: Wisdom, Knowledge, Soul, Life, Harmony, Love, Color and Form.', 
                creation_date: '1894', 
                credit_line: 'Gift of the Misses Harriet Sarah and Mary Sophia Walker', 
                accession_number: '1893.37'
            },
            {
                id: 4,
                artist: 'Kenyon Cox',
                title: 'Venice', 
                type: 'painting',
                medium_support: 'oil on canvas', 
                description: 'The Museum’s central rotunda is a magisterial space decorated below the dome by four large semicircular murals by the four leading painters of the American Renaissance: Elihu Vedder, Kenyon Cox, Abbott Thayer and John LaFarge. They were commissioned by McKim who believed in the unity of the arts and constituted an extremely important ensemble of architectural decoration. The original mural scheme called for each artist to paint an allegorical representation of one of the four cities perceived at the time as most central to the development of western art. Kenyon Cox portrays the seated female figure of Venice flanked on one side by a nude woman with palette and brushes representing Painting, and on the other by Mercury, the god of Commerce. The winged lion of St. Marks, a merchant ship with characteristically decorated sails and snippets of the city’s architecture, round out the tableau.', 
                creation_date: '1894', 
                credit_line: 'Gift of the Misses Harriet Sarah and Mary Sophia Walker', 
                accession_number: '1893.38'
            },
            {
                id: 5,
                artist: 'Unknown Artist',
                title: 'Portrait Head of Emperor Antoninus Pius', 
                type: 'sculpture',
                medium_support: 'marble', 
                description: 'From religion and myth to combat, sport, and transportation, the horse figured prominently in ancient Mediterranean culture and art. Horses were among the earliest subjects explored by Greek artists and remained the most commonly depicted animal in vase painting and sculpture. Artists admired them as symbols of wealth, power, and prestige, but also understood their role as treasured companions of humans, heroes, and the gods. Representations of horses created during the Geometric period of the eighth century BCE document the connection between painting and sculpture. Early sculptures of horses, in profile, mimic closely the painted silhouettes of the animals as if the artist had pulled the form into a three-dimensional shape. In the ensuing centuries, as seen in the examples displayed here, more natural-looking forms were developed and the figure of the horse was appreciated from all sides.', 
                creation_date: 'ca. 138-150', 
                credit_line: 'Gift of Edward Perry Warren, Esq., Honorary Degree, 1926', 
                accession_number: '1906.1'
            },
            {
                id: 6,
                artist: 'Gilbert Stuart',
                title: 'Portrait of Mrs. Thomas C. Upham (née Phebe Lord)', 
                type: 'painting',
                medium_support: 'oil on canvas', 
                description: 'Gilbert Stuart’s portrait captures Phebe Lord Upham at age twenty. Born into a wealthy family in Kennebunkport, Maine, she moved to Brunswick in 1825 after marrying Thomas C. Upham, a Bowdoin professor of mental and moral philosophy. Early and staunch supporters of the antislavery movement, the Uphams became friends of Harriet Beecher Stowe and her husband Calvin, after they moved to Brunswick in 1850. Phebe Lord Upham was also an outspoken voice in protesting the rule that forbade women from speaking in church meetings. She met often with the pastor of the First Parish Church to argue with him about this restriction.', 
                creation_date: 'ca. 1823', 
                credit_line: 'Gift of Edward D. Jameson', 
                accession_number: '1919.1'
            },

        ]);
    });
}