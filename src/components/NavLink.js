import {Link} from "react-router-dom";

function NavLink(props) {

    const scrollToTopOfPage = () => {
        document.documentElement.scrollTo(0, 0);
    }

    return(
        <Link onClick={scrollToTopOfPage} {...props} >
            {props.children}
        </Link>
    );
}

export default NavLink;