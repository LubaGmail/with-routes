Odyssey
    https://odyssey.apollographql.com/lift-off-part4/testing-a-mutation-in-explorer

Apollo Studio Explorer
    studio.apollographql.com
    studio.apollographql.com/dev    - SETUP 
    curl -X 'GET' \
        'https://odyssey-lift-off-rest-api.herokuapp.com/track/c_0' \
        -H 'accept: application/json'

Rest API
    https://odyssey-lift-off-rest-api.herokuapp.com/

Git
    https://github.com/LubaGmail/with-routes

Types
    Scalar      Object      Enum        Interface       Input       Union

Scalar types
    String      Int      Float      Boolean      ID

Object types
    Author       Module


Update the number of views for a track.
    PATCH track/:id/numberOfViews

    curl -X 'PATCH' \
    'https://odyssey-lift-off-rest-api.herokuapp.com/track/c_0/numberOfViews' \
    -H 'accept: application/json'

    https://odyssey-lift-off-rest-api.herokuapp.com/track/c_0/numberOfViews


@apollo/client cache
    The value is first loaded from cache, then updates when the mutation response comes back successfully
    






