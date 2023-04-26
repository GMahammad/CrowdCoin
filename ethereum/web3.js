import Web3 from "web3";
let web3;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and Metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
  } else {
    // We are on the server *OR* the user is not running Metamask.
    const provider = new Web3.providers.HttpProvider(
        'https://goerli.infura.io/v3/65ef5bf1823d4f7cb04b64c32cb83c87'
    );
    web3 = new Web3(provider);
  }
export default web3;


