import './app.scss';
import * as React from "react";

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="https://bulma.io" className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width={120} height={80} />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">About Us</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Locations</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Location 1
                            </a>
                            <a className="navbar-item">
                                Location 2
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item">Storage Tips</a>
                    <a className="navbar-item">Contact Us</a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary"><strong>Pay Rent</strong></a>
                            <a className="button is-light">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
