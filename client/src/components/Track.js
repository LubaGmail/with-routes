import React from 'react'
import {
  Link,
  useParams,
} from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import '../App.css';

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
`

export const INC_VIEWS = gql`
  mutation anyName($id: ID!) {
    incViews(id: $id) {             
        code
        success
        message
        track {
          id
          numberOfViews
        }
      } 
    }
  `

const Track = () => {
    const { trackId } = useParams();

    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: { trackId }
    });

    //  returns mutation function
    const [incViews, {loading: mutLoading, error: mutError, data: mutData}] = useMutation(INC_VIEWS, {
        variables: { id: trackId },
        // The value is first loaded from cache, then updates when the mutation response comes back successfully
        onCompleted: (mutData) => {
          // console.log('onCompleted', incViews.track);
        },
    });

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (!data) return <p>Unknown query state</p>
    const {track} = data
    // console.log('track', track)
  
    const handleClick = (ev) => {
      console.log('ev', ev.target.innerHTML)
    }

    return (
        <>
          <h4>Track</h4>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td className='colHeader'>ID: </td>
                <td className='col clickable'
                  onClick={ incViews }
                >{track.id} </td>
              </tr>
              <tr>
                <td className='colHeader'>Title: </td>
                <td className='col'>{track.title}</td>
              </tr>
            </tbody>
            <tfoot>
               <tr><th>&nbsp;</th></tr>
              <tr>
                 <th colSpan='2'><Link to="/tracks">Back to Tracks</Link></th>
              </tr>
            </tfoot>
          </table>

          <TrackDetail track={track}
          />
           
        </>
    )
}

export const TrackDetail = ({track}) => {

  return (

    <>
      <h5>Track Detail</h5>
      <div>
        <label>Number Of Views:</label> {track.numberOfViews}
      </div>
    </>
  )
}

export default Track

