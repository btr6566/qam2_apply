import {React, useEffect, useState} from 'react'




//SQL Connection

// Can't do directly, need a proper backend to Node.js

// import "crypto-browserify";
// import "web-streams-polyfill/polyfill"; //For resolving issues in mssql import
// const readable = new ReadableStream();
// import mssql from 'mssql'






//CSS
import styles from './styles/Home.module.css'


//Backend
const mostRecentURL = 'http://localhost:3001/test';

function Home () {


    //Loads into state
    const [data, setData] = useState('');

    //UseEffect causes React to re-render when promise is fuffilled?
    useEffect(() => {
        fetch(mostRecentURL)
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    //Log to Condole once data changes
    useEffect( () => {
        console.log(data)
    }, [data])


    return (  
        <div className={styles.app}>
            <header className={styles.appHeader}>
                {/* <p>Hello World!</p> */}
                {/* <p>{!data ? "Loading..." : data}</p> */}
                <p>{data}</p>
            </header>
        </div>
    );
}

export default Home ;