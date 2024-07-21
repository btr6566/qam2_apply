import React from 'react'

import KeyValueRow from './KeyValueRow';

// import styles from './styles/navBar.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function KeysTable({jsonData}) {

    return ( 
        <table>
            <th>
                <td>Variable</td>
                <td>Value</td>
            </th>
            <tbody>
                {Object.entries(jsonData).map(([key, value]) => (
                    <KeyValueRow key={key} jKey={key} value={value}/>
                    )
                )}
            </tbody>
        </table>
    );
}

export default KeysTable;