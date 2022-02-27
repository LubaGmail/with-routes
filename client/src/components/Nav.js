import React from 'react'
import {
    NavLink,
} from 'react-router-dom';
import '../App.css';

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