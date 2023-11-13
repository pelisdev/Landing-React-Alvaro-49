import React from "react";

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-dark text-light bg-opacity-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo" width="120" height="50" class="d-inline-block align-text-top" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="collapsenavbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="https://www.themoviedb.org/movie"> Estrenos </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="https://www.themoviedb.org/movie"> Populares </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="https://www.themoviedb.org/movie/top-rated"> Mejor Valoradas </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="https://www.themoviedb.org/movie"> Más Vistas </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;
