import DocVid from "./DocVid"
import CalendarVid from "./../../images/calendar.mp4"

function Calendar() {
    return (
        <>
        <h1>Calendar</h1>
			<p>The calendar feature is designed to be a one-stop-shop for members of your organization to find information about upcoming events.  Additionally, events marked as public can be seen by other organizations in your community, allowing the community at large to more successfully plan their events.</p>
			<p>Rush Events, Social Events, and Chapter events are automatically populated on the calendar as they are created within the app.  No more cross-referencing calendars, it’s all here, in one secure location.  Clicking on an event on your calendar will bring up the relevant details on that event, making it easy to find details straight from the calendar.</p>
            <DocVid src={CalendarVid} />
            <p>The above video demonstrates the core functionality of the calendar feature.  The calendar is automatically populated with Rush and Social events from their respective modules.  Clicking on an event from the calendar view links to their respective pages.  Clicking the "New Event" button at the top right allows an admin user to create a <code>Chapter Event</code>.  Chapter events are miscellaneous events that can be singular or recurring.  Chapter Events, like Social Events, can be made public at your discretion.  In the video, an admin from a different organization in your community (with the red banner) creates a Social Event and marks it as public.  The calendar in your organization is updated with this Community Event, allowing you and your organization to plan your own social events around those of other organizations.</p>
       </>
    )
}

export default Calendar;
