import{React, useState, useEffect} from 'react'


// import styles from './styles/navBar.module.css'

import RecentAppItem from '../components/RecentAppItem';

import styles from './styles/Tables.module.css'


//Backend
const mostRecentURL = 'http://localhost:3001/test';




//!==============
//! Component Definition
//!==============
function RecentAppsTable() {

    //--------------
    // Setup State
    //--------------

    //Prob better in App.JSX then here, but for testing leave for now

    //Loads into state
    const [mostRecentApps, setMostRecentApps] = useState([]);

    
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
    let recentApps = mostRecentApps.map((app) => (
        <RecentAppItem
            key={app.ID}
            id={app.ID}
            appDt={app.Insert_Ts}
            decision={app.caseData.finalDecision}
        />
    ))


    return ( 
        <div>
            <table className={styles.tableBody}>
                <thead className={styles.tableHeader}>
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

export default RecentAppsTable;