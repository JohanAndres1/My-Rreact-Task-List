import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Home'
import Tareas from './components/Tareas'
import SobreNosotros from './components/SobreNosotros'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App