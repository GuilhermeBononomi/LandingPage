import './styles.css'

import Header from "./header/index.jsx"
import Banner from "./banner/index.jsx"
import Eficiencia from "./efficiency/index.jsx"
import History from "./history/index.jsx"
import Founder from './founder/index.jsx'
import Descriptions from './descriptions/index.jsx'
import Newsletter from './newsletter/index.jsx'
import Footer from './footer/index.jsx'

export default function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Eficiencia/>
      <History/>
      <Founder/>
      <Descriptions/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}