import React from 'react';
import '../style/Result.css';
import api from '../helpers/api'; 
class Result extends React.Component {
    constructor() {
        super();
        this.state={
            current: []
        }
    }
    componentDidMount() {
        this._isMounted= true;
    //    this.callApi();
      let callApi=()=> {
        api.current('/result',"data").then((result) => {
            // if(this._isMounted)
                    this.setState({current:result.current})
        }).catch((err) => {
            console.log(err);
            console.log("error");
        });
    }
    let x=setInterval(() => {
        callApi();
    }, 1000);
    }
  
    componentWillUnmount() {
        this._isMounted= false;
    }
    render(){
        return (
            <div className="Result">
               <h1 className="result_text">{this.state.current}</h1>
            </div>
        );
    }
}

export default Result;