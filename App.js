import 'regenerator-runtime/runtime';
import React from 'react';

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App() {
  const [priceInput, setPriceInput] = React.useState(0);

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
      console.log("LOADED")
  
  }, []);

  /// If user not signed-in with wallet - show prompt
  if (!window.walletConnection.isSignedIn()) {
    // Sign-in flow will reload the page later
    return <SignInPrompt/>;
  }

  async function generateQR(e) {
    e.preventDefault();
    setUiPleaseWait(true);
    let code = await console.log("MOUNT QR CODE");
    code ? console.log("ERROR") : console.log("Mounted");
    setUiPleaseWait(false);
  }

  function updatePriceInput(e) {
    setPriceInput(e.target.value)
  }

  return (
    <>
      <SignOutButton accountId={window.accountId}/>
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          Np
        </h1>
        <form onSubmit={generateQR} className="">
          <label>Set price:</label>
          <div>
            <input
              autoComplete="off"
              onChange={updatePriceInput}
              value={priceInput}
            />
            <input type='submit' value='Submit'/>
          </div>
        </form>
        <EducationalText/>
      </main>
    </>
  );
}
