const { Component } = require("react");

class Tombol extends Component{

  constructor(props){
     super(props)
     this.state = {
        counter:0
      }
    this.tambah = this.tambah.bind(this);
    this.kurang = this.kurang.bind(this);
    }
  
    tambah(){
     
      let nilai = this.state.counter+1;
      this.setState({counter:nilai})
      this.props.ketikaDiKlik(this.state.counter)

      console.log(this.state.counter);
    }
  
    kurang(){
     
      let nilai = this.state.counter-1;
      this.setState({counter:nilai})
      this.props.ketikaDiKlik(this.state.counter)
    }

  render(){
      return(
          <div>
   <button type="button" className="btn btn-primary"  onClick={this.tambah} >+</button>
   <button type="button" className="btn btn-secondary"  onClick={this.kurang}>-</button>  
          </div>
      );
  }


}

export default Tombol