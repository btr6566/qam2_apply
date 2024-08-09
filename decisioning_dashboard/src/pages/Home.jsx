import {React} from 'react'



//!==============
//! SQL Connection
//!==============
// Can't do directly, need a proper backend to Node.js

// import "crypto-browserify";
// import "web-streams-polyfill/polyfill"; //For resolving issues in mssql import
// const readable = new ReadableStream();
// import mssql from 'mssql'


//!==============
//! Used Components
//!==============
import RecentAppsTable from '../components/RecentAppsTable';

//==============
// CSS
//==============
import styles from './styles/Home.module.css'



//!==============
//! Component Definition
//!==============
function Home ({getDelphiData}) {




    return (  
        <div className={styles.app}>
            
            {/* <p>{!data ? "Loading..." : data}</p> */}
            <h1>Recent Applications:</h1>
            <RecentAppsTable/>

        </div>
    );
}

export default Home ;