import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import PunkList from "./Components/PunkList";
import Main from "./Components/Main";
import axios from "axios"

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
       "https://testnets-api.opensea.io/assets?asset_contract_address=0xF51089eF31F1dE79be13C2Aed23E3FD09509171e&order_direction=asc"
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
    </div>
  );
}

export default App;