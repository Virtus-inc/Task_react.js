import React from 'react';
import iconColom from "../images/disable.png";
import iconCalendar from "../images/calendar.png";

function TimingBox() {
    // const [state, setState] = useState('');

    // useEffect(() => {
    //     return () => {

    //     }
    // }, []);

    return (
        <div className="container_timing">
            <div className="description_and_type_selection">
                <h2 className="title_date">Возможная дата</h2>
                <div className="type_selection">
                    <img className="image_colom" src={iconColom} alt="image colom"/>
                    <img className="image_calendar" src={iconCalendar} alt="image calendar"/>
                </div>
            </div>
        </div>
    )
}

export default TimingBox;