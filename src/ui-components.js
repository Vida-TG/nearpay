import { signInWithNearWallet, signOutNearWallet } from './near-api';
import React from 'react';

export function SignInPrompt() {
  return (
    <main>
      <h1>
        <span className="greeting">Nearpay</span>
      </h1>
      <p>
        Nearpay allows swift payment via the Near blockchain. You need
        to sign in using the NEAR Wallet. It is very simple,
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
    <button style={{ float: 'right', padding: '15px' }} onClick={signOutNearWallet}>
      Sign out {accountId}
    </button>
  );
}

export function EducationalText() {
  return (
    <>
      <p>
        ED
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
        Generate Now <a>GENERATE</a>.
      </p>
    </>
  );
}
