import React from 'react';

export default class extends React.Component{
    state = {
        curr:this.props.min
    }
    // constructor(props){
    //     super(props);
    //     this.sate = {
    //         curr:props.min
    //     }
    // }

    inc = () => {
        if(this.state.curr < this.props.max){
            this.setState({...this.state, curr: this.state.curr + 1});
        }
    }

    dec = () => {
        if(this.state.curr > this.props.min){
            this.setState({...this.state, curr:this.state.curr - 1});
        }
    }

    render(){
        return (
            <div style={{textAlign:'center'}}>
                <h2>Counter</h2>
                <button onClick={this.dec}>-</button>
                <span>Count: {this.state.curr}</span>
                <button onClick={this.inc}>+</button>
            </div>
        );
    }
}