import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div>
                <div className="mt-4">
                    <div className="container my-3 py-1">
                        <div className="row mb-3">
                            <div className="col-12 col-sm-4">
                                <h6 className="mb-0">2022 BUNKS NFT</h6>
                            </div>
                            <div className="col-12 col-sm-4">
                                <h6 className="mt-3 mt-sm-0 text-sm-center mb-0">&copy; All Rights Reserved</h6>
                            </div>
                            <div className="col-12 col-sm-4 text-sm-end social-media">
                                <a href="https://twitter.com/nft_bunks" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter" className="twitter-icon">
                                    <FontAwesomeIcon icon={faTwitter} className="twitter"/>
                                </a>
                                <a href="https://t.co/DKVtZbBYbq" target="_blank" rel="noreferrer" aria-label="Follow us on Discord" className="discord-icon">
                                    <FontAwesomeIcon icon={faDiscord} className="discord"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;