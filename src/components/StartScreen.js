import React from 'react';
import '../style/start_screen.css';
import '../index.css';
import {ProgressBar} from 'react-step-progress-bar';
class StartScreen extends React.Component {
    
    constructor() {
        // const bgImage='../images/poker.jpg';
        super();
        this.state={
           visibility:'block',
           percent:0,
           display:'block',
           zindex:10
       }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({visibility:'none'})
        },3000);
        let s=setInterval(()=>{
            this.setState({percent:this.state.percent+10});
            if(this.state.percent>100) {
                this.setState({
                    visibility:'none',
                    zindex:-1000
                })
                clearInterval(s);
                
            }
        },300);
        
    }
    render(){
        return (
            <div 
                className="startAmination"
                style={{
                    display:this.state.visibility,
                    backgroundImage:"url("+require('../images/pokerwallpaper.jpg')+")",
                    zIndex:this.state.zindex
                    }}>
            {/* <div className="startAmination"style={{display:this.state.visibility}}> */}
                {/* Proba */}
                
                {/* <img src={require('../images/poker.jpg')} alt="Neka slika" width="100" height="100"></img> */}
                <ProgressBar   percent={this.state.percent} filledBackground="linear-gradient(to right, #90AFC5, #336B87)" unfilledBackground="linear-gradient(to left,#90afc5,#336b87) "/>
            </div>
        )
    }
}

export default StartScreen;