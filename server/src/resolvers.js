const URL = "https://odyssey-lift-off-rest-api.herokuapp.com";

const resolvers = {
    /**
     * schema.js  type Query  -- Root query
     */
    Query: {
        tracks: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracks();
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
     
    },

    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
    }
    
};

module.exports = resolvers;

