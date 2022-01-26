import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import logo from './assets/img/logo-bg.png';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="py-2 my-2">
            
            <a href="https://twitter.com/nft_bunks" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter" className="twitter-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

          </div>
          <div className="px-4 py-3 my-3 text-center">
            <img className="d-block mx-auto mb-4" src={logo} alt="Bunks NFT" width="576" height="496" />
            <h1 className="display-5 fw-bold">Coming Soon</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
