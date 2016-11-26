import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Card extends Component {

    render() {
        return (
			<div className="div.col.md-3">
              <div className="panel panel-default">
				  <div className="panel-heading">{this.props.key}</div>
				  <div className="panel-body">
				  		<h1>Nome: {this.props.titulo}</h1>
				  		<p>Sexo: {this.props.sexo}</p>
				  </div>
			  </div>  
			 </div> 
        );
    }
}

export default Card;