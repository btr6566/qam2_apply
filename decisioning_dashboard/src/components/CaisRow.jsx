import React from 'react'

// import KeyValueRow from './KeyValueRow';

import styles from './styles/Tables.module.css'



//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function CaisRow({LocationIndicator, ApplicantIndicator, CAISDetails}) {

    

    return ( 

        
        <tr>
            <td>{LocationIndicator}</td>
            <td>{ApplicantIndicator}</td>
            
        

        </tr>
    );
}

export default CaisRow;