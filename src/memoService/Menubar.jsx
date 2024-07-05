import React, {useState} from "react";
import Home from "./Home";
import SignUp from "./member/SignUp";
import SignIn from "./member/SignIn";
import Modify from "./member/Modify";
import Memo from "./memo/Memo";
import MemoList from "./memo/MemoList";

const Menubar = () => {

    //hook
    const[isHome, setIsHome] = useState(true);
    const[isSignUp, setIsSignUp] = useState(false);
    const[isSignIn, setIsSignIn] = useState(false);
    const[isModify, setIsModify] = useState(false);
    const[isMemo, setIsMemo] = useState(false);
    const[isMemoList, setIsMemoList] = useState(false);

    const [isLogined, setIsLogined] = useState(false);

    //handler
    const homeClickHandler = () => {
        console.log('homeClickHandler()');

        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const signUpClickHandler = () => {
        console.log('signUpClickHandler()');

        setIsHome(false);
        setIsSignUp(true);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signInClickHandler = () => {
        console.log('signInClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(true);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const signOutClickHandler = () => {
        console.log('signOutClickHandler()');

        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);
    }

    const modifyClickHandler = () => {
        console.log('modifyClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(true);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const memoClickHandler = () => {
        console.log('memoClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(true);
        setIsMemoList(false);
    }

    const memoListClickHandler = () => {
        console.log('memoListClickHandler()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(true);
    }


    return(
        <div id="menubar">
            <div className="menus">
                <a href="#none" onClick={homeClickHandler}>home</a>
                {
                    isLogined
                    ?
                    <>
                    <a href="#none" onClick={signOutClickHandler}>sign-out</a>
                    <a href="#none" onClick={modifyClickHandler}>modify</a>
                    </>
                    :
                    <>
                    <a href="#none" onClick={signUpClickHandler}>sign-up</a>
                    <a href="#none" onClick={signInClickHandler}>sign-in</a>
                    </>

                }
                <a href="#none" onClick={memoClickHandler}>memo</a>
                <a href="#none" onClick={memoListClickHandler}>memo-list</a>
            </div>
            {
                isHome
                ?
                <Home />
                :
                null
            }

            {
                isSignUp
                ?
                <SignUp 
                    homeViewer={setIsHome}
                    signUpViewer={setIsSignUp}
                    signInViewer={setIsSignIn}
                    memoViewer={setIsMemo}
                    memoListViewer={setIsMemoList}
                />
                :
                null
            }
            {
                isSignIn
                ?
                <SignIn 
                homeViewer={setIsHome}
                signUpViewer={setIsSignUp}
                signInViewer={setIsSignIn}
                memoViewer={setIsMemo}
                memoListViewer={setIsMemoList}
                changeMenuBar={setIsLogined}/>
                :
                null
            }
            {
                isModify
                ?
                <Modify
                homeViewer={setIsHome}
                signUpViewer={setIsSignUp}
                signInViewer={setIsSignIn}
                modifyViewer={setIsModify}
                memoViewer={setIsMemo}
                memoListViewer={setIsMemoList} 
                />
                :
                null
            }
            {
                isMemo
                ?
                <Memo />
                :
                
                null
            }
            {
                isMemoList
                ?
                <MemoList />
                :
                null
            }
            
            
            
           
        </div>
    );
}

export default Menubar;