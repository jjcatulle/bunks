import React, { ChangeEvent, useState } from 'react';
import Footer from '../common/footer/Footer';

import logo from '../../assets/img/logo-bg.png';
import { Link } from 'react-router-dom';

function Mint() {
    const [num, setNum]= useState(1);

    const incNum = () => {
        if(num<10) {
        setNum(Number(num)+1);
        }
    };

    const decNum = () => {
        if(num>0) {
            setNum(num - 1);
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum(parseInt(e.target.value));
    }

    return (
        <>
            <div className="section mb-5">
                <div className="px-4 pt-1 pb-4 mt-1 mb-4 text-center">
                    <Link to="/">
                        <img className="d-block mx-auto mb-4" src={logo} alt="Bunks NFT" width="288" height="228" />
                    </Link>
                    <h1 className="display-5 fw-bold visually-hidden">Bunks NFT Mint</h1>
                    <div className="col-lg-6 mx-auto">
                        <div className="col-lg-3 mx-auto">
                            <div className="input-group mt-5">
                                <div className="input-group-prepend">
                                    <button 
                                        className="btn btn-outline-secondary btn-lg" 
                                        type="button" 
                                        onClick={decNum}>-</button>
                                </div>
                                <input type="text" className="form-control text-center" value={num} onChange={handleInputChange}/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary btn-lg" type="button" onClick={incNum}>+</button>
                                </div>
                            </div>
                            <p className="text-center fw-normal fs-5 mt-1">.04 ETH</p>
                        </div>                   
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-1">
                            <button type="button" className="btn btn-outline-secondary btn-lg mt-2 px-4" style={{fontSize: "2rem"}}>Mint</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Mint;