import React from 'react'

import CaisTable from '../components/CaisTable';

import styles from './styles/SideNavBarPage.module.css'

// import delphi from '../placeholders/delphiJSONPayload.json'

//!==============
//! Component Definition
//!==============
function RawData({delphi}) {

    //Objects for Full Consumer Data (not complete)
    const caisData = delphi.Response.FullConsumerData.ConsumerData.CAIS;

    // associationData = delphi.Response.FullConsumerData.Association;

    // locationLinkData = delphi.Response.FullConsumerData.LocationLink;

    // previousApplicationData = delphi.Response.FullConsumerData.PreviousApplication;

    // extendedPreviousAppData = delphi.Response.FullConsumerData.ExtendedPreviousApp;

    // votersRollLocationData = delphi.Response.FullConsumerData.VotersRollLocation;

    // votersRollPersonData = delphi.Response.FullConsumerData.VotersRollPerson;


    return (
        <div className={styles.container}>
        <div className={styles.pageNav}>
            <ul className={styles.pageLinksList}>
                <li className={styles.pageLink}><a className='link' href="#cais">CAIS</a></li>
            </ul>
        </div>

        <div className={styles.content}>
            <h1>Raw Data</h1>
            
            <h2 id='cais'>CAIS - Credit Account Information Sharing</h2>
            <CaisTable jsonData={caisData}/>


        </div>
    </div>
    );
}

export default RawData;
