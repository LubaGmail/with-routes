const {RESTDataSource} = require('apollo-datasource-rest');

const REST_API = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = REST_API;
    }

    getTracks() {
        return this.get('tracks');
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);        // modules: [Module!]!
    }
 
    getAuthor(authorId) {
        return this.get(`author/${authorId}`);              // author: Author!
    }

}

module.exports = TrackAPI;