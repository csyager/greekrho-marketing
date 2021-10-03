import DocVid from "./DocVid"
import events from "./../../images/events.mp4"
import listLimits from "./../../images/list_limits.mp4"
import publicEvents from "./../../images/public_events.mp4"
import rosters from "./../../images/rosters.mp4"
import partyMode from "./../../images/party_mode.mp4"

function Social() {
    return (
        <>
        <h1>Social</h1>
        <p>GreekRho's social feature is a tool for managing attendance at social events. Members of your organization are able to centrally add, remove, and manage lists of attendees for individual events, as well as store groups of attendees to be easily accessed later.  Then, when it comes time for the event, the list is easily searchable, with builtin capability to mark attendance, which is immediately synced between devices.  This central location for managing attendance makes running events easy, while promoting safety for attendees.</p>
        <h2>Events</h2>
        <DocVid src={events} />
        <p><code>Events</code> are the central element for the social tab.  Event objects have a name, date and time, location, and list of attendees.  Only admin users or users granted social permissions can create events.  Members of your organization can add attendees to the list up until the date of the event.  When an attendee is added, the name of the user who added them is also recorded.  Attendees can also be added in bulk, making it easy to copy and paste long lists of names to be added as attendees.</p>
        <h2>Party Mode</h2>
        <DocVid src={partyMode} />
        <p><code>Party mode</code> is an exciting feature that allows your organization to manage attendance at your social event at scale.  When an admin enables party mode (non-admin users cannot do this) the list is closed and will no longer accept new attendees.  A new screen will be presented to members of your organization, with the option to mark an attendee as "Attended".  Other users of the app will momentarily see the name checked off of the list, without having to refresh their page (think like a Google Doc).  The video above demonstrates this operation, with two mobile devices viewing the list at the same time.  When the user on the left checks an attendee as present, the list of the user on the right is updated real-time.  No more cross-referencing paper spreadsheets, GreekRho is the single source of truth for your attendance lists.  Instead of one member checking names at the door, a dozen members can independently run attendance for your event.  This means shorter lines, better security, and an ultimately safer social event with nobody slipping through the cracks.</p>
        <h2>List Limits</h2>
        <DocVid src={listLimits} />
        <p>Events can also be assigned a <code>List limit</code>.  This limit is the maximum number of attendees that a member of your organization will be able to add to a list.  The video above demonstrates an admin user setting a list limit of 3 on an event.  The admin then logs out, and a non-admin user is shown to be logging in.  When the non-admin user attempts to add a 4th name to the list, they receive an error message prohibiting them from making the addition.  This feature is useful for limiting the attendance at an event, and applies for both individual additions and list additions made in bulk.</p>
        <h2>Public Events</h2>
        <DocVid src={publicEvents} />
        <p>Events can be made <code>public events</code>, meaning that other organizations on the GreekRho platform within your community will be able to see the date and time of your event on their calendars.  The purpose of this feature is to create a centralized location for event planning among organizations in a community.  The video above shows an admin user editing an event to make it public.  Then, a user from another organization (with the red banner) views their calendar and is able to see the event.  Marking an event as public is purely optional, and other organizations will only be able to see the events that you choose to make public.</p>
        <h2>Rosters</h2>
        <DocVid src={rosters} />
        <p><code>Rosters</code> are another component of the social feature.  They are lists of attendees meant to be reused in future social events.  An example use case for a roster might be another social organization that is frequently added to the lists of events.  Rosters can be added wholesale with just one click, and can be edited and maintained within the app.  The video above demonstrates an admin creating a roster and adding several names manually.  The roster is then added wholesale to a previously existing social event.  If another event was to be created in the future, this process could be repeated without having to manually add the names again.  Additionally, the list from an existing social event can be exported as a roster, so that it can be reused later.  If your organization has an event and wants to invite the same group of attendees to the next one, this can be easily done using this feature.</p>
        
       </>
    )
}

export default Social;
