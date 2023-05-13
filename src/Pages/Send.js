import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom/dist';
import cancel from '../../assets/cancel.png'
import giphy from '../Components/watching-eyes.gif'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import './send.css'

const Send = () => {
    const [searchParams] = useSearchParams();
    const [accountId, setAccountId] = useState(searchParams.get("accountId"));
    const [amt, setAmt] = useState(searchParams.get("amt") || null);
    const [item, setItem] = useState(searchParams.get("item") || null);
    const [ popupState, setPopupState ] = React.useState(false);
    const navigate = useNavigate()

    async function handleSend() {
        let getState = await window.account.state();
        console.log(getState.amount)
    }

    useEffect(() => {
        if (!accountId) {
            navigate('/')
        }
    }, [])

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
                    <div className="send-card full-card" style={ popupState ? { opacity : '.1' } : { opacity : '1' }}>
                        <div className='send-card-body'>
                            <div style={ { display : 'block' } }>
                                { amt == null ?
                                <div> 
                                    <div>
                                        You are about to send Near to {accountId} { item ? <span> for {item}</span> : "" }
                                    </div>
                                    <div>
                                        <input className="text-input amount" placeholder="Amount"/>
                                        <div className='btn-wrap'><button className="send-submit submit-input" onClick={handleSend}>Generate code</button></div>
                                    </div>
                                </div>
                                :
                                    <div>
                                        <div>
                                            You are about to send {amt}N to {accountId} { item ? <span> for {item}</span> : "" }
                                            <div className='btn-wrap'><button className="send-submit submit-input" onClick={handleSend}>Continue</button></div>
                                        </div>
                                    </div>
                                }

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