import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Boutique from './pages/Boutique'
import SavoirFaire from './pages/SavoirFaire'
import Professionnels from './pages/Professionnels'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import CGU from './pages/CGU'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/savoir-faire" element={<SavoirFaire />} />
          <Route path="/professionnels" element={<Professionnels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
