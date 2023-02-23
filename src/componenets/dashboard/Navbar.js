import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import LoginContext from '../Context/LoginContext';

function Navbar() {
    const userdata = useContext(UserContext);
    const logindata = useContext(LoginContext);
    const [show, setShow] = useState(false);


    return (

        <nav className="navbar navbar-expand-lg navbar-warning p-3 bg-light">
            <Link className="navbar-brand" to="#">Library</Link>
            <button onClick={() => { setShow(!show) }} className={show ? "navbar-toggler collapsed" : "navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={show ? "true" : "false"} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/portal/dashboard">Dashboard</Link>

                    <Link className="nav-item nav-link" to="/portal/book">Books</Link>
                    {logindata.isLibrarianVisible ? <Link className="nav-item nav-link" to="/portal/member">Members</Link> : null}
                </div>
            </div>

            <div className="ms-5 my-3">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userdata.username}</span>&nbsp;
                <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
            </div>
        </nav>

    )
}

export default Navbar
