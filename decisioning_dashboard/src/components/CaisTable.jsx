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
        <table className={styles.caisTableBody}>
            <thead>
                <tr className={styles.tableHeader}>
                    <th className={styles.tableCell}>Location Indicator</th>
                    {/* <th className={styles.tableCell}>Applicant Indicator</th> */}
                    <th className={styles.tableCell}>Match To</th>

                    <th className={styles.tableCell}>Account Type</th>
                    <th className={styles.tableCell}>Account Status</th>
                    <th className={styles.tableCell}>CAIS Account Start Date</th>
                    <th className={styles.tableCell}>Joint Account?</th>
                    <th className={styles.tableCell}>Settlement Date</th>
                    {/* <th className={styles.tableCell}>Settlement Date Caption</th> */}
                    <th className={styles.tableCell}>Current Balance</th>
                    <th className={styles.tableCell}>Credit Limit</th>
                    <th className={styles.tableCell}>Payment</th>
                    <th className={styles.tableCell}>Current Status</th>
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
                    jsonData.map((cais, index) => {
                        let LocationIndicator = cais.LocationIndicator;
                        let ApplicantIndicator = cais.ApplicantIndicator;
                        let CAISDetails = cais.CAISDetails;

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