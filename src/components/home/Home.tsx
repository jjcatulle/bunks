import React from 'react';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Featured from '../featured/Featured';
import Vision from '../vision/Vision';
import Organizations from '../organizations/Organizations';

import logo from '../../assets/img/logo-bg.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Header />
            <div className="section mb-5">
                <div className="px-4 pt-1 pb-4 mt-1 mb-4 text-center">
                    <img className="d-block mx-auto mb-4" src={logo} alt="Bunks NFT" width="432" height="312" />
                    <h1 className="display-5 fw-bold visually-hidden">Bunks NFT</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">As we participate in Black History Month, Black People remain underrepresented in the NFT space, we embarked on a mission to revolutionize the world’s view of NFT’s. (The next 1000 are Free!)</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link to="/mint" className="btn btn-outline-secondary btn-lg mt-3 px-4" style={{fontSize: "2rem"}}>Mint</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Vision />

            <Featured />

            <Organizations />

            <Footer />

        </>
    );
}

export default Home;
