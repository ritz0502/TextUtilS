import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

    <div className="container-fluid">
      <Link className="navbar-brand" href="/">{props.title}</Link>
      {/* <Link className="navbar-brand" href="/">Text</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>

        {/* ✅ Color palette buttons
          <div className="d-flex mx-2">
            {/* Light mode palettes */}
            {/* <div onClick={() => props.applyTheme('white')} className="bg-light rounded mx-1" style={{ height: '20px', width: '20px', cursor: 'pointer', border: '1px solid #000' }}></div>
            <div onClick={() => props.applyTheme('#f0f0f0')} className="bg-secondary rounded mx-1" style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div onClick={() => props.applyTheme('#ffe8cc')} className="bg-warning rounded mx-1" style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div> */}

            {/* Dark mode palettes */}
            {/* <div onClick={() => props.applyTheme('#042743')} className="rounded mx-1" style={{ height: '20px', width: '20px', backgroundColor: '#042743', cursor: 'pointer' }}></div>
            <div onClick={() => props.applyTheme('#121212')} className="rounded mx-1" style={{ height: '20px', width: '20px', backgroundColor: '#121212', cursor: 'pointer' }}></div>
            <div onClick={() => props.applyTheme('#0b3d39')} className="rounded mx-1" style={{ height: '20px', width: '20px', backgroundColor: '#0b3d39', cursor: 'pointer' }}></div>
          </div> */}
          
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
          <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="switchCheckDefault">
          Enable Dark Mode
          </label>

        </div>
      </div>
    </div>
    </nav>
  )
}


Navbar.propTypes={title: PropTypes.string, aboutText: PropTypes.string}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About us here'
};