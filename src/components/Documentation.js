import Navbar from "./Navbar";
import DocumentationNav from "./DocumentationNav";
import DocumentationBody from "./DocumentationBody";
import React, { useState } from "react";

function Documentation() {
    const [currentPage, setCurrentPage] = useState("");
    
    return (
        <>
            <Navbar active="documentation"/>
            <div className="container documentation-container">
                <h2>Documentation Library</h2>
                <div className="row">
                    <div className="col-lg-2">
                        <DocumentationNav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                    </div>
                    <div className="col-lg-10">
                        <DocumentationBody currentPage={currentPage}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documentation;
