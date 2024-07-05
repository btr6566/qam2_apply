import React from 'react'




//SQL Connection

// Can't do directly, need a proper backend to Node.js

// import "crypto-browserify";
// import "web-streams-polyfill/polyfill"; //For resolving issues in mssql import
// const readable = new ReadableStream();
// import mssql from 'mssql'






//CSS
import styles from './styles/Home.module.css'


function Home () {


    //Loads into state
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);



    return (  
        <div className={styles.app}>
            <header className={styles.appHeader}>
                {/* <p>Hello World!</p> */}
                <p>{!data ? "Loading..." : data}</p>
            </header>
        </div>
    );
}

export default Home ;