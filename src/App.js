import 'regenerator-runtime/runtime';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import '../assets/global.css';

// pages
import Scan from "./Pages/Scan"
import Home from "./Pages/Home"
import Send from "./Pages/Send"
import DownloadPdf from "./Pages/DownloadPdf"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/send" element={<Send />} />
        <Route path="/pdf" element={<DownloadPdf />} />
      </Routes>
    </BrowserRouter>
  )
}