import React from 'react'

// import KeyValueRow from './KeyValueRow';
import CaisRow from './CaisRow'

import styles from './styles/Tables.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function CaisTable({jsonData}) {

    // console.log(typeof jsonData);
    // console.log(jsonData);

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
            <tbody>

                {
                    jsonData.forEach(element => {
                    
                        
                        

                        let LocationIndicator = element.LocationIndicator;
                        let ApplicantIndicator = element.ApplicantIndicator;
                        let CAISDetails = element.CAISDetails;

                        console.log(CAISDetails.length);

                        CAISDetails.forEach(caisdetail => {

                            // let key = caisdetail.index();

                            <CaisRow LocationIndicator={LocationIndicator} ApplicantIndicator={ApplicantIndicator} CAISDetails={caisdetail}/>
                        
                            // console.log(element);
                            // console.log(LocationIndicator);
                            // console.log(ApplicantIndicator);
                            console.log(caisdetail);
                        
                        });

                        //returns (destructured parameter) is not iterable?
                        // CAISDetails.map(([index,value]) => {
                        //     return(

                        //         <CaisRow key={index} LocationIndicator={LocationIndicator} ApplicantIndicator={ApplicantIndicator} CAISDetails={value}/>
                        //     )
                            
                        // })

                    })
                }
            </tbody>
        </table>
    );
}

export default CaisTable;