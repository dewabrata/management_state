import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './component/counter';
import TextCounter from './component/TextCounter';

 class App extends Component{

  constructor(props){
    super(props)

    this.state={
      counter:0
    }
    this.updateData = this.updateData.bind(this);
  }

  updateData(nilai){

    this.setState({counter:nilai})
  }

  render(){
   return ( 
   <div className="card" style={{width: "18rem"}}>
  <TextCounter angka={this.state.counter}/>
   <Counter ketikaDiKlik ={this.updateData}/>
   </div>)
  }
    
  
 
}

export default App;
