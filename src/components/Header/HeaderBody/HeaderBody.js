import React from 'react';
import profile from '../../../images/siddiky.png'
import './HeaderBody.css'
import ParticlesBg from 'particles-bg'
import HeaderMessage from '../HeaderMessage/HeaderMessage';

const HeaderBody = () => {
    return (
        <div className="row g-0 styleOfHeader w-100">
            <ParticlesBg type="circle" bg={true} />
            <div className="col-md-8">
                <HeaderMessage></HeaderMessage>
            </div>
            <div className="col-md-4">
                <img className="profileImage img-fluid" src={profile} alt="" />
            </div>
        </div>
    );
};

export default HeaderBody;