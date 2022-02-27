import React from 'react'
import {
  Link,
  useParams,
} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        name
      }
      numberOfViews
      modules {
        title
      }
      description
    }
  }
`;

const Track = () => {
    const { trackId } = useParams();
    // console.log('trackId', trackId)

    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: { trackId },
    });
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (!data) return <p>Unknown state</p>
    const {track} = data
    // console.log('track', track)

    return (
        <>
          <h4>Track</h4>
          <h5>{track.id} | {track.title}</h5>

          <Link to="/tracks">Back to Tracks</Link>
        </>
    )
}

export default Track

