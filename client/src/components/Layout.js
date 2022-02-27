import React from 'react'
import {
  Routes,
  Route,
//   Outlet,
//   Link,
//   NavLink,
//   useParams,
//   useNavigate,
//   useSearchParams,
//   BrowserRouter
} from 'react-router-dom';

import About from './About'
import Tracks from './Tracks'
import Track from './Track'
import NoMatch from './NoMatch'
import Nav from './Nav'

const Layout = () => {

    return (
        <>
            <h4>Layout</h4>
            <Nav />
            <Routes>
                <Route path="/" element={<Tracks />}></Route>
                <Route path="tracks" element={<Tracks />}></Route>
                <Route path="track/:trackId" element={<Track/>}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="*" element={<NoMatch />}></Route>
            </Routes>
        
        </>
    )
}

export default Layout