import React from 'react';
import profile from '../../../images/nur.png'
import './HeaderBody.css'
import HeaderMessage from '../HeaderMessage/HeaderMessage';

const HeaderBody = () => {
    return (
        <div className="row d-flex w-100 m-0 p-0 pt-5 styleOfHeader">
            {/* <ParticlesBg type="circle" bg={true} /> */}
            <div className="col-md-4 col-sm-12 d-flex h-100 justify-content-center align-items-center">
                <HeaderMessage></HeaderMessage>
            </div>
            <div className="col-md-8 col-sm-12 h-100 text-center justify-content-center align-items-end">
                <div className="mb-auto h-100 justify-content-center align-items-end">

                    <img className="headerProfileImage img-fluid" src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;