import { connect, Contract, keyStores, WalletConnection, KeyPair } from 'near-api-js';
import { getConfig } from '../near-config';

const nearConfig = getConfig(process.env.NODE_ENV || 'development');

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near);

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
    viewMethods: [],
    changeMethods: [],
  });
}

export function signOutNearWallet() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
}

export function signInWithNearWallet() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn();
}

const PENDING_ACCESS_KEY_PREFIX = "pending_key";

export const loginFullAccess = async (options) => {
  const currentUrl = new URL(window.location.href);
  const newUrl = new URL(window.walletConnection._walletBaseUrl + "/login/");
  newUrl.searchParams.set("success_url", options.successUrl || currentUrl.href);
  newUrl.searchParams.set("failure_url", options.failureUrl || currentUrl.href);

  const accessKey = KeyPair.fromRandom("ed25519");
  newUrl.searchParams.set("public_key", accessKey.getPublicKey().toString());
  await window.walletConnection._keyStore.setKey(
    window.walletConnection._networkId,
    PENDING_ACCESS_KEY_PREFIX + accessKey.getPublicKey(),
    accessKey
  );

  window.location.assign(newUrl.toString());
};