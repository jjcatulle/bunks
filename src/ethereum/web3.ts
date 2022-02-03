import Web3 from "web3";

let web3:any;
//@ts-ignore
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  //@ts-ignore
  window.ethereum.request({ method: "eth_requestAccounts" });
  //@ts-ignore
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/d60352fdd38b4c0e99594f26900ed4a5"
  );
  web3 = new Web3(provider);
}

export default web3;
