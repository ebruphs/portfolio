import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ children }) =>{
    return(
        <div>
            <div className={'menu-items'}>
                {/* <Link className={'header-links'} to='/'>About</Link> */}
                <Link className='header-links' to='/AboutComponent/About'>About</Link>
                <Link className='header-links' to='/ProjectsComponent/Projects'>My Works</Link>
                <Link className='header-links' to='/ContactComponent/Contacts'> Contact</Link>
            </div>
            {children}
        </div> 
    )
}
export default Header;