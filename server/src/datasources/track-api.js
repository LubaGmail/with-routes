const {RESTDataSource} = require('apollo-datasource-rest');

const REST_API = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = REST_API;
    }

    /**
        PATCH  /track/{id}/numberOfViews        
        { "id": "c_0", ... "numberOfViews": 46, ... }
     */
    incViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }

    /**
        GET /tracks                             
        [ {  "id": "c_0", ... "authorId": "cat-1", ... "modules": ["l_0", "l_1", "l_2",...], ... },  "id": "c_1", ... ]
    */    
    getTracks() {
        return this.get('tracks');
    }

    /** 
        GET /track/{id}                         
        { "id": "c_0", ... "authorId": "cat-1", ... "modules": ["l_0", "l_1", "l_2", ...], ... }
    */
    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    /**
        GET /track/{id}/modules         Multiple Modules compose a Track. One module might be part of multiple tracks 
        [ { "id": "l_0", ... "trackId": "c_0", "authorId": "cat-1",... } ]
     */
    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);        // Tracks.modules: [Module!]!
    }
 
    /**
        GET /author/{id}                Author of a Track
        { "id": "cat-1", "name": "Henri, le Chat Noir", ...  }
    */
    getAuthor(authorId) {
        return this.get(`author/${authorId}`);              // Tracks.author: Author!
    }

}

module.exports = TrackAPI;