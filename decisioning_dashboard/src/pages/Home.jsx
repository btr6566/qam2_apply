import React from 'react'



import logo from '../images/logo.svg';
// import '../App.css';

//CSS
import styles from './styles/Home.module.css'

function Home () {
    return (  
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <p>
                Edit <code>src/App.jsx</code> and save to reload.
                </p>
                <a
                className={styles.appLink}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React - Hello World
                </a>
            </header>
        </div>
    );
}

export default Home ;