import React from 'react'


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
    var cais = JSON.stringify(delphi.Response.ConsumerSummary.Summary.CAIS);

    var publicInfo = JSON.stringify(delphi.Response.ConsumerSummary.Summary.PublicInfo);

    var electoralRoll = JSON.stringify(delphi.Response.ConsumerSummary.Summary.ElectoralRoll);
    
    var cifas = JSON.stringify(delphi.Response.ConsumerSummary.Summary.CIFAS);

    var caps = JSON.stringify(delphi.Response.ConsumerSummary.Summary.CAPS);

    var noc = JSON.stringify(delphi.Response.ConsumerSummary.Summary.NOC);

    var cml = JSON.stringify(delphi.Response.ConsumerSummary.Summary.CML);

    var gain = JSON.stringify(delphi.Response.ConsumerSummary.Summary.GAIN);

    var tpd = JSON.stringify(delphi.Response.ConsumerSummary.Summary.TPD);

    var rentalExchange = JSON.stringify(delphi.Response.ConsumerSummary.Summary.RentalExchange);


    return (
        <div>
            <div className='pageNav'>

                <a className='link' href="#cais">CAIS</a>


            </div>

            <div className='content'>
            <h1>Raw Data Summary</h1>
            <h2 id='cais'>CAIS - Credit Account Information Sharing</h2>
            {cais}

            <h2 id='publicInfo'>Public Information</h2>
            {publicInfo}

            <h2 id='er'>Electoral Roll</h2>
            {electoralRoll}

            <h2 id='cifas'>CIFA - National Fraud Database</h2>
            {cifas}

            <h2 id='caps'>CAPS - Credit Application Previous Searches</h2>
            {caps}

            <h2 id='noc'>NOC - Notice of Corrections</h2>
            {noc}

            <h2 id='cml'>CML - Council of Mortgage Lenders</h2>
            {cml}

            <h2 id='gain'>GAIN - Gone Away Information Network</h2>
            {gain}

            <h2 id='tpd'>TPD</h2>
            {tpd}

            <h2 id='rentalE'>Rental Exchange</h2>
            {rentalExchange}

            </div>
        </div>
    );
}

export default SummaryData;
