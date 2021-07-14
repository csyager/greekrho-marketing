import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function DocumentationNavLink(props) {
    function handleClick(e) {
        e.preventDefault();
        if (props.currentPage !== props.value){
            props.action(props.value)
        } else {
            props.action("")
        }
        
    }
    return (
        <a className={ props.currentPage === props.value ? 'nav-link active doc-nav-link-'+props.level : 'nav-link doc-nav-link-'+props.level} onClick={handleClick} href="/">{props.value}</a>
    )
}

function DocumentationNav(props) {

    return (
        <div className="documentation-nav-container">
            <h5>Navigation <a data-toggle="collapse" href="#documentationNavigation" aria-expanded="false" aria-controls="documentationNavigation"><FontAwesomeIcon icon={ faCaretDown } /></a></h5> 
            <div className="collapse show" id="documentationNavigation">
                <nav className="nav flex-column nav-pills documentation-nav">
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Social" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Calendar" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Rush" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="1" value="Current Rushees" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Resources" />
                </nav>
            </div>
        </div>
    )
}

export default DocumentationNav;