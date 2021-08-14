import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

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

function DropdownCaret(props) {
	if (props.caretDown) {
		return <FontAwesomeIcon icon={ faCaretDown } />
	} else {
		return <FontAwesomeIcon icon={ faCaretUp } />
	}
}

function DocumentationNav(props) {
	const [caretDown, setCaretDown] = useState(true);
	const [caretDownFade, setCaretDownFade] = useState("fade-in");

	const toggleCaretDown = () => {
		setCaretDownFade("fade-out");
		setTimeout(() => {
			if (caretDown) {
				setCaretDown(false);
			} else {
				setCaretDown(true);
			}
			setCaretDownFade("fade-in");
		}, 500);
	}

    return (
        <div className="documentation-nav-container">
			<h5>Navigation <a onClick={ toggleCaretDown } data-toggle="collapse" href="#documentationNavigation" aria-expanded="false" aria-controls="documentationNavigation" className={ caretDownFade }><DropdownCaret caretDown={ caretDown } /></a></h5> 
            <div className="collapse show" id="documentationNavigation">
                <nav className="nav flex-column nav-pills documentation-nav">
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Social" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Calendar" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Rush" />
                        <DocumentationNavLink action={props.setCurrentPage} currentPage={props.currentPage} level="0" value="Resources" />
                </nav>
            </div>
        </div>
    )
}

export default DocumentationNav;
