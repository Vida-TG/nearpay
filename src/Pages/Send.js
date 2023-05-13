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
    const [ amount, setAmount ] = React.useState();
    const [ popupState, setPopupState ] = React.useState(false);
    const [ acctBalance, setAcctBalance ] = React.useState()
    
    const [ transactionStatus, setTransactionStatus ] = React.useState(false)
    const [ status, setStatus ] = React.useState()
    const [ errorMsg, setErrorMsg ] = React.useState()
    const navigate = useNavigate()


    function amountInput (e) {
        setAmount(e.target.value)
    }
    function closePopup(){
        setPopupState(false);
    }
    async function handleSend() {
        let getState = await window.account.state()
        let getAmount = await window.utils.format.formatNearAmount(getState.amount)
        
        if(Number(getAmount) > Number(amt)) {
            await window.account.sendMoney(accountId, window.utils.format.parseNearAmount(amt))
            .then(setTransactionStatus(true))
            .then(setStatus("You sent "+amt+" Near to "+accountId+" successfully"))
        } else {
            setErrorMsg("Oops you don't have up to "+amt+" Near in your wallet")
            setPopupState(true)
        }

    }

    async function handleInputSend() {
        let getState = await window.account.state()
        let getAmount = await window.utils.format.formatNearAmount(getState.amount)
        
        if(Number(getAmount) > Number(amount)) {
            await window.account.sendMoney(accountId, window.utils.format.parseNearAmount(amount))
            .then(setTransactionStatus(true))
            .then(setStatus("You sent "+amount+" Near to "+accountId+" successfully"))
        } else {
            setErrorMsg("Oops you don't have up to "+amount+" Near in your wallet")
            setPopupState(true)
        }

    }

    useEffect(() => {
        if (!accountId) {
            navigate('/')
        }
        async function getData(){
            let Data = await window.account.state()
            setAcctBalance(Data.amount)
        }
        getData
    }, [acctBalance])

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
                    <div style={ transactionStatus ? { display : 'none' } : { display : 'block' }}>
                        <div className="send-card full-card" style={ popupState ? { opacity : '.1' } : { opacity : '1' }} >
                            <div className='send-card-body'>
                                <div style={ { display : 'block' } }>
                                    { amt == null ?
                                    <div> 
                                        <div>
                                            You are about to send Near to {accountId} { item ? <span> for {item}</span> : "" }
                                        </div>
                                        <div>
                                            <input className="text-input amount" placeholder="Amount" onChange={amountInput} />
                                            <div className='btn-wrap'><button className="send-submit submit-input" onClick={handleInputSend}>Send</button></div>
                                        </div>
                                    </div>
                                    :
                                        <div>
                                            <div>
                                                You are about to send {amt} Near to {accountId} { item ? <span> for {item}</span> : "" }
                                                <div className='btn-wrap'><button className="send-submit submit-input" onClick={handleSend}>Continue</button></div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="send-card full-card" style={ transactionStatus ? { display : 'block' } : { display : 'none' }}>
                        {status}
                    </div>
                    <div className='popup'  style={ popupState ? { display : 'block' } : { display : 'none'}}>
                        <div className='cancel-wrap'><img src={cancel} onClick={closePopup} className='cancel-btn' /></div>
                        <div className='popup-body status'>
                            {errorMsg}
                        </div>
                    </div>
                </section>
            }


            <Footer />
        </>
    )
}

export default Send