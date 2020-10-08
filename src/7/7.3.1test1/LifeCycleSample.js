import React, { Component } from 'react';

class LifeCycleSample extends Component {

  constructor(props){
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.color !== nextProps.color){
      return {color: nextProps.color}
    }
    return null;
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  state = {
    color: null,
    number: 0
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate',nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if(prevProps.color !== this.props.color){
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate prevProps, prevState :: ', prevProps, prevState);
    if(snapshot){
      console.log('업데이트 되기 직전 색생', snapshot)
    }
  }

  render() {
    const style = {
      color: this.state.color
    }

    return (
      <div>
        <h1 style={style}
          ref={(ref) => this.myRef = ref}
        >{this.state.number}</h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;