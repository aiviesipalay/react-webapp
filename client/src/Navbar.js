import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar(){
    const [click, setclick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)
    return(
       <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/"className="navbar-logo">
                    <img className='navlogo' src="/carouselPic/chick.jpg"></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' className="nav-links" onClick={closeMobileMenu}>
                           Gallery
                        </Link>
                    </li>
                     <li className='nav-item'>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                           Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contacts' className="nav-links" onClick={closeMobileMenu}>
                            Contacts
                        </Link>
                    </li>
                    
                    {/* <li className='nav-item'>
                        <Link to='/sign-up' className="'nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li> */}
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}  */}
            
            </div>
        </nav>
       </>
    );
}

export default Navbar









// const Navbar = () => {
//    return(
//     <nav>
//     <ul>
//         <li>
//             <Link to="/">Home</Link>
//         </li>
//         <li>
//             <Link to="/gallery">Gallery</Link>
//         </li>
//         <li>
//             <Link to="/services">Services</Link>
//         </li>
//         <li>
//             <Link to="/contacts">Contacts</Link>
//         </li>
//     </ul>
//     </nav>
//    )


// }
// export default Navbar;