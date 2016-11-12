import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Projetos extends Component {

    render() {
        return (
        	<div className="col-md-offset-3 col-md-6 col-md-offset-3">
        	<center><h1 align="center">Cadastro de Projetos</h1></center>
			<form action="" className="form">
				<label for="">Titulo</label>
				<input type="text" name="titulo_projeto" className="form-control"/>
				<br></br>
				<label for="">Descrição</label>
				<textarea name="descricao" className="form-control"></textarea>
				<br></br>
				<label for="">Data</label>
				<input type="date" name="data_projeto" className="form-control"/>
				<br></br>
				<label for="">Link TSE</label>
				<input type="text" name="link_projeto" className="form-control"/>
				<hr/>
				<button className="btn btn-primary btn-block" type="submit">Cadastrar</button>
			</form>
		</div>
                
        );
    }
}

export default Projetos;