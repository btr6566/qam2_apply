import React from 'react'


//SQL Connection
// import webpackConfigJs from './webpack.config.js';
// import mssql from 'mssql'





//CSS
import styles from './styles/Home.module.css'


function Home () {
    return (  
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <p>Hello World!</p>
            </header>
        </div>
    );
}

export default Home ;