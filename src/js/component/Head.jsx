import React from "react";

const Header = () => {
    return (
        <div className="card-body container-fluid text-align px-4 py-4">
            <h1 className="card-title fw-light d-inline-block w-50 p-3" >Nuevos Estrenos</h1>
            <br />
            <p className="card-text position-center fw-light">Los últimos estrenos de cine en España</p>
                <a className="btn btn-primary me-2 mb-2" href="https://www.themoviedb.org/movie/now-playing"> Estrenos Películas </a>
                <a className="btn btn-success me-2 mb-2" href="https://www.themoviedb.org/tv/on-the-air">Estrenos Series </a>
        </div>
    );

};

export default Header; 