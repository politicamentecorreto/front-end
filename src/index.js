import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Politicos from './components/Politicos.jsx';
import Partidos from './components/Partidos.jsx';
import Projetos from './components/Projetos.jsx';
import Processos from './components/Processos.jsx';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';


ReactDOM.render(
  (<Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<Route path="/politicos" component={Politicos}/>
  		<Route path="/partidos" component={Partidos}/>
  		<Route path="/projetos" component={Projetos}/>
  		<Route path="/processos" component={Processos}/>
  	</Route>  	
  </Router>),
  document.getElementById('root')
);