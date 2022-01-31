import React from 'react';
import equal from '../../assets/img/organizations/eji-2019-social2x.jpg';
import soul from '../../assets/img/organizations/S2SS-New-FB-Post-Image-2020.png';
import thurgood from '../../assets/img/organizations/thurgood.jpeg';
import vida from '../../assets/img/organizations/Vida.png';
import OBM from '../../assets/img/organizations/100_BM_New_Logo_black_-01_7.png';
import uncf from '../../assets/img/organizations/UNCF.png';

function Organizations() {
    return (
        <>
            <div className="section bg-light">
                <div className="py-3">
                    <div className="container">
                        <div className="row row-cols-8 mt-4">
                            <h2 className="text-center text-muted mb-5">Organizations We Support</h2>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={equal} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Equal Justice Initiative" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={soul} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Soul 2 Soul Sisters" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={thurgood} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Thurgood Marshall College Fund" />
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={vida} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Vida AfroLatina" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={OBM} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="100 Men of America, Inc." />
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img src={uncf} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="UNCF - A mind is a terrible thing to waste." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Organizations;