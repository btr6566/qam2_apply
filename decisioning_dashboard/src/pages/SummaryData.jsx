import React from 'react'

import KeysTable from '../components/KeysTable';
import KeyValueRow from '../components/KeyValueRow';

// import styles from './styles/navBar.module.css'

// import delphi from '../placeholders/delphiJSONPayload.json'



//!-----------
//! Component Define
//!-----------
function SummaryData({delphi}) {

    //--
    //Raw Data summary
    //--

    //JSON Stringify is a placeholder, converts to a string which can be renders by just calling e.g. {cais}
    // var cais = JSON.stringify(delphi.Response.ConsumerSummary.Summary.CAIS);

    var cais = delphi.Response.ConsumerSummary.Summary.CAIS;

    var publicInfo = delphi.Response.ConsumerSummary.Summary.PublicInfo;

    var electoralRoll = delphi.Response.ConsumerSummary.Summary.ElectoralRoll;
    
    var cifas = delphi.Response.ConsumerSummary.Summary.CIFAS;

    var caps = delphi.Response.ConsumerSummary.Summary.CAPS;

    var noc = delphi.Response.ConsumerSummary.Summary.NOC;

    var cml = delphi.Response.ConsumerSummary.Summary.CML;

    var gain = delphi.Response.ConsumerSummary.Summary.GAIN;

    var tpd = delphi.Response.ConsumerSummary.Summary.TPD;

    //Don't return this so no point including...
    // var rentalExchange = delphi.Response.ConsumerSummary.Summary.RentalExchange;


    return (
        <div>
            <div className='pageNav'>
                <a className='link' href="#cais">CAIS</a>
                <a className='link' href="#publicInfo">PublicInfo</a>
                <a className='link' href="#er">ElectoralRoll</a>
                <a className='link' href="#cifas">CIFAS</a>
                <a className='link' href="#caps">CAPS</a>
                <a className='link' href="#noc">NOC</a>
                <a className='link' href="#cml">CML</a>
                <a className='link' href="#gain">GAIN</a>
                <a className='link' href="#tpd">TPD</a>
            </div>

            <div className='content'>
                <h1>Raw Data Summary</h1>
                
                <h2 id='cais'>CAIS - Credit Account Information Sharing</h2>
                <KeysTable jsonData={cais}/>


                <h2 id='publicInfo'>Public Information</h2>
                <KeysTable jsonData={publicInfo}/>

                <h2 id='er'>Electoral Roll</h2>
                <KeysTable jsonData={electoralRoll}/>

                <h2 id='cifas'>CIFAS - National Fraud Database</h2>
                <KeysTable jsonData={cifas}/>

                <h2 id='caps'>CAPS - Credit Application Previous Searches</h2>
                <KeysTable jsonData={caps}/>

                <h2 id='noc'>NOC - Notice of Corrections</h2>
                <KeysTable jsonData={noc}/>

                <h2 id='cml'>CML - Council of Mortgage Lenders</h2>
                <KeysTable jsonData={cml}/>

                <h2 id='gain'>GAIN - Gone Away Information Network</h2>
                <KeysTable jsonData={gain}/>

                <h2 id='tpd'>TPD</h2>
                <KeysTable jsonData={tpd}/>


            </div>
        </div>
    );
}

export default SummaryData;
