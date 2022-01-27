import React from 'react';
import logo from '../../assets/img/logo-bg.png';

function Featured() {
    return (
        <>
            <div className="section">
                <div className="py-3">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-4">
                                <div className="card shadow-sm">
                                    <img src={process.env.PUBLIC_URL + '/img/bunks/2PAC_re.jfif'} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Tupac" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card shadow-sm">
                                    <img src={logo} className="bd-placeholder-img card-img-top img-fluid" width="100%" height="225" alt="Bunks NFT" />
                                </div>
                            </div>
                            {/* <div className="col">
                                <div className="card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">NFT Thumbnail</text></svg>
                                </div>
                            </div> */}
                        </div>
                        <div className="row row-cols-8 mt-4">
                            <p className="lead text-center">The first 1000 NFT’s for our project will be free, and 6000 will cost .04 in ETH.</p>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Featured;