import React from 'react';
import '../../assets/card.css';
import cancel from '../../assets/cancel.png'


export default function Card() {

    const [ switch1, setSwitch1 ] = React.useState(true);
    const [ switch2, setSwitch2 ] = React.useState(false);
    const [ popupState, setPopupState ] = React.useState(false);

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

    return (
        <>
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
                    <div className="qr-code"></div>
                    <div>
                        <input className="text-input amount" placeholder="Amount"/>
                        <input className="text-input item" placeholder="Reason (or item)"/>
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
        </>
    )
}