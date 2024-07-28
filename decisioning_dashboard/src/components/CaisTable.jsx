import React from 'react'

import KeyValueRow from './KeyValueRow';

import styles from './styles/KeysTable.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function CaisTable({jsonData}) {

    console.log(typeof jsonData);
    console.log(jsonData);

    return ( 
        <table className={styles.tableBody}>
            <thead>
                <tr className={styles.tableHeader}>
                    <th className={styles.tableCell}>LocationIndicator</th>
                    <th className={styles.tableCell}>ApplicantIndicator</th>

                    <th className={styles.tableCell}>AccountType</th>
                    <th className={styles.tableCell}>AccountStatus</th>
                    <th className={styles.tableCell}>CAISAccStartDate</th>
                    <th className={styles.tableCell}>JointAccount</th>
                    <th className={styles.tableCell}>SettlementDate</th>
                    <th className={styles.tableCell}>SettleDateCaption</th>
                </tr>
            </thead>
            {/* <tbody>
                {
                    jsonData.array.forEach(element => {
                    
                        <tr>
                            <td></td>
                        </tr>

                    })
                }
            </tbody> */}
        </table>
    );
}

export default CaisTable;