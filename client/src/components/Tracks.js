import React from 'react'
import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useNavigate,
  useSearchParams,
  BrowserRouter
} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

export const TRACKS = gql`
  query getTracks {
    tracks {
        id
        title
        modules {
            title
        }
        author {
            name
        }
    }
  }
`;

const Tracks = () => {
    const { loading, error, data } = useQuery(TRACKS);
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (!data) return <p>Unknown state</p>
    const {tracks} = data

    // console.log('tracks', tracks[0].id)

    return (
        <>
            <h4>Tracks</h4>
            <ul>
            {
              tracks.map( (el) => (

                  <li key={el.id}>

                      <Link to={`/track/${el.id}`}>
                         {el.id}
                      </Link>
                      
                      &nbsp; | &nbsp;
                      
                      {el.author.name}
                  </li>

              ))
              
            }
            </ul>

        </>
    )
}

export default Tracks

