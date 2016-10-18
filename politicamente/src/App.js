import React, { Component } from 'react';
import './App.css';
import './css/bootstrap/css/bootstrap.min.css';
import './css/font-awesome/css/font-awesome.min.css';
import './css/main.css';
import logo from './images/logo.png';
import endeavor from './images/endeavor.png';
import back4app from './images/back4app.png';
import jpmorgan from './images/JPMorgan.png';
import senai from './images/senai.png';
//import script from './js/script.js';

// função auxiliar que abre e fecha o menu




class App extends Component {

    toggleMenu() {

        // var toogleMenu = document.querySelectorAll('.toggle-menu');
        var wrapper = document.querySelector('.wrapper');
        if (wrapper.classList.contains('show-menu')) {
            wrapper.classList.remove('show-menu');
            document.getElementById("botao").style.display = 'block';
        }
        else {
            wrapper.classList.add('show-menu');
            document.getElementById("botao").style.display = 'none';
        }
    };


    componentDidMount() {
        window.onkeyup = function (e) {
            if (e.KeyCode === 27 || e.which === 27) {
                var wrapper = document.querySelector('.wrapper');
                if (wrapper.classList.contains('show-menu')) {
                    wrapper.classList.remove('show-menu');
                    document.getElementById("botao").style.display = 'block';
                }
            }
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="canvas">
                    <div className="menu">
                        <div className="botao">
                            <a href="#" onClick={this.toggleMenu} className="toggle-menu botao"><i className="fa fa-times fa-1x" aria-hidden="true"></i></a>
                        </div>
                        <div className="usuario">
                            <div className="avatar"></div>
                            <p className="nome">Fulano de Tal</p>
                            <div className="logoff"><i className="fa fa-power-off" aria-hidden="true"></i><a href="">Logoff</a></div>
                        </div>
                        <ul>
                            <li><a href="#">Politicos</a></li>
                            <li><a href="#">Partidos</a></li>
                            <li><a href="#">Projetos</a></li>
                            <li><a href="#">Processos</a></li>
                        </ul>
                    </div>
                    <a href="#" id="botao" onClick={this.toggleMenu} className="toggle-menu botao-abrir"><i className="fa fa-bars fa-3x" aria-hidden="true" ></i></a>
                    <div className="barra">
                        <img src={logo} alt="logo"></img>
                        <div className="icones-topo">
                            <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
                            <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="container">
                        <h1 align="center">Politicos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, facilis atque aliquam veniam officia! Repellat libero nobis eum nihil, at expedita dolores quaerat assumenda error, nostrum, repudiandae iure beatae omnis.</p>
                    </div>
                </div>
                <div className="footer">
                    <img src={endeavor} alt="endeavor" className="endeavor"></img>
                    <img src={back4app} alt="endeavor" className="back4app"></img>
                    <img src={senai} alt="endeavor" className="senai"></img>
                    <img src={jpmorgan} alt="endeavor" className="jpmorgan"></img>
                    <div className="rodape">
                        <div className="copyright">2016 - Todos os Direitos Reservados</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
