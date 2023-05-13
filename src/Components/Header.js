import React from 'react'
import { loginFullAccess, signOutNearWallet } from '../near-api'
import './header.css'

const Header = () => {
  const scanLink = window.location + "scan";
  return (
    <>
        <div className='header'>
            <button onClick={(window.accountId==='')?loginFullAccess:signOutNearWallet} className={(window.accountId==='')?'login-toggle login-white' :'login-toggle'}>
            {(window.accountId==='')?'Login':window.accountId}
            </button>
        </div>
        <div className='title'>NEARPAY</div>
        { window.location.pathname == '/' ?
        <div className='scan-link-div'><a className="scan-link" href={scanLink}>Scan Now</a></div>
        : <div></div> }
    </>
  )
}

export default Header