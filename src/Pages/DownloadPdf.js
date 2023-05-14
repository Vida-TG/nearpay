import React from 'react'
import { Link } from 'react-router-dom/dist'

const DownloadPdf = () => {
  return (
    <Link to="../summary.pdf" download>Download pdf summary</Link>
  )
}

export default DownloadPdf