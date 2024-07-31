import React from 'react'

import KeyValueRow from './KeyValueRow';

import styles from './styles/Tables.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function KeysTable({jsonData}) {

    return ( 
        <table className={styles.tableBody}>
            <thead>
                <tr className={styles.tableHeader}>
                    <th className={styles.tableCell}>Variable</th>
                    <th className={styles.tableCell}>Value</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.entries(jsonData).map(([key, value]) => {

                        // console.log(value);
                        // console.log(typeof value);

                        return (
                            
                            // Do NOT render rows that are NULL, waste of time
                            value !== undefined && value !== null  && value !== ''  ? (
                                <KeyValueRow key={key} jKey={key} value={value} />
                            ) : null
        
                        )
                    }
                )}
            </tbody>
        </table>
    );
}

export default KeysTable;