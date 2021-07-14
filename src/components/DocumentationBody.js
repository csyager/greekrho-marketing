import * as Docs from './docs'

function DocumentationBody(props) {
    if (props.currentPage === "Social") { return <Docs.Social /> }
    else if (props.currentPage === "Calendar") { return <Docs.Calendar />}
    else if (props.currentPage === "Rush") { return <Docs.Rush />}
    else if (props.currentPage === "Current Rushees") { return <Docs.CurrentRushees />}
    else if (props.currentPage === "Resources") { return <Docs.Resources />}
    else { return <Docs.BaseDoc />}
}

export default DocumentationBody;