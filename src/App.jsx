import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
      <div className=' mx-auto bg-gradient-to-br from-primary-indigo-secondery to-primary-white '>
        <Navbar></Navbar>
        <div className='min-h-[65vh]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
