import React, { useState } from "react";
import './wrap.css';

const App = () => {

    //Hook(함수)
    const [isOn, setIsOn] = useState(true); //여기서 setIsOn은 비동기 방식

    //Event Handler
    const btn1ClickHandler = (e) => {
        console.log('btn1ClickHandler CLICKED');
        console.log('e Obj: ', e);

    }

    const btn2ClickHandler = (e) => {
        console.log('btn2ClickHandler CLICKED');
        console.log('e.target: ', e.target);

        console.log('ison:', ison);
        //setIsOn(false);  
        setIsOn((v) => !v); //: 상태를 바꿔라 이 코드(문법구조)에 익숙해지자    
        console.log('ison: ', ison);

    }

    const btn3ClickHandler = (str) => {
        console.log('btn3ClickHandler CLICKED')
        console.log('str:', str);
    }
    return(
        <>
            <div id="wrap">
            <button className="btn1" onClick={btn1ClickHandler}>button01</button>
            <br />
            <button className="btn2" onClick={btn2ClickHandler}>
                {
                    isOn ? 'Switch OFF' : 'Switch On'
                }
                </button>
            <br />
            {/*<button className="btn3" onClick={btn3ClickHandler}>button03</button>*/}
            <button className="btn3" onClick={(str) => btn3ClickHandler('abc')}>button03</button>
            
            </div>
        </>
    );
}

export default App;