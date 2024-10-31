
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phones from './components/Phones/Phones'
function App() {



  return (
    <>

<NavBar></NavBar>
{/* <DaisyNav></DaisyNav> */}

<PriceOptions></PriceOptions>
<LineChart></LineChart>
<Phones></Phones>

    </>
  )
}

export default App
