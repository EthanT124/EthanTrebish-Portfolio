import React from 'react';
import github from "../Images/Reach/Github.png";
import linkedin from "../Images/Reach/Linkedin.png";

const Navbar = () => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <div className="container">
                <div className="row w-100 justify-content-between">
                    <div className="col-auto">
                        <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', color: 'whitesmoke' }}>Ethan Trebish</a>
                    </div>
                    <div className="col-auto">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-link" onClick={() => scrollToElement("Home")}
                           style={{fontWeight: 'bold', color: 'whitesmoke'}}>Home</a>
                        <a className="nav-link" onClick={() => scrollToElement("About")}
                           style={{fontWeight: 'bold', color: 'whitesmoke'}}>About</a>
                        <a className="nav-link" onClick={() => scrollToElement("Portfolio")}
                           style={{fontWeight: 'bold', color: 'whitesmoke'}}>Portfolio</a>
                        <a className="nav-link" onClick={() => scrollToElement("Contact")}
                           style={{fontWeight: 'bold', color: 'whitesmoke'}}>Contact</a>
                        <a className="nav-link" style={{fontWeight: 'bold', color: 'whitesmoke'}}
                           href="https://github.com">Github</a>
                        <a className="nav-link" style={{fontWeight: 'bold', color: 'whitesmoke'}}
                           href="https://www.linkedin.com/in/ethan-trebish-4b0b0a1b0/">Linkedin</a>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
