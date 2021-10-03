import DocVid from "./DocVid"
import resourcesVid from "./../../images/resources.mp4"

function Resources() {
    return (
        <>
        <h1>Resources</h1>
            <DocVid src={resourcesVid} />
			<p>The Resources feature is meant to be the one-stop shop for members looking for documents or important links.  Rather than share files in a way where they’re lost or easily missed, admin members of your organization can post files here, where other members of your organization can easily find and access them.</p>
       </>
    )
}

export default Resources;
