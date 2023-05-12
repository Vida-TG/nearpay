import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom/dist';
import cancel from '../../assets/cancel.png'
import giphy from '../Components/watching-eyes.gif'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Send = () => {
    const [searchParams] = useSearchParams();
    const [accountId, setAccountId] = useState(searchParams.get("accountId"));
    const [amt, setAmt] = useState(searchParams.get("amt") || null);
    const [item, setItem] = useState(searchParams.get("item") || null);
    const [ popupState, setPopupState ] = React.useState(false);

    function handleSend() {
        console.log(amt, item)
    }

    return (
        <>
            <Header />

            {
            (window.accountId==='')?
                <div className="full-card card-edit">
                    <img src={giphy} className='giphy'/>
                    <div className="before-login">Please Log In</div>
                </div>
                
                :
                <section>
                    <div className="full-card send-card" style={ popupState ? { opacity : '.1' } : { opacity : '1' }}>
                        <div className='card-body'>
                            <div style={ { display : 'block' } }>
                                <div>
                                    You are sending {amt}N to {accountId} for {item}
                                </div>
                                <div>
                                    <input className="text-input amount" placeholder="Amount"/>
                                    <button className="submit-input" onClick={handleSend}>Generate code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='popup'  style={ popupState ? { display : 'block' } : { display : 'none'}}>
                        <div className='cancel-wrap'><img src={cancel} onClick={handleSend} className='cancel-btn' /></div>
                        <div className='popup-body'>
                            <div className='popup-qr-code'></div>
                            <div>Share</div>
                        </div>
                    </div>
                </section>
            }


            <Footer />
        </>
    )
}

export default Send