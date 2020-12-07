const { Component } = require("react");



class TextCounter extends Component{


    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.props.angka}></input>
            </div>
        )
    }

}

export default TextCounter;