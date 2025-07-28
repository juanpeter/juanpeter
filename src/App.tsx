import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainPage } from './components/Pages/MainPage'
// import { NavigatorTest } from './components/Pages/NavigatorTest'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/juanpeter' element={<MainPage />}></Route>
          {/* <Route path='/juanpeter/navigatorTest' element={<NavigatorTest />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
