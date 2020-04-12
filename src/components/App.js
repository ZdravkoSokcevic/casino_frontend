import React, { Component } from 'react';
// import logo from '../logo.svg';
import {StartScreen} from './StartScreen';
import '../style/App.css';
import '../index.css';
import Result from './Result';
import api from '../helpers/api';
class App extends Component {
  constructor() {
    super();
    this.state={
      opacity:0,
      title:'Casino',
      mountNext: false,
      NavbarWidth:100
    }
  }
  componentDidMount() {
    setTimeout(() => {
      let interv=setInterval(()=> {
        this.setState({opacity:this.state.opacity+0.1});
        if(this.state.opacity>0.95) {
          this.mountNext=true;
          clearInterval(interv)
        }
      },100);
    }, 100);
  }
  switchNavbar() {
    console.log(this);
    console.log(this.state.NavbarWidth)
    if(this.state.NavbarWidth===100) {
      this.setState({NavbarWidth:0})
    }else this.setState({NavbarWidth:100})
  }

  render() {
    return (
    <div className="Container">
      {/* <StartScreen/> */}
      <div 
        className="Left"
        style={{
          width:this.state.NavbarWidth
        }}
      >
          Left {this.state.NavbarWidth}
      </div>
      <div  className="Main" style={{backgroundImage:"url("+require('../images/poker.jpg')+")",opacity:this.state.opacity}} >
        
        <div className="Right">
          <div className="Title"><h1>{this.state.title}</h1></div>
          {/* ({this.state.mountNext})?1: */}
                <Result/>
                
        </div>
      </div>  
      
      <img
        className="collapse" 
        src={require('../images/collapse.png')}
        onClick={this.switchNavbar.bind(this)}
      />
    </div>
    );
  }
}

export default App;
