const {gql} = require('apollo-server');

const typeDefs = gql`
    "Mutation root type"
    type Mutation {
        incViews(id: ID!): IncViewsResponse!
    }

    """
        PATCH  /track/{id}/numberOfViews
        {
            "id": "c_0", ... "numberOfViews": 46, ...
        }
    """
    type IncViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    """
        GET /tracks
        [
            {
                "id": "c_0", ... "authorId": "cat-1", ... "modules": ["l_0", "l_1", "l_2",...], ...
            },  "id": "c_1", ...
        ]
        Query root type must be provided
    """

    type Query {
        tracks: [Track]!
        track(id: ID!): Track
    }

    """
        GET /track/{id}
        {
            "id": "c_0", ... "authorId": "cat-1", ... "modules": ["l_0", "l_1", "l_2", ...], ...
        }
        One module might be part of multiple tracks
    """
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
    
    """
        GET /track/{id}/modules
        [
            {
                "id": "l_0", ... "trackId": "c_0", "authorId": "cat-1",...
            }
        ]
        Multiple Modules compose a Track. One module might be part of multiple tracks
    """
    type Module {
        id: ID!
        title: String!
        length: Int
    }
    
    """
        GET /author/{id}
        {
            "id": "cat-1", "name": "Henri, le Chat Noir", ...
        }
        Author of a Track
    """
    type Author {
        id: ID!
        name: String!
        photo: String
    }

`;

module.exports = typeDefs;