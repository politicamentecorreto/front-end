import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Politicos extends Component {

    render() {
        return (
<div>
	<center><h1 align="center">Cadastro de Políticos</h1></center>
	<form action="" className="form">
		<div className="col-md-offset-3 col-md-6 col-md-offset-3">			
			<label for="">Nome </label>
			<input type="text" className="form-control" name="nome_politico"/>
			<br></br>
			<label for="">Nacionalidade</label>
			<input type="text" className="form-control" name="nacionalidade_politico"/>
			<br></br>
			<div className="row">
				<div className="col-md-3">
					<label for="">Estado</label>
					<select name="cidade_politico" id="" className="form-control">
						<option value="">SP</option>
						<option value="">RJ</option>
						<option value="">PR</option>
						<option value="">CE</option>
						<option value="">RS</option>
						<option value="">MT</option>
					</select>
				</div>
				<div className="col-md-9">
					<label for="">Cidade</label>
					<select name="cidade_politico" id="" className="form-control">
						<option value="">São Paulo</option>
						<option value="">Rio de Janeiro</option>
						<option value="">Curitiba</option>
						<option value="">Aquidauana</option>
						<option value="">Itapipoca</option>
						<option value="">Pau Grande</option>
					</select>
				</div>

			</div>	
			<br></br>		
			<div className="row">
				<div className="col-md-12">	
					<label for="">Partido</label>
					<select name="partido_politico" id="" className="form-control">
						<option value="">PT</option>
						<option value="">PSOL</option>
						<option value="">PSDB</option>
						<option value="">PMDB</option>
					</select>
					<br></br>
					<label for="">Escolaridade</label>
					<select name="escolaridade_politico" id="" className="form-control">
						<option value="analfa">Analfabeto</option>
						<option value="f_incompleto">Fundamental Incompleto</option>
						<option value="f_completo">Fundamental Completo</option>
						<option value="em_incompleto">Ensino Medio Incompleto</option>
						<option value="em_completo">Ensino Medio Completo</option>
						<option value="su_incompleto">Superior Incompleto</option>
						<option value="su_completo">Superior Completo</option>
					</select>
					<br></br>
				</div>
			</div>	
			<div className="row">
				<div className="col-md-6">
					<label for="">Ocupação</label>
					<input type="text" className="form-control" name="ocupacao_politico"></input>
				</div>
				<div className="col-md-3">
					<label for="">Número</label>
					<input type="text" className="form-control" name="numero_politico"></input>
				</div>
				<div className="col-md-3">
					<label for="">Sexo</label>
					<select name="sexo_politico" id="" className="form-control">
						<option value="M">Masculino</option>
						<option value="F">Feminino</option>
					</select>
					<br></br>
				</div>
				
				<br></br>
				<div className="col-md-12">
					<label for="">Site</label>
					<input type="text" className="form-control" name="site_politico"></input><br></br>
					<label for="">Email</label>
					<input type="email" className="form-control" name="email_politico"></input><br></br>
					<label for="">Link TSE</label>
					<input type="text" className="form-control" name="linkTSE_politico"></input><br></br>
					<label for="">Data Nascimento</label>
					<input type="text" className="form-control" name="dataNascimento_politico"></input>	<br></br>			
					<button className="btn btn-primary btn-block" type="submit">Cadastrar</button><br></br>
				</div>
			</div>
					
		</div>				
	</form>
</div>	
							
        );
    }
}

export default Politicos;