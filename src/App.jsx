import './App.css'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Helmet>
        <title>Job Hunter | Home</title>
      </Helmet>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
