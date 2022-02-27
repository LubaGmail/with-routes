const {gql} = require('apollo-server');

const typeDefs = gql`
    "Query root type must be provided"
    type Query {
        tracks: [Track]!
        track(id: ID!): Track!
    }
     
    "One module might be part of multiple tracks"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
            "the entries in the array can't be null; the array can't be null"
        modules: [Module!]!
    }

    "Author of a Track"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
    
    """
        Multiple Modules compose a Track
        One module might be part of multiple tracks
    """
    type Module {
        id: ID!
        title: String!
        length: Int
    }

`;

module.exports = typeDefs;