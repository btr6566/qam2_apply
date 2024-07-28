import React from 'react'

import KeysTable from '../components/KeysTable';

import styles from './styles/SideNavBarPage.module.css'

// import delphi from '../placeholders/delphiJSONPayload.json'

function PremiumValueData({delphi}) {

    //--
    //Raw Data summary
    //--

    const tpd = delphi.Response.ConsumerSummary.PremiumValueData.TPD;
    const cii = delphi.Response.ConsumerSummary.PremiumValueData.CII;
    const mosaic = delphi.Response.ConsumerSummary.PremiumValueData.Mosaic;
    const scoring = delphi.Response.ConsumerSummary.PremiumValueData.Scoring;
    const sortCodeAggregation = delphi.Response.ConsumerSummary.PremiumValueData.SortCodeAggregation;

    return (
        <div className={styles.container}>
            <div className={styles.pageNav}>
                <ul className={styles.pageLinksList}>
                    <li className={styles.pageLink}><a className='link' href="#tpd">TPD</a></li>
                    <li className={styles.pageLink}><a className='link' href="#cii">CII</a></li>
                    <li className={styles.pageLink}><a className='link' href="#mosaic">Mosaic</a></li>
                    <li className={styles.pageLink}><a className='link' href="#scoring">Scoring</a></li>
                    <li className={styles.pageLink}><a className='link' href="#sortCodeAggregation">SortCodeAggregation</a></li>
                    
                </ul>
            </div>

            <div className={styles.content}>
                <h1>Premium Value Data</h1>
                
                <h2 id='tpd'>TPD</h2>
                <KeysTable jsonData={tpd}/>

                <h2 id='cii'>CII - Consumer Indebtness Index</h2>
                <KeysTable jsonData={cii}/>

                <h2 id='mosaic'>Mosaic</h2>
                <KeysTable jsonData={mosaic}/>

                <h2 id='scoring'>Scoring</h2>
                <KeysTable jsonData={scoring}/>

                <h2 id='sortCodeAggregation'>SortCodeAggregation</h2>
                <KeysTable jsonData={sortCodeAggregation}/>



            </div>
        </div>
    );
}

export default PremiumValueData;
