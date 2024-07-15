import React from 'react'


import styles from './styles/navBar.module.css'



function RecentApp(props) {

    //Decontruct
    const {id, appDt, decision} = props


    return ( 
        <tr>
            <td>{id}</td>
            <td>{appDt}</td>
            <td>{decision}</td>
        </tr>
    );
}

export default RecentApp;