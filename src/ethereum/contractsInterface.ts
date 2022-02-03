import web3 from "./web3";
import NFT from "./abis/MyNFT.json";

const instance = (type = "NFT") => {
  return new web3.eth.Contract(
    NFT.abi,
    "0x174e1d08e1a16d05e55131a14607b93b736b93bb"
  );
};

export default instance;
