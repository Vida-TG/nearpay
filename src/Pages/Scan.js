import React from 'react'
import Html5QrcodePlugin from '../Html5QrcodePlugin'
import './scan.css'


const onNewScanResult = (decodedText, decodedResult) => {
    window.location.href = decodedText;
};

const Scan = () => {
  return (
    <div className="App">
        <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
        />
    </div>
  )
}

export default Scan