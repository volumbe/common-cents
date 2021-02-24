import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class EventsCalendar extends React.Component{
    render(){
        return(
            <div>
                <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'Cryptocurrency', date: '2021-03-08' },
                            { title: 'Adulting 101', date: '2021-02-25' },
                            { title: 'Taxes 101', date: '2021-03-25' },
                          ]}
                    />
          </div>
          );
    }
}

export default EventsCalendar;
