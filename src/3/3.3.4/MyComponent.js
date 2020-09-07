import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }

  static defaultProps = {
    name: '기본이름'
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  arrowFuncDifference(){
    setTimeout(function(){
      console.log('hello world');
    }, 1000)

    setTimeout(()=>{
      console.log('hello world');
    }, 1000);

    function BlackDog(){
      this.name = '검둥이';

      return {
        name: '흰둥이',
        bark: function(){
          console.log(this.name + ': 멍멍!');
        }
      }
    }

    const blackDog = new BlackDog();
    blackDog.bark();

    function WhiteDog(){
      this.name = '흰둥이';

      return {
        name: '검둥이',
        bark: ()=>{
          console.log(this.name + ': 멍멍');
        }
      }
    }

    const whiteDog = new WhiteDog();
    whiteDog.bark();

    function twice(value){
      return value * 2;
    }

    const triple = (value) => value * 3;

    console.log(twice(2));
    console.log(triple(2));

  }

  render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name}입니다. </p>
        <p>저는 {this.props.age}살 입니다.</p>
        <p>숫자: {this.state.number}</p>
        <button onClick={()=>{
            this.setState({
              number: this.state.number + 1
            })
          }
        }>더하기</button>
        <button onClick={function(){
            this.setState({
              number: this.state.number + 1
            })
          }
        }>더하기(이거는 this 바인딩이 다름)</button>
        <button onClick={this.arrowFuncDifference}>추가 ()=> 와 function() 차이</button>
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: '기본이름'
// }

// MyComponent.propTypes = {
//   name: PropTypes.string
// }

export default MyComponent;