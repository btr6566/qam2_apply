import React from 'react'

// import KeyValueRow from './KeyValueRow';

// import styles from './styles/Tables.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function CaisRow({LocationIndicator, ApplicantIndicator, CAISDetails}) {

    
    const AccountType = CAISDetails.AccountType;
    
    console.log(LocationIndicator);
    console.log(ApplicantIndicator);
    console.log(CAISDetails);
    console.log(AccountType);


    return ( 

        
        <tr>
            <td>{LocationIndicator}</td>
            <td>{ApplicantIndicator}</td>
            <td>{AccountType}</td>
            
        

        </tr>
    );
}

export default CaisRow;