import React, { Component } from 'react';
//import Parse from 'P';
import './App.css';
import './css/bootstrap/css/bootstrap.min.css';
import './css/font-awesome/css/font-awesome.min.css';
import './css/main.css';
import Menu from './components/Menu.jsx';
import Botao from './components/BotaoAbrir';
import Barra from './components/Barra.jsx';
import Footer from './components/Footer.jsx';
import Parse from 'parse';
import ParseReact from 'parse-react';


// função auxiliar que abre e fecha o menu


Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3','s5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
Parse.serverURL='https://parseapi.back4app.com/';
var Politico = Parse.Object.extend('Politico');

class App extends Component {

    
    
    
    render() {
        return (
            <div className="wrapper">
                <div className="canvas">
                    <Menu/>
                    <Botao/>
                    <Barra/>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default App;
