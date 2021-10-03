function DocVid(props) {
    return(
        <>
        <div className="embed-responsive embed-responsive-16by9 doc-vid-container">
            <video className="doc-vid" controls>
                <source src={props.src} type="video/mp4" /> 
            </video>   
        </div><br />
        </>
    )
}

export default DocVid