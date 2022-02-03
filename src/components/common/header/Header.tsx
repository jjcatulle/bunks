import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCopy } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assets/img/logo-bg.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none">
                    <img src={logo} className="bi" width="60" height="48" aria-label="Bunks NFT" alt="Bunks NFT" />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className="nav-link text-white">
                            <FontAwesomeIcon icon={faHome} className="bi d-block mx-auto mb-1" width="24" height="24"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/whitepaper" className="nav-link text-white">
                            <FontAwesomeIcon icon={faCopy} className="bi d-block mx-auto mb-1" width="24" height="24" />
                            Whitepaper
                        </Link>
                    </li> 
                    <li>
                        <a href="https://twitter.com/nft_bunks" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter" className="nav-link text-white">
                            <FontAwesomeIcon icon={faTwitter} className="bi d-block mx-auto mb-1" width="24" height="24" />
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a href="https://t.co/DKVtZbBYbq" target="_blank" rel="noreferrer" aria-label="Follow us on Discord" className="nav-link text-white">
                            <FontAwesomeIcon icon={faDiscord} className="bi d-block mx-auto mb-1" width="24" height="24" />
                            Discord
                        </a>
                    </li>
                </ul>
                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-secondary me-2 btn-header">
                        CONNECT WALLET
                    </button>
                </div>
            </header>
            </div>
        </>
    );
}

export default Header;