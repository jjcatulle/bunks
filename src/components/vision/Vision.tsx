import React from 'react';

function Vision() {
    return (
        <>
            <div className="section mt-5 bg-light">
                <div className="container">
                    
                    <hr className="my-4" />

                    <div className="row">
                        <div className="col-md-7 order-md-2">
                            <h2 className="text-center text-muted">Vision</h2>
                            <p className="lead mt-4 text-muted">We want to encourage equal representation in the NFT space, as well as remember and respect the legacies of inspiring African-American and Black figures throughout history.</p>
                            <p className="lead text-muted">We need a strong platform to convey this message, so we take inspiration from the most popularized NFT of them all: the Crypto Punks. </p>
                            <p className="lead text-muted">To help honor African Americans and Blacks Worldwide , a Crypto Punk derivative called “Bunks,” was born.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img src={process.env.PUBLIC_URL + '/img/bunks/Nelson_Mandela_1.jfif'} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="Nelson Mandela" />
                        </div>
                    </div>

                    <hr className="my-5" />

                </div>
            </div>
        </>
    );
}

export default Vision;

