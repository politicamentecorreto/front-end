import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Partidos extends Component {

    render() {
        return (
                <div className="container">
                    <center><h1 align="center">Cadastro de Partidos</h1></center>        
                    <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                    <form action="" className="form">
                        <label for="P">Nome</label>
                            <input type="text" className="form-control"/>
                        <br></br>    
                        <div className="row">
                            <div className="col-md-6">
                                <label for="">Numero</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label for="">Sigla</label>
                                <input type="text" className="form-control"/>
                            </div><br/>
                        </div>
                        <hr/>
                        <button className="btn btn-primary btn-block" type="submit">Cadastrar</button>    
                    </form>
                    </div>  
                </div>
        );
    }
}

export default Partidos;