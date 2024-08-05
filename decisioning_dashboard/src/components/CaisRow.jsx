import React from 'react'

// import KeyValueRow from './KeyValueRow';

import styles from './styles/Tables.module.css'

import getCAISAccountDescription from '../functions/caisGetAccountType';
import getMatchTo from '../functions/getMatchTo';


//!==============
//! Component Definition
//!==============

//use the name jKey as key is a reserved word for adding a PK to every rendered iteration of the component
function CaisRow({ LocationIndicator, ApplicantIndicator, CAISDetails }) {

    //Translate AccountType into Business name
    const AccountType = CAISDetails.AccountType;
    const AccountTypeDesc = getCAISAccountDescription(AccountType);
    const MatchTo = getMatchTo(CAISDetails.MatchDetails.MatchTo);


    //never going to need this outside here, as specific to CAIS
    const AccountStatusDESC = (AccountStatus) => {
        switch (AccountStatus) {
            case 'A':
                return 'Active';
            case 'S':
                return 'Settled';
            case 'D':
                return 'Delinquent';
            case 'F':
                return 'Defaulted';
            default:
                return 'Unknown';
        }
    };
    const AccountStatus = AccountStatusDESC(CAISDetails.AccountStatus);


    const CAISAccStartDate = CAISDetails.CAISAccStartDate;
    const JointAccount = CAISDetails.JointAccount;
    const SettlementDate = CAISDetails.SettlementDate;
    // const SettleDateCaption = CAISDetails.SettleDateCaption;
    const CurrentBalance = CAISDetails.Balance.Amount;
    const CurrentStatus = CAISDetails.AccountBalances[0].Status;
    const CreditLimitAmount = CAISDetails.CreditLimit.Amount;
    const Payment = CAISDetails.Payment;



    return (


        <tr className={styles.tableRow}>
            <td>{LocationIndicator}</td>
            {/* <td>{ApplicantIndicator}</td> */}
            <td>{MatchTo}</td>
            <td>{AccountTypeDesc}</td>
            <td>{AccountStatus}</td>
            <td>{CAISAccStartDate}</td>
            <td>{JointAccount}</td>
            <td>{SettlementDate}</td>
            {/* <td>{SettleDateCaption}</td> */}
            <td>{CurrentBalance}</td>
            <td>{CreditLimitAmount}</td>
            <td>{Payment}</td>
            <td>{CurrentStatus}</td>

        </tr>
    );
}

export default CaisRow;