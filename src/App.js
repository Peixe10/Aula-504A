import React, { Component } from 'react';
import './App.css';
import PlacarTime from './PlacarTime';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gols1: 0,
      gols2: 0
    }
  }
  
  incrementar = numero => {
    let novoState = {};
    novoState[`gols${numero}`] = this.state[`gols${numero}`] + 1;
    this.setState(novoState);
  }

  atualizar = () =>{
    this.setState({
      gols1: 0,
      gols2: 0
    });
  }

  //Toda função de eventoq que voce cria é um callback. O proprio sistema express carrega o (req,res), ou até o err, mas especificamente para esse funçãp voce que tem que criar , pois voce declarou evento vc espera receber . Recebe o evento que ja seria passado para a funçao e recebe o target dele, então o event.targer é o THIS.

  //Não deu certo do modo abaixo, do modo que o professor fez no github está ok. Tentar corrigir.

  renomear = (evento) => {
    //2 - Nesse setState toda vez que ele é chamaodo atualiza o nome.
    if (evento.target.name="1"){
      this.setState({time1: evento.target.value})}
    else if (evento.target.name="2"){
      this.setState({time2: evento.target.value})}
}
  
  render() {
    return (
      <div>
        <div className="controles">
          <input onChange={this.renomear} type="text" placeholder="Digite o nome do time da casa" value={this.state.time1} name="1" />
          <input onChange={this.renomear} type="text" placeholder="Digite o nome do time visitante" value={this.state.time2} name="2"/>
          <button onClick={this.atualizar}>Zerar placar</button>
        </div>
        <div className="placar">
          <PlacarTime numero="1" gols={this.state.gols1} nomeTime={this.state.time1} funcaoBotao={this.incrementar} />
          X
          <PlacarTime numero="2" gols={this.state.gols2} nomeTime={this.state.time2} funcaoBotao={this.incrementar} visitante="true"/>
        </div>
      </div>
    );
  }
}

export default App;