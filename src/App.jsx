import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import WhatsApp from './components/layout/WhatsApp/WhatsApp.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <>
      {/* The header is fixed chrome and its dropdowns overhang the page, so it
          sits outside .btPageWrap — that wrapper clips section overflow. */}
      <Header />
      <div className="btPageWrap">
        <div className="btContentWrap">
          <Home />
        </div>
        <Footer />
      </div>
      <WhatsApp />
    </>
  )
}
