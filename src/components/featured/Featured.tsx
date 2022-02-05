import React from 'react';
import tupac from '../../assets/img/bunks/2PAC_re.jfif';
import pele from '../../assets/img/bunks/Pele_1.png';
import wilma from '../../assets/img/bunks/wilma_rudolph_2.png';

function Featured() {
    return (
        <>
            <div className="section">
                <div className="py-3">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="card shadow-sm mb-4">
                                    <img src={tupac} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Tupac" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow-sm mb-4">
                                    <img src={wilma} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Wilma Rudolph" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow-sm mb-4">
                                    <img src={pele} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Pele" />
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-8 mt-4 mb-4">
                            <p className="lead text-center">The first 500 NFT’s for our project will be free, and 6500 will cost .015 in ETH.</p>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Featured;