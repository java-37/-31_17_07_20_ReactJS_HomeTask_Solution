import React from 'react';

export default class extends React.Component{
    state = {
        curr:this.props.min
    }

    onChangeHandler = e => {
        if(e.target.value){
            const n = parseInt(e.target.value);
            this.setState({...this.state,curr:n});
        }else{
            this.setState({...this.state, curr:''});
        }
    }

    onBlurHandler = () => {
        // if(this.state.curr < this.props.min || this.state.curr > this.props.max){
            this.setState({...this.state,curr:this.valid(this.props.min, this.props.max, this.state.curr)});
        // }
    }

    onKeyUpInpHandler = e => {
        if(e.key === 'Enter'){
            this.setState({...this.state,curr:this.valid(this.props.min, this.props.max, this.state.curr)});
        }
    }

    valid(min, max, number){
        if(number < min || number > max){
            return min;
        }
        return number;
    }

    inc = () => {
        if(this.state.curr < this.props.max){
            this.setState({...this.state, curr: this.state.curr + 1});
        }
    }

    dec = () => {
        if(this.state.curr > this.props.min){
            this.setState({...this.state,curr: this.state.curr - 1});
        }
    }

    render(){
        return (
            <div style={{textAlign:'center', marginTop:'50px'}}>
                <h2>Advanced Counter</h2>
                <button onClick={this.dec}>-</button>
                <input 
                    type="number" 
                    style={{fontSize:'inherit'}}
                    value={this.state.curr}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    onKeyUp={this.onKeyUpInpHandler}
                />
                <button onClick={this.inc}>+</button>
            </div>
        );
    }
}