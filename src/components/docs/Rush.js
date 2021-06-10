function Rush() {
    return (
        <>
        <h1>Rush</h1>
        <p>Rush is one of the most important operations of a student organization.  Recruiting new members is how student organizations fund their operations and continue to survive.  That's why we've paid special attention to rush and made it one of our most involved features.  First, there's a few concepts to get familiar with:</p>
        <ul>
            <li><code>Rushee</code>:  A potential new member being considered for admission into an organization, by way of attending Rush events.</li>
            <li><code>Rush Event</code>:  An event that Rushees attend while seeking admission.  There are two types:</li>
            <ul>
                <li>New members allowed:  As rushees enter, they will be prompted to create an account, capturing contact information and a headshot.</li>
                <li>Standard:  New rushees are not entering the system.  Instead, rushees who have previously created an account at an intake event will be checking their names off as they enter the event.</li>
            </ul>
            <li><code>Round</code>:  Events are categorized into Rounds.  At the end of each round, members will vote on whether to move a Rushee to the next round or discontinue their consideration.  </li>
        </ul>
        <p>As Rushees enter the system, their information is captured, and can be referenced by members as they make the difficult decision of who to offer admission into the organization.  We've built tools to assist in this decision making.  Rushees can then be searched and filtered by any of the data points they've entered, making it easy for members to seek out Rushees that they share similarities with.  Members are able to <code>Endorse</code> or <code>Oppose</code> Rushees that they interact with, making it easy to identify the sentiment of members toward Rushees.  Members can also leave comments on Rushees, which can be viewed by other members.</p>
        <p>Voting is inherently difficult, so we've done everything we can to make it a more streamlined and efficient process.  Voting is controlled by admin users, and votes cannot be tallied until it has been opened by an admin.  Members are able to vote simultaneously from their devices, with the votes being accurately tallied within a few seconds.  This removes any uncertainty, while also reducing time spent voting.</p>
        <p>In total, we've streamlined the process of vetting members for admission into your organization, from intake into the Rush process to voting on admission.</p>
        </>
    )
}

export default Rush;