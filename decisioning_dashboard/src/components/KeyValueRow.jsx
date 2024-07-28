import React from 'react'


import styles from './styles/KeysTable.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function KeyValueRow({jKey, value}) {
    return ( 
        <tr className={styles.tableRow}>
            <td>{jKey}</td>
            <td>{value}</td>
        </tr>
    );
}

export default KeyValueRow;