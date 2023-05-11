import React from 'react'
import { loginFullAccess, signOutNearWallet } from '../near-api'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <button onClick={(window.accountId==='')?loginFullAccess:signOutNearWallet} className='login-toggle'>
        {(window.accountId==='')?'Login':window.accountId}
        </button>
    </div>
  )
}

export default Header