import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import logo from '../images/logo.png';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu




class Barra extends Component {

    render() {
        return (
            
                <div className="barra">
                    <img src={logo} alt="logo"></img>
                    <div className="icones-topo">
                        <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
                        <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                    </div>
                </div>

        );
    }
}

export default Barra;