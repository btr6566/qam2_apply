import React from 'react'
import { Link } from 'react-router-dom';

import styles from './styles/navBar.module.css'

import vbgLogo from '../images/Vanquis Banking Group Horizontal Logo Mark RGB_WHITE.jpg';

function NavBar() {
    return ( 
        <nav className={styles.navBarContainer}>
            {/* Logo roughly 12.5% of original size */}
            <img className={styles.vbgLogo} src={vbgLogo} width={238} height={75} alt="logo" />
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/summary-data">Summary Data</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;