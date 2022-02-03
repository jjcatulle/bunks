import React, { ChangeEvent, useEffect, useState } from "react";
import Footer from "../common/footer/Footer";

import logo from "../../assets/img/logo-bg.png";
import { Link } from "react-router-dom";
import web3 from "../../ethereum/web3";
import Contract from "../../ethereum/contractsInterface";

function Mint() {
  const [num, setNum] = useState(1);
  const [totalSupply, settotalSupply] = useState(0);
  const [status, setstatus] = useState({
    error: false,
    message: "",
    loading: false,
  });

  const handleBuy = async () => {
    try {
      if (num <= 0) {
        alert("quantity needs to be more than 0");
        return;
      }
      const networkId = await web3.eth.net.getId();
      if (networkId != 1) {
        alert("Please change to the main ETH network and try again");
      }
      const accounts = await web3.eth.getAccounts();
      setstatus({ ...status, loading: true });
      await Contract()
        .methods.mint(num)
        .send({
          from: accounts[0],
          value: totalSupply >= 500 ? 35000000000000000 * num : 0,
        });
      alert("Transaction sent");
    } catch (error) {
      //@ts-ignore
      alert(error.message);
      // setstatus({ ...status, error: true });

      // setstatus({ ...status, error: true, message: error.message });
      console.log(status);
    }
    setstatus({ ...status, loading: false });
  };

  useEffect(() => {
    const loadBlochain = async () => {
      try {
        if (num <= 0) {
          alert("quantity needs to be more than 0");
          return;
        }
        const networkId = await web3.eth.net.getId();
        if (networkId != 1) {
          alert("Please change to the main ETH network and try again");
        }
        const accounts = await web3.eth.getAccounts();
        setstatus({ ...status, loading: true });
        let supply = await Contract().methods.totalSupply().call();
        settotalSupply(supply);
      } catch (error) {
        //@ts-ignore
        alert(error.message);
        // setstatus({ ...status, error: true });

        // setstatus({ ...status, error: true, message: error.message });
        console.log(status);
      }
      setstatus({ ...status, loading: false });
    };
    loadBlochain();
  }, []);

  const incNum = () => {
    if (num < 7) {
      setNum(Number(num) + 1);
    }
  };
  

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum(parseInt(e.target.value));
  };

  return (
    <>
      <div className="section mb-5">
        <div className="px-4 pt-1 pb-4 mt-1 mb-4 text-center">
          <Link to="/">
            <img
              className="d-block mx-auto mb-4"
              src={logo}
              alt="Bunks NFT"
              width="288"
              height="228"
            />
          </Link>
          <h1 className="display-5 fw-bold visually-hidden">Bunks NFT Mint</h1>
          <h2>{totalSupply}/7000</h2>
          <div className="col-lg-6 mx-auto">
            <div className="col-lg-3 mx-auto">
              <div className="input-group mt-5">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-secondary btn-lg"
                    type="button"
                    onClick={decNum}
                  >
                    -
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control text-center"
                  value={num}
                  onChange={handleInputChange}
                />
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-secondary btn-lg"
                    type="button"
                    onClick={incNum}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-center fw-normal fs-5 mt-1">
                .035 ETH
              </p>
              <p className="text-center fw-normal fs-5 mt-1">
                (first 500 free)
              </p>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-1">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg mt-2 px-4"
                style={{ fontSize: "2rem" }}
                onClick={handleBuy}
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mint;
