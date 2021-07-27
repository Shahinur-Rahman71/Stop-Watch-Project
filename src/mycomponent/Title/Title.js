import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Welcome extends Component {
    state={
        isediting: false,
        nameTitle: "Please, write your name"
    }

    onChangeHandler=(event)=>{
        
        const value=event.target.value;
        this.setState({
            nameTitle: value
        })
    }
    keyHandler=(event)=>{
        if(event.key==='Enter'){
            this.setState({isediting: false})
        }
    }
    render() {
        const output= this.state.isediting ?(
            <input
                className="display-5"
                onKeyPress={this.keyHandler}
                type="text"
                value={this.state.nameTitle}
                onChange={this.onChangeHandler}
            />
        ):(
            <span >{this.state.nameTitle}</span>
        )
        return (
            <div className="my-5 row">
                
                <div className="col-sm-12 col-md-12 col-lg-12">
                    {output}
                    <span   
                        className="ml-5"
                        onClick={()=> this.setState({isediting: true})}                
                        style={{cursor: 'pointer'}}>
                        <i className="fas fa-edit "></i>
                    </span>
                    
                </div>
                
            </div>
        );
    }
}

export default Welcome;