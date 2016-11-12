import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Processos extends Component {

    render() {
        return (

                <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                	<center><h1 align="center">Cadastro de Processos</h1></center>
					<form action="" className="form">
						<label for="">Numero</label>
						<input type="text" name="numero_processo" className="form-control"/>
						<br></br>
						<label for="">Descrição</label>
						<textarea name="descricao_processo" className="form-control"></textarea>
						<br></br>
						<label for="">Data de abertura</label>
						<input type="date" name="data_processo" className="form-control"/>
						<br></br>
						<label for="">Link TSE</label>
						<input type="text" name="link_processo" className="form-control"/>
						<hr/>
						<button className="btn btn-primary btn-block" type="submit">Cadastrar</button>
					</form>
				</div>
        );
    }
}

export default Processos;