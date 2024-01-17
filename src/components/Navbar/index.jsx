import React from 'react';
import {Link,Outlet} from 'react-router-dom';
// import { FaGithub } from "react-icons/fa";
import '../../assets/style/index.css';
import im from '../../assets/images/img1.webp';


const Navbar = ()=>{

    return(
        <>
          <ul id='nav'>
            <li><Link to="/"> <img width="50px" src={im} alt="..." /> </Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/reference" >Reference</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {/* <li><FaGithub style={{fontSize:"40px"}} /></li> */}
            <Outlet/>
          </ul>
        </>
    )
}

export default Navbar;