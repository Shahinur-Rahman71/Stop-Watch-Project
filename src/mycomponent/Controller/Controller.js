import React, { Component } from 'react';

class Controller extends Component {
    constructor(){
        super();
        this.state={
            start: true,
            pause: false,
            lap: false,
            reset: false
            
        }
    }
    
     Starthandler= ()=>{
        this.setState({
           start: false,
           pause: true,
           lap: true
        });
        
        this.props.start()
    }

    Pausehandler=()=>{
        this.setState({
            start: true,
            reset: true,
            pause: false,
            lap: false
        });

        this.props.pause();
    }

    Laphandler=()=>{
        this.props.lap()
        
    }

    Resethandler=()=>{
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false ,
                    
        });
        this.props.reset();
        
    }

    getController=()=>{
       
        let output= null;
        if(this.state.start && !this.state.reset){
            output=(
                <div >
                    <button onClick={this.Starthandler} className="btn btn-success m-4 px-5">Start</button>
                </div>              
            )          
        }else if(this.state.pause && this.state.lap){
            output=(
                <div>
                    <button onClick={this.Pausehandler} className="btn btn-info m-4 px-5">Pause</button>
                    <button onClick={this.Laphandler} className="btn btn-danger m-4 px-5">Lap</button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output=(
                <div>
                    <button onClick={this.Starthandler} className="btn btn-success m-4 px-5">Start</button>
                    <button onClick={this.Resethandler} className="btn btn-dark m-4 px-5">Reset</button>
                </div>
            )
        }

        return output;
    }

    render() {
        return (
            <div>
                {this.getController()}
                
            </div>
            
        )         
    }
}

export default Controller;