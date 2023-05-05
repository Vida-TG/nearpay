import { signInWithNearWallet, signOutNearWallet } from './near-api';
import React from 'react';

export function SignInPrompt({greeting}) {
  return (
    <main>
      <h1>
        The contract says: <span className="greeting">{greeting}</span>
      </h1>
      <h3>
        Welcome to NEAR!
      </h3>
      <p>
        Your contract is storing a greeting message in the NEAR blockchain. To
        change it you need to sign in using the NEAR Wallet. It is very simple,
        just use the button below.
      </p>
      <p>
        Do not worry, this app runs in the test network ("testnet"). It works
        just like the main network ("mainnet"), but using NEAR Tokens that are
        only for testing!
      </p>
      <br/>
      <p style={{ textAlign: 'center' }}>
        <button onClick={signInWithNearWallet}>Sign in with NEAR Wallet</button>
      </p>
    </main>
  );
}

export function SignOutButton({accountId}) {
  return (
    <button style={{ float: 'right' }} onClick={signOutNearWallet}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>
        ED1
      </p>
      <ol>
        <li>
          You can pay
        </li>
        <li>
          You can generate
        </li>
      </ol>
      <hr />
      <p>
        Generate Now <a target="_blank" rel="noreferrer" href="https://docs.near.org">the NEAR docs</a> or look through some <a target="_blank" rel="noreferrer" href="https://examples.near.org">example apps</a>.
      </p>
    </>
  );
}
