import React, { Component } from 'react';
import './App.css';
import Welcome from './Title/Title'
import ProjectTitle from './Title/ProjectTitle';
import CountDown from './CountDown/CountDown';
import Controller from './Controller/Controller';
import Laps from './Laps/Laps';

class App extends Component {
  constructor(){
    super()
    this.state={
      time: {
        min: 0,
        sec: 0,
        mill: 0
      },
      laps: []
    }
  }

  getStart=()=>{
      this.intervalId = setInterval(() => {
      let sec = this.state.time.sec;
      let mill = this.state.time.mill;
      let min = this.state.time.min;

      if(mill>=10){
        sec = sec +1
        mill = 0
      }

      if(sec>=60){
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mill: mill+1
        }
      })

    }, 100);
  }

  setPause = ()=>{
    clearInterval(this.intervalId);
  }

  setReset=()=>{
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mill: 0
      },
      laps: []
    });
  }

  setLaps=()=>{
    let time={
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time,...this.state.laps]
    });
    console.log(this.state.laps);
  }

  render() {
    return (
      <div className="container">
        <Welcome/>
        <div className="row">
          <div className="col">
            <ProjectTitle/>
            <CountDown Time={this.state.time}/>
            <Controller
              start={this.getStart.bind(this)}
              pause={this.setPause}
              reset={this.setReset}
              lap={this.setLaps}
            />
            <Laps laps={this.state.laps}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
