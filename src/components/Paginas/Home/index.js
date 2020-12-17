import "../../../style.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-4">SWAPI Explorer</h1>
        <p className="lead">
          This is a simple test, to show Star Wars Characters.
        </p>
        <hr className="my-4" />
        <Link to="/bootstrap-fluid">
          <button type="button" className="btn btn-primary m-2">
            Bootstrap-Fluid
          </button>
        </Link>
        <Link to="/flexbox">
          <button type="button" className="btn btn-light m-2">
            Flexbox
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
