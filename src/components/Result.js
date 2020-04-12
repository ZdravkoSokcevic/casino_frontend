import React from 'react';
import '../style/Result.css';
import api from '../helpers/api'; 
import Websocket from 'react-websocket';
class Result extends React.Component {
    constructor() {
        super();
        this.state={
            current: [],
            expected: []
        }
    }
    componentDidMount() {
        this._isMounted= true;
    //    this.callApi();
      let callApi=()=> {
        api.current('/result',"data").then((result) => {
            // if(this._isMounted)
                    this.setState({current:result.current,expected:result.exaclyLimit})
        }).catch((err) => {
            console.log(err);
            console.log("error");
        });
    }
    // setInterval(() => {
    //     callApi();
    // }, 1000);
        let updateResult=(data)=>{
            let update=JSON.parse(data)
            this.setState({current:update.current,expected:update.exaclyLimit})
        }
    }
    
  
    componentWillUnmount() {
        this._isMounted= false;
    }
    render(){
        return (
            <div className="Result">
               <h1 className="result_text">{this.state.current}</h1>
               <h1 className="final_text">{this.state.expected}</h1>
               <Websocket url='wss://localhost:8989/current/check'
                    onMessage={this.updateResult()}/>
            </div>
        );
    }
}

export default Result;