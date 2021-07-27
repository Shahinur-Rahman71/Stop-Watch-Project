import React, { Component } from 'react';
import './ProjectTitle.css'
class ProjectTitle extends Component {
    constructor(){
        super();
        this.state={
            isInput: false,
            titleName: 'Stop Watch Project'
        }
    }
    TitlechangeHandler=(e)=>{
        const value=e.target.value;
        this.setState({
            titleName: value
        })
    }
    TitleKeyHandler=(event)=>{
        if(event.key==='Enter'){
            this.setState({
                isInput: false
            })
        }
    }
    TitleClickHandler=()=>{
        this.setState({
            ...this.state,
            isInput: true
        })
    }
    TitleBlurHandler=()=>{
        this.setState({
            isInput: false
        })
    }
    render() {
        let output= null
        if(this.state.isInput){
            output=(
                <div className="title">
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.titleName}
                        onChange={this.TitlechangeHandler}
                        onKeyPress={this.TitleKeyHandler}
                        onBlur={this.TitleBlurHandler}
                    />
                </div>

            )
        }else{
            output=(
                <div className="d-flex title">
                    <h3 className="display-5">{this.state.titleName}</h3>
                    <span 
                        className="ml-auto editicon"
                        onClick={()=>this.TitleClickHandler()}>
                        <i className="fas fa-edit"></i>
                    </span>
                </div>               
            )
        }
        return (
            <div className="row-cols-lg-2">
                {output}
            </div>
        );
    }
}

export default ProjectTitle;