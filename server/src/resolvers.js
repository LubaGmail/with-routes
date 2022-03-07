const URL = "https://odyssey-lift-off-rest-api.herokuapp.com";

const resolvers = {
    Mutation: {
        /**
            PATCH  /track/{id}/numberOfViews          
            { "id": "c_0", ... "numberOfViews": 46, ... }
        */
        incViews: async (_, {id}, {dataSources}) => {
            try {
                const track = await dataSources.trackAPI.incViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                };
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                };
            }
        },
    },

    /**
     * schema.js  type Query  -- Root query
     */
    Query: {

        /**
            GET /tracks                                 
            [ {  "id": "c_0", ... "authorId": "cat-1", ... "modules": ["l_0", "l_1", "l_2",...], ... },  "id": "c_1", ... ]
        */    
        tracks: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracks();
        },

        /**
            GET /track/{id}
            { "id": "c_0", ... "authorId": "cat-1", ... "modules": ["l_0", "l_1", "l_2", ...], ... }
         */
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },

    Track: {
        /**
            GET /track/{id}/modules         Multiple Modules compose a Track. One module might be part of multiple tracks 
            [ { "id": "l_0", ... "trackId": "c_0", "authorId": "cat-1",... } ]
        */
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
        
        /**
            GET /author/{id}                Author of a Track
            { "id": "cat-1", "name": "Henri, le Chat Noir", ...  }
        */
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    }
    
};

module.exports = resolvers;

