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
            <div className="date_picker">
                <div className="select_date active_select_date">
                    <p className="text_date active_text_date">Сегодня</p>
                    <p className="number_date active_number_date">26</p>
                </div>
                <div className="select_date">
                    <p className="text_date">Ср</p>
                    <p className="number_date">27</p>
                </div>
                <div className="select_date">
                    <p className="text_date">Чт</p>
                    <p className="number_date">28</p>
                </div>
                <div className="select_date">
                    <p className="text_date">Пт</p>
                    <p className="number_date">29</p>
                </div>
                <div className="select_date">
                    <p className="text_date">Сб</p>
                    <p className="number_date">30</p>
                </div>
            </div>

            <h2 className="title_time">Свободное время</h2>
            <div className="time_picker">
                <p className="off_time">18:00</p>
                <p className="off_time active_time">18:30</p>
                <p className="off_time">19:00</p>
                <p className="off_time">19:30</p>
                <p className="off_time">20:00</p>
            </div>
        </div>
    )
}

export default TimingBox;