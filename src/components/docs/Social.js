function Social() {
    return (
        <>
        <h1>Social</h1>
        <p>GreekRho's social feature is a tool for managing attendance at social events.  Members of your organization are able to centrally add, remove, and manage lists of attendees for individual events, as well as store groups of attendees to be easily accessed later.  This central location for managing attendance makes running events easy and promotes safety.</p>
        <p>There are two essential screens in the Social dashboard, shown by the folder-tab navigation at the top of the page.  <code>Events</code> represent individual social events, and <code>Rosters</code> represent saved lists of names that can be easily accessed later.  When an Event is created, it is automatically added to the central Calendar feature, stores the date, time, and location of the event, and initializes an empty list of <code>Attendees</code>.  When members of your organization navigate to an event, they will be able to add names to the list via a simple text field.  The list automatically removes duplicates of the same name.  You can also add names in bulk by simply separating them with a newline, making adding lists of names a breeze.  Additionally, the number of names a member is able to add can be adjusted by an admin user, restricting the number of Attendees that can be invited by each member.  Once a list is created, it can be exported to a spreadsheet for easy printing or distribution.</p>
        <p>During a social event, users with social privileges can activate <code>Party Mode</code>.  In Party Mode, the list is closed and will no longer accept additional Attendees, and transitions into a tool for managing Attendees entering an event.  Members of your organization, on different devices, are able to mark Attendees as having arrived.  When an Attendee is marked as arrived, all other devices watching the list will automatically be updated, similarly to a Google Doc with many collaborators.  This eliminates the confusion of having multiple members managing the flow of Attendees into an event, and ensures that the list is always secure and accurate.</p>
        <p>The other view from the Social dashboard is the Roster view.  Rosters can be created by privileged users either by entering a list of names or by saving the list of Attendees from a previous event.  This makes engaging the same community for repeated social events easy, and eliminates the need to duplicate efforts constructing lists.  Once a Roster is created, all of the names on the roster can be added to an event in bulk.</p>
        </>
    )
}

export default Social;