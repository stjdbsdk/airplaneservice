import React, {useState} from "react";

import {setLoginedSessionID, getLoginedSessionID} from './session.js';

const SignIn = (props) => {

    //hook
    const [uId, setUId] = useState('');     //''
    const [uPw, setUPw] = useState('');     //''

    //handler
    const uIdChangeHandler= (e) => {
        console.log('uIdchangeHandler()');
        console.log('----->', e.target.value);

        setUId(e.target.value);
    }

    const uPwChangeHandler= (e) => {
        console.log('uPwChangeHandler()');
        console.log('----->', e.target.value);

        setUPw(e.target.value);
    }

    const signInBtnClickHandler = () => {
        console.log('signUpBtnClickHandler()');

        let memDBInStorage = localStorage.getItem('memberDB');   //string
        let memDBJsObj = JSON.parse(memDBInStorage);            //JS Object (All Member)
        let memObj = memDBJsObj[uId];                           //JS Object (My member)

        if (memObj !== undefined && memObj.uPw === uPw) {
            //회원 정보 객체(Object)가 있다. && 비밀번호가 일치한다. => 로그인 성공
            alert('SIGN IN SUCCESS');

            setLoginedSessionID(uId);

            props.homeViewer(true);
            props.signUpViewer(false);
            props.signInViewer(false);
            props.reservationViewer(false);
            props.reservationListViewer(false);

            props.changeMenuBar(true);

            
        }else {
            //회원 정보 객체(Object)가 없다.
            alert('SIGN IN FAIL');

            setLoginedSessionID();

            props.homeViewer(false);
            props.signUpViewer(false);
            props.signInViewer(true);
            props.reservationViewer(false);
            props.reservationListViewer(false);

            setUId('');
            setUPw('');

        }

    }


    return(
        <div>
            <input type="text" name="u_id" value={uId} onChange={uIdChangeHandler} placeholder="Input user ID" />   {/*항상 스테이트랑 동기화가 돼야 한다.*/}
            <br />
            <input type="password" name="u_pw" value={uPw} onChange={uPwChangeHandler} placeholder="Input user PW" />
            <br />
            <input type="button" value="SIGN IN" onClick={signInBtnClickHandler}/>
            </div>
    );
}

export default SignIn;