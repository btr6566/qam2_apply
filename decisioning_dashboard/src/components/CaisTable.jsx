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

                {/* {
                //Apparently ForEacg does not work because it doesn't return anything, so React can't render anything
                    jsonData.forEach(element => {

                        let LocationIndicator = element.LocationIndicator;
                        let ApplicantIndicator = element.ApplicantIndicator;
                        let CAISDetails = element.CAISDetails;

                        CAISDetails.forEach(caisdetail => {

                            <CaisRow LocationIndicator={LocationIndicator} ApplicantIndicator={ApplicantIndicator} CAISDetails={caisdetail}/>
                        });

                        //returns (destructured parameter) is not iterable?
                        // CAISDetails.map(([index,value]) => {
                        //     return(
                        //         <CaisRow key={index} LocationIndicator={LocationIndicator} ApplicantIndicator={ApplicantIndicator} CAISDetails={value}/>
                        //     )
                        // })
                    })
                } */}


                {
                    //Using Map instead, which also solves the index problem
                    jsonData.map((element, index) => {
                        let LocationIndicator = element.LocationIndicator;
                        let ApplicantIndicator = element.ApplicantIndicator;
                        let CAISDetails = element.CAISDetails;

                        return CAISDetails.map((caisdetail, caisIndex) => (
                            <CaisRow
                                key={`${index}-${caisIndex}`}
                                LocationIndicator={LocationIndicator}
                                ApplicantIndicator={ApplicantIndicator}
                                CAISDetails={caisdetail}
                            />
                        ));
                })}
            </tbody>
        </table>
    );
}

export default CaisTable;