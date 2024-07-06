var express = require('express');
var router = express.Router();



//!===============
//! Database Setup
//!===============
const sql = require('mssql');

//Base to start, look at enviroment later
const config = {
    user: 'jdbc_integration_user@btrqasdlvl4', 
    password: 'tCL8s0&s£2q3', 
    server: 'btrqasdlvl4.database.windows.net', 
    port: 1433, 
    database: 'QA_Apply_1', 
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}


console.log("Starting...");

async function connectAndQuery(query) {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");

        var resultSet = await poolConnection.request().query(query);

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.CategoryName, row.ProductName);
        });

        // close connection only when we're certain application is finished
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}


const testQuery = `
    SELECT
        su.__PK
        
        ,su.CAIS_E1B07
        ,su.CAIS_E1B09
        ,pv.TrendedData_TRD_A_13
        ,su.CAIS_E1A09
        ,pv.HighCostCredit_TRD_STL_14

        ,pv.CII_NDSPACII
        ,pv.TrendedData_TRD_A_06
        ,su.CAIS_E1B13
        ,su.CAIS_E1B01
        ,pv.HighCostCredit_TRD_STL_19

        ,su.CAIS_E1B08
        ,pv.Scoring_E5S051
    FROM [Delphi].[VW_DelphiSummaryData] su
    INNER JOIN [Delphi].[VW_DelphiPremiumValueData] pv ON su.__PK = pv.__PK
    WHERE 
        su.__PK = 1
`;


//!===============
//! Endpoints
//!===============

/* GET users listing. */
router.get('/', function(req, res, next) {

    const payload = connectAndQuery(testQuery);

    res.send(payload);
});

module.exports = router;
