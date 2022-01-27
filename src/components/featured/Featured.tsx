import React from 'react';
import logo from '../../assets/img/logo-bg.png';
import tupac from '../../assets/img/bunks/2PAC_re.jfif';

function Featured() {
    return (
        <>
            <div className="section">
                <div className="py-3">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-4">
                                <div className="card shadow-sm">
                                    <img src={tupac} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Tupac" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card shadow-sm">
                                    <img src={logo} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Bunks NFT" />
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-8 mt-4">
                            <p className="lead text-center">The first 500 NFT’s for our project will be free, and 6500 will cost .04 in ETH.</p>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Featured;