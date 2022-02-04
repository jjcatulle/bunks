import web3 from "./web3";
import NFT from "./abis/MyNFT.json";

const instance = (type = "NFT") => {
  return new web3.eth.Contract(
    NFT.abi,
    "0x3b4f37bEAEb2b34435D6B1b89F8139bC168a574e"
  );
};

export default instance;
