import React, { useEffect } from 'react';
import '../../assets/card.css';
import cancel from '../../assets/cancel.png'
import giphy from './watching-eyes.gif'
import QRCode from 'qrcode';
import {saveAs} from "file-saver";


export default function Card() {

    const [ switch1, setSwitch1 ] = React.useState(true);
    const [ switch2, setSwitch2 ] = React.useState(false);
    const [ popupState, setPopupState ] = React.useState(false);
    const [ url, setUrl ] = React.useState(window.location.href + "send?accountId=" + window.accountId)
    const [ qr, setQr ] = React.useState("")

    const [amt, setAmt] = React.useState("");
    const [item, setItem] = React.useState("");

    function turnOn1(){
        setSwitch2(false);
        setSwitch1(true);
    }

    function turnOn2(){
        setSwitch1(false);
        setSwitch2(true);
    }

    function generateCode(){
        setPopupState(true)
    }

    function closePopup(){
        setPopupState(false);
    }

    function amtChange(e){
        setAmt(e.target.value)
    }
    function itemChange(e){
        setItem(e.target.value)
    }

    function handleDownload() {
        saveAs(qr, accountId+item+amt + ".png")
    }
    
    function generateModifiedQR() {
        if (!amt && !item) {
            return
        } else if (amt && item) {
            setUrl(window.location.href + "send?accountId=" + window.accountId + "&item=" + item + "&amt=" + amt)
            generateCode();
            return
        } else if (amt) {
            setUrl(window.location.href + "send?accountId=" + window.accountId + "&amt=" + amt)
            return
        } else {
            setUrl(window.location.href + "send?accountId=" + window.accountId + "&item=" + item)
            return
        }
    }

    useEffect(() => {
        
        const GenerateQRCode = () => {
            QRCode.toDataURL(
                url,
                {
                    width: 300,
                    margin: 2,
                    color: {
                        dark: "#000",
                        light: "#fff",
                    },
                },
                (err, url) => {
                    if (err) return console.log(err)
                    setQr(url)
                }
            );
        };
        
        GenerateQRCode();

    }, [])

    return (
        <>
        {
            (window.accountId==='')?
                <div className="full-card card-edit">
                    <img src={giphy} className='giphy'/>
                    <div className="before-login">Please Log In</div>
                </div>
                
                :
                <section>
                    <div className="full-card" style={ popupState ? { opacity : '.1' } : { opacity : '1' }}>
                        <div className='card-header'>
                            <div onClick={turnOn1} className='switch switch1' style={ switch1 ? { borderBottom : '3px solid black' } : {}}>
                                RECEIVE
                            </div>
                            <div onClick={turnOn2} className='switch switch2' style={ switch2 ? { borderBottom : '3px solid black' } : {}}>
                                SEND
                            </div>
                        </div>
                        
                        <div  className='card-body'>
                            <div style={ switch1 ? { display : 'block' } : { display : 'none' }}>
                                <div>Generate and share QR code to receive payment in Near tokens</div>
                                <div className='qr'>
                                    {qr && (
                                        <>
                                            <img src={qr} className='qr-image' />
                                            <div className='download-btn-div'>
                                            <button onClick={handleDownload} className='download-btn'>
                                                Download
                                            </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div>
                                    <input className="text-input amount" placeholder="Amount" onChange={amtChange} value={amt}/>
                                    <input className="text-input item" placeholder="Reason (or item)" onChange={itemChange} value={item}/>
                                    <button className="submit-input" onClick={generateCode}>Generate code</button>
                                </div>
                            </div>
                            <div style={ switch2 ? { display : 'block' } : { display : 'none' }}>
                                Send to bank
                            </div>
                        </div>
                    </div>
                    <div className='popup'  style={ popupState ? { display : 'block' } : { display : 'none'}}>
                        <div className='cancel-wrap'><img src={cancel} onClick={closePopup} className='cancel-btn' /></div>
                        <div className='popup-body'>
                            <div className='popup-qr-code'></div>
                            <div>Share</div>
                        </div>
                    </div>
                </section>
        }
        </>
    )
}
