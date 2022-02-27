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

const NoMatch = () => {

    return (
        <>
            <h4>No Match</h4>
        </>
    )
}


export default NoMatch