import DocVid from "./DocVid"
import events from "./../../images/rush_events.mp4"
import signin from "./../../images/rush_signin.mp4"
import currentRushees from "./../../images/current_rushees.mp4"
import rusheeProfile from "./../../images/rushee_profile.mp4"
import voting from "./../../images/voting.mp4"

function Rush() {
    return (
        <>
        <h1>Rush</h1>
			<p>Rush is one of the most important operations of a student organization. Recruiting new members is how student organizations fund their operations and continue to survive. That's why we've paid special attention to rush and made it one of our most involved features.  Within the GreekRho rush feature, rush is a series of events categorized into rounds.  At each event, <code>rushees</code> are able to enter their personal information to join the rush process, and at later events mark themselves as present for the purpose of tracking attendance.  Members of your organization are able to centrally record their interactions and opinions of potential new members.  At the end of each round, the voting process occurs and rushees can either be promoted to the next round or cut from the rush process.</p>
            <h2>Rush Events</h2>
            <DocVid src={events} />
            <p>Rush events work similarly to social events.  Admin users are able to create events, and assign them to a round.  The default number of rounds is three, but this can be edited by an admin in the site settings.  Events have a date, time, and location, and can be marked as "New rushees allowed."  Events marked "New rushees allowed" will present rushees with a form at signin for collecting contact information, whereas events not marked as such will present a list allowing them to mark themselves as present.</p>
			<h2>Signin</h2>
            <DocVid src={signin} />
            <p>The video above shows a rushee signing into a rush event marked "New rushees allowed."  These events are meant to be the openers for the rush process, such as an Open House where potential new members are met for the first time and entered into the process.  In the video, the camera is disabled for privacy reasons, but in practice the rushee would be able to take a screenshot using the photobooth tool at the bottom of the form.  This screenshot will be attached to their profile, to easily identify the rushee later.</p>
            <p>The admin user then adds a second event, where the "New rushees allowed" option is unchecked.  Rushees signing into this event are presented with a different screen, where they can mark themselves as present from a list of rushees.  This is meant for later events, where new information is no longer needed on each potential new member.  Attendance at events is tracked on the rushee profile page, so members of your organization can see which rushees have been attending your events.</p>
            <h2>Current Rushees</h2>
            <DocVid src={currentRushees} />
            <p>The current rushees page is a central place for your organizations members to see potential new members.  The list is quickly searchable by the name of the rushee, and advanced filters can be applied on any personal information of the rushees, such as their year, hometown, or major.  This makes finding rushees that your members have something in common with very simple, and can be used to intelligently rush those potential new members.  Clicking on a rushee in this list opens their profile page, where more information can be found.</p>
            <h2>Rushee Profile</h2>
            <DocVid src={rusheeProfile} />
            <p>The rushee profile page is the central location for a rushee's personal information, as well as for your members to interact with them during rush.  In this page, the information that a rushee entered when they signed into rush is visible under the <code>Personal Information</code> section at the bottom of the page.  Their attendance at any events can also be seen here.  Members of your organization are able to <code>Endorse</code> or <code>Oppose</code> rushees on this page, as well as leave <code>Comments</code>.  The purpose of this feature is to quickly record thoughts on a rushee after an interaction with them, as either an endorsement or opposition or as a comment.  When it comes time to vote on a rushee, the members who endorsed or opposed can be easily identified and asked to speak towards their opinions of the rushee.  This makes the voting process faster and more accurate, ensuring that your organization is able to recruit members that you have a positive opinion of as a group.</p>
            <h2>Voting</h2>
            <DocVid src={voting} />
            <p>When we first set out to create this site, voting was the pain point we wanted to solve.  Discussions during voting and voting by hand on hundreds of rushees used to take hours.  The process was brutally inefficient and tiring.  Not anymore.  The video above demonstrates the process, with an admin user's view on the left and a regular voting member on the right.  In practice, the admin would likely be running the voting session, presenting their screen to the voting members.  The admin user has a set of controls on their view of a rushee that aren't visible to regular members, enabling them to open voting, as well as push rushees to the next round or cut them.  When the admin clicks "Open voting," votes can be cast from members of your organization.  The view on the right shows a member casting a vote from their mobile device.</p>
            <p>When voting, there are four options:</p>
            <ul>
                <li><code>Yes</code> - a vote to push the rushee to the next round</li>
                <li><code>No</code> - a vote to cut the rushee</li>
                <li><code>Abstain</code> - a vote for neither option</li>
                <li><code>Blackball</code> - a vote to unequivocally cut a rushee.  Voting to blackball will record your name and display it once voting is closed, and is meant to be used rarely and only when a voter strongly feels a potential new member should not be admitted.</li>
            </ul>
            <p>When the 10 second vote timer has expired, voting will be closed and no more votes will be tallied.  The results are then displayed to the admin user.  The admin can reset the votes from this screen, re-open voting to collect more votes, or push or cut the rushee.  Clicking "Send through" will move the rushee to the next round.  Cutting a rushee will remove them from consideration.  <b>Cutting a rushee does not delete their rush data.</b>  They can still be viewed in the Current Rushees list by enabling the "Show cut rushees" filter, and can be un-cut from the site settings.</p>
       </>
    )
}

export default Rush;
