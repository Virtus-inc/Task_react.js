import React from 'react';
import Rhoto from "../images/man.png";

function InfoBox() {

    return (
        <div className="container_info">
            <h1 className="title">Алексей Карачинский</h1>
            <div className="avatar_and_text">
                <div className="background_image">
                    <img className="image_profile" src={Rhoto} alt="image"/>
                </div>
                <div className="text_info">
                    <p className="type_text">Длительность<br />консультации</p>
                    <p className="type_time">50 минут</p>
                </div>
            </div>
        </div>
    );
}

export default InfoBox;