import Hero from './components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/App.scss'
import { HomePage } from './Pages/HomePage'
import { FeaturesPages } from './Pages/FeaturesPages'
import { CompanyPage } from './Pages/CompanyPage'
import { CareerPage } from './Pages/CareerPage'
import { AboutPage } from './Pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/features' element={<FeaturesPages />} />
        <Route path='/company' element={<CompanyPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
