import React from 'react';
import '../../assets/card.css';


export default function Card() {

    const [ switch1, setSwitch1 ] = React.useState(true);
    const [ switch2, setSwitch2 ] = React.useState(false);

    function turnOn1(){
        setSwitch2(false);
        setSwitch1(true);
    }

    function turnOn2(){
        setSwitch1(false);
        setSwitch2(true);
    }

    return (
        <>
        <div className="full-card">
            <div className='card-header'>
                <div onClick={turnOn1} className='switch switch1' style={ switch1 ? { borderBottom : '3px solid black' } : {}}>
                    RECEIVE
                </div>
                <div onClick={turnOn2} className='switch switch2' style={ switch2 ? { borderBottom : '3px solid black' } : {}}>
                    SEND
                </div>
            </div>
            
            <div className='card-body'>
                <div style={ switch1 ? { display : 'block' } : { display : 'none' }}>
                    Generate QR code
                </div>
                <div style={ switch2 ? { display : 'block' } : { display : 'none' }}>
                    Send to bank
                </div>
            </div>
        </div>
        </>
    )
}