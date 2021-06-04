import React from 'react';

function confirmEntry() {
    return (
        <div className="container_confirm_entry">
            <div className="shadow_box">
                <div className="selected_date">
                    <p className="selected_text">Дата</p>
                    <p className="specified_date">26 мая</p>
                </div>
                <div className="selected_time">
                    <p className="selected_text">Время</p>
                    <p className="specified_time">18:30</p>
                </div>
            </div>
            <button className="make_appointment">ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ</button>
        </div>
    )
}

export default confirmEntry;