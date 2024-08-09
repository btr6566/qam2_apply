//-----------
//Packages
//-----------
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//-----------
//Components
//-----------
import NavBar from './components/navBar.jsx';
import Footer from './components/Footer.jsx';

//-----------
//Pages
//-----------
import Home from './pages/Home.jsx';
import SummaryData from './pages/SummaryData.jsx';
import PremiumValueData from './pages/PremiumValueData.jsx';
import RawData from './pages/RawData.jsx';
import ReactDefault from './pages/ReactDefault.jsx';


//-----------
//Placeholders
//-----------
import delphi from './placeholders/delphiJSONPayload.json'
// import delphiSwagger from './placeholders/Delphi_Swagger_Sample.json'

////needed to resolve complie errors from Libaries, by using Polyfils
//// import webpackConfigJs from './webpack.config.js';

//-----------
//Variables
//-----------
const delphiDataURL =  process.env.REACT_APP_DELPHI_DATA_URL; //For react, vars must start with "REACT_APP_"

//!==============
//! Component Definition
//!==============
function App() {

  //For Displaying Delphi Data, store an ID & Data in State
  const [delphiId, setDelphiId] = useState();
  const [delphiData, setDelphiData] = useState('');

  //Then define a function that can be called back to query the Backend DB
  async function getDelphiData(__pk) {

    let result;

    const uri = delphiDataURL + '/' + __pk;

    await fetch(uri)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => setDelphiId(data.payload))
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            setDelphiId(error.message);
        });

  }


  return (
    // Use BrowserRouter as Root, to comply with JSX needing a single parent
    <BrowserRouter>  
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home getDelphiData={getDelphiData}/>} />
        <Route path="/summary-data" element={<SummaryData delphi={delphi} />} />
        <Route path="/premium-value-data" element={<PremiumValueData delphi={delphi} />} />
        <Route path="/raw-data" element={<RawData delphi={delphi}/>} />
        <Route path="/react-default" element={<ReactDefault />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
