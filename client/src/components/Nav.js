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
import '../App.css';

import Tracks from './Tracks'
import Track from './Track'
import NoMatch from './NoMatch'

const Nav = () => {

    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to="tracks">Home</NavLink>
                </li>
                <li>
                    <NavLink to="tracks">Tracks</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
            </ul>
        
        </div>
    )
}

export default Nav