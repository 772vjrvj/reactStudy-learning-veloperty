import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        { /* 요소 밖에서는 이렇게 작성해요 */}
        const text = '당신은 어썸한가요?'
        const condition = true;
        const style = {
            backgroundColor:'gray',
            border: '1px solid black',
            height: Math.round(Math.random() * 300) + 50,
            width: Math.round(Math.random() * 300 ) +50,
            WebkitTransition:'all',
            MozTransition:'all',
            msTransition:'all'
        }
        return (
            <div className='my-div'>
                <h1>리액트 안녕!</h1>
                <h2>{text}</h2>
                {condition && '보여주세요'}
                <div 
                 style={style}
                 //주석
                 /* 주석 */
                ></div>
                //여기 쓰는 건 그대로 렌더링됩니다.
                /* 여기에선 주석 못 써요 */
            </div>

        );
    }
}

export default App;