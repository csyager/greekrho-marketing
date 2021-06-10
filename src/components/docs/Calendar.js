function Calendar() {
    return (
        <>
        <h1>Calendar</h1>
            <p>The Calendar feature has two primary purposes:</p>
            <ol>
                <li>Be a central location for members of your organization to find details on upcoming events</li>
                <li>Be a central location for other organizations in your community to see upcoming events, so that the entire community can more successfully plan their events</li>
            </ol>
            <p>There are four types of events that are represented on the calendar.  These are:</p>
            <ol>
                <li><code>Rush Events</code>:  When a Rush event is created using the Rush feature of GreekRho, it will automatically be added to the calendar.</li>
                <li><code>Social Events</code>:  When a Social event is created using the Social feature of GreekRho, it will automatically be added to the calendar.</li>
                <li><code>Chapter Events</code>:  Chapter events are events that are created from the Calendar feature of GreekRho.  They are not affiliated with a Social event or Rush event, and only store details about the location, date, and time.</li>
                <li><code>Public Events</code>:  Events that other organizations in your community have marked as Public.  When you create a Social or Chapter event, you will have the option to mark them as public.  These events will appear as Public Events on the calendars of other organizations in your community.</li>
            </ol>
            <p>Clicking on an event on your calendar will bring up the relevant details on that event, making it easy to find details straight from the calendar.</p>
        </>
    )
}

export default Calendar;