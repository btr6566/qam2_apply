import React from 'react'

import KeysTable from '../components/KeysTable';

import styles from './styles/SideNavBarPage.module.css'

// import delphi from '../placeholders/delphiJSONPayload.json'

function PremiumValueData({delphi}) {

    //--
    //Raw Data summary
    //--

    //Various High Level
    const tpd = delphi.Response.ConsumerSummary.PremiumValueData.TPD;
    const cii = delphi.Response.ConsumerSummary.PremiumValueData.CII;
    const mosaic = delphi.Response.ConsumerSummary.PremiumValueData.Mosaic;
    const scoring = delphi.Response.ConsumerSummary.PremiumValueData.Scoring;
    const sortCodeAggregation = delphi.Response.ConsumerSummary.PremiumValueData.SortCodeAggregation;
    const addrLink = delphi.Response.ConsumerSummary.PremiumValueData.AddrLink;
    const director = delphi.Response.ConsumerSummary.PremiumValueData.Director;
    const ageDoB = delphi.Response.ConsumerSummary.PremiumValueData.AgeDoB;
    const bespoke = delphi.Response.ConsumerSummary.PremiumValueData.Bespoke;
    const impairedCH = delphi.Response.ConsumerSummary.PremiumValueData.ImpairedCH;
    const DeferredPaymentCreditSummary = delphi.Response.ConsumerSummary.PremiumValueData.DeferredPaymentCreditSummary;

    //  AdditDelphiBlocks
    const APACSCCBehavrlData = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.APACSCCBehavrlData;
    const Utilisationblock = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.Utilisationblock;
    const NeverPaidDefsBlock = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.NeverPaidDefsBlock;
    const TelecommsBlock = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.TelecommsBlock;
    const TrendedData = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.TrendedData;
    const EstimatedDisposableIncomeRAG = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.EstimatedDisposableIncomeRAG;
    const HighCostCredit = delphi.Response.ConsumerSummary.PremiumValueData.AdditDelphiBlocks.HighCostCredit;

    //VerticalMarkets
    const AssetFinanceHP = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.AssetFinanceHP;
    const BankCards = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.BankCards;
    const CreditSales = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.CreditSales;
    const CurrentAccounts = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.CurrentAccounts;
    const MailOrderHomeShopping = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.MailOrderHomeShopping;
    const Mortgages = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.Mortgages;
    const RetailStoreCards = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.RetailStoreCards;
    const SecuredLoans = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.SecuredLoans;
    const UnsecuredLoans = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.UnsecuredLoans;
    const Utilities = delphi.Response.ConsumerSummary.PremiumValueData.VerticalMarkets.Utilities;

    return (
        <div className={styles.container}>
            <div className={styles.pageNav}>

                <ul className={styles.pageLinksList}>

                    {/* Various High Level */}
                    <li><a className='link' href="#tpd">TPD</a></li>
                    <li><a className='link' href="#cii">CII</a></li>
                    <li><a className='link' href="#mosaic">Mosaic</a></li>
                    <li><a className='link' href="#scoring">Scoring</a></li>
                    <li><a className='link' href="#sortCodeAggregation">Sort Code Aggregation</a></li>
                    <li><a className='link' href="#addrLink">Address Link</a></li>
                    <li><a className='link' href="#director">Director</a></li>
                    <li><a className='link' href="#ageDoB">AgeDoB</a></li>
                    <li><a className='link' href="#bespoke">Bespoke</a></li>
                    <li><a className='link' href="#impairedCH">ImpairedCH</a></li>
                    <li><a className='link' href="#DeferredPaymentCreditSummary">Deferred Payment Credit Summary</a></li>

                    {/* AdditDelphiBlocks */}
                    <li><a className='link' href="#additDelphiBlocks">AdditDelphiBlocks</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#APACSCCBehavrlData">APACSCC Behavioural Data</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#Utilisationblock">Utilisation Block</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#NeverPaidDefsBlock">Never Paid Defs Block</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#TelecommsBlock">Telecomms Block</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#TrendedData">Trended Data</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#EstimatedDisposableIncomeRAG">Estimated Disposable Income RAG</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#HighCostCredit">High Cost Credit</a></li>

                    {/* AdditDelphiBlocks */}
                    <li className={styles.pageLink}><a className='link' href="#VerticalMarkets">VerticalMarkets</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#AssetFinanceHP">Asset Finance HP</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#BankCards">Bank Cards</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#CreditSales">Credit Sales</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#CurrentAccounts">Current Accounts</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#MailOrderHomeShopping">Mail Order Home Shopping</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#Mortgages">Mortgages</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#RetailStoreCards">Retail Store Cards</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#SecuredLoans">Secured Loans</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#UnsecuredLoans">Unsecured Loans</a></li>
                        <li className={styles.pageLinkLvl2}><a className='link' href="#Utilities">Utilities</a></li>


                    
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

                    <h2 id='addrLink'>AddrLink</h2>
                    <KeysTable jsonData={addrLink}/>

                    <h2 id='director'>Director</h2>
                    <KeysTable jsonData={director}/>

                    <h2 id='ageDoB'>AgeDoB</h2>
                    <KeysTable jsonData={ageDoB}/>

                    <h2 id='bespoke'>Bespoke</h2>
                    <KeysTable jsonData={bespoke}/>

                    <h2 id='impairedCH'>ImpairedCH</h2>
                    <KeysTable jsonData={impairedCH}/>

                    <h2 id='DeferredPaymentCreditSummary'>DeferredPaymentCreditSummary</h2>
                    <KeysTable jsonData={DeferredPaymentCreditSummary}/>

                <h1 id='additDelphiBlocks'>Addit Delphi Blocks</h1>

                    <h2 id='APACSCCBehavrlData'>APACSCCBehavrlData</h2>
                    <KeysTable jsonData={APACSCCBehavrlData}/>

                    <h2 id='Utilisationblock'>Utilisationblock</h2>
                    <KeysTable jsonData={Utilisationblock}/>

                    <h2 id='NeverPaidDefsBlock'>NeverPaidDefsBlock</h2>
                    <KeysTable jsonData={NeverPaidDefsBlock}/>

                    <h2 id='TelecommsBlock'>TelecommsBlock</h2>
                    <KeysTable jsonData={TelecommsBlock}/>

                    <h2 id='TrendedData'>TrendedData</h2>
                    <KeysTable jsonData={TrendedData}/>

                    <h2 id='EstimatedDisposableIncomeRAG'>EstimatedDisposableIncomeRAG</h2>
                    <KeysTable jsonData={EstimatedDisposableIncomeRAG}/>

                    <h2 id='HighCostCredit'>HighCostCredit (formerly the HomeCreditBlock)</h2>
                    <KeysTable jsonData={HighCostCredit}/>

                <h1 id='VerticalMarkets'>Vertical Markets Blocks</h1>
                    <h2 id='AssetFinanceHP'>AssetFinanceHP</h2>
                    <KeysTable jsonData={AssetFinanceHP}/>

                    <h2 id='BankCards'>BankCards</h2>
                    <KeysTable jsonData={BankCards}/>

                    <h2 id='CreditSales'>CreditSales</h2>
                    <KeysTable jsonData={CreditSales}/>

                    <h2 id='CurrentAccounts'>CurrentAccounts</h2>
                    <KeysTable jsonData={CurrentAccounts}/>

                    <h2 id='MailOrderHomeShopping'>MailOrderHomeShopping</h2>
                    <KeysTable jsonData={MailOrderHomeShopping}/>

                    <h2 id='Mortgages'>Mortgages</h2>
                    <KeysTable jsonData={Mortgages}/>

                    <h2 id='RetailStoreCards'>RetailStoreCards</h2>
                    <KeysTable jsonData={RetailStoreCards}/>

                    <h2 id='SecuredLoans'>SecuredLoans</h2>
                    <KeysTable jsonData={SecuredLoans}/>

                    <h2 id='UnsecuredLoans'>UnsecuredLoans</h2>
                    <KeysTable jsonData={UnsecuredLoans}/>

                    <h2 id='Utilities'>Utilities</h2>
                    <KeysTable jsonData={Utilities}/>

            </div>
        </div>
    );
}

export default PremiumValueData;


