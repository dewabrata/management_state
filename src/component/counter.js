import { Component } from 'react';
import Tombol from './tombol';


class Counter extends Component{

    constructor(props){

        super(props);
        this.updateData = this.updateData.bind(this);
    }
  
    updateData(nilai){
  
      this.props.ketikaDiKlik(nilai)
    }

        render(){
            return(
                <div className="card-body">
   <h5 className="card-title">Card title</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Tombol ketikaDiKlik ={this.updateData}/>
 </div>
            )
        }


}

export default Counter;