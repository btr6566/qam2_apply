import React from 'react'


// import delphi from '../placeholders/delphiJSONPayload.json'

function PremiumValueData({delphi}) {

    //--
    //Raw Data summary
    //--

    //JSON Stringify is a placeholder, converts to a string which can be renders by just calling e.g. {cais}
    var cais = JSON.stringify(delphi.Response.ConsumerSummary.Summary.CAIS);

    return (
        <div>
            <div>
            <h1>Premium Value Data</h1>
            <h2>CAIS - Credit Account Information Sharing</h2>
            {cais}


            </div>
        </div>
    );
}

export default PremiumValueData;
