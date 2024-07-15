import {React, useEffect, useState} from 'react'



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

import RecentApp from '../components/RecentApp';

//==============
// CSS
//==============
import styles from './styles/Home.module.css'


//Backend
const mostRecentURL = 'http://localhost:3001/test';




//!==============
//! Component Definition
//!==============
function Home () {

    //--------------
    // Setup State
    //--------------

    //Prob better in App.JSX then here, but for testing leave for now

    //Loads into state
    const [mostRecentApps, setMostRecentApps] = useState('');

    
    //UseEffect causes React to re-render when promise is fuffilled?
    useEffect(() => {
        fetch(mostRecentURL)
            .then((res) => res.json())
            .then((res) => setMostRecentApps(res.payload));
    }, []);

    //Log to Console once data changes
    useEffect( () => {
        console.log(typeof mostRecentApps);
        console.log(mostRecentApps);
    }, [mostRecentApps])


    //--------------
    // Map list
    //--------------

    //Mapp the query Results to a Table. Re-use ID for the Key to avoid React Warning
    let recentApps = mostRecentApps.map((app) => (
        <RecentApp
        key={app.ID}
        id={app.ID}
        appDt={app.Insert_Ts}
        decision={app.caseData.finalDecision}
        />
    ))

    return (  
        <div className={styles.app}>
            {/* <header className={styles.appHeader}>
            </header> */}
                {/* <p>{!data ? "Loading..." : data}</p> */}
            <table>
                <thead>
                    <th>ID</th>
                    <th>ApplicationDatetime</th>
                    <th>Decision</th>
                </thead>
                <tbody>
                    {recentApps}
                </tbody>
            </table>
        </div>
    );
}

export default Home ;