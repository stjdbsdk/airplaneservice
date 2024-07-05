import React, { useEffect, useState } from "react";
import { getProdFlag } from "./utils";
import { getLoginedSessionID } from "./session";
import ReservationModify from "./ReservationModify.jsx";



const ReservationList = () => {

    //hook

    const [myReservationArr, setMyReservationArr] = useState([]);
    const[keyToBeModified, setKeyToBeModified] = useState('');
    const [showReservationModifyModal, setShowReservationModifyModal] = useState(false);
    const[tempFlag, setTempFlag] = useState(false);


    useEffect(() => {
        if (!getProdFlag()) console.log('useEffect()');

        let reservationDBInStorage = localStorage('reservationDB');
        let reservationDBObj = JSON.parse(reservationDBInStorage);
        let myReservations = reservationDBObj[getLoginedSessionID()];

        let myReservationsKeys = Object.keys(myReservations);

        let tempArr = [];
        for (let i = 0; i < myReservationsKeys.length; i++) {
            let myReservation = myReservation[myReservationsKeys[i]];
            myReservation['key'] = myReservationsKeys[i];
            tempArr.push(myReservation);
        }

        setMyReservationArr(tempArr);
        

    }); [tempFlag, showReservationModifyModal]


    //handler
    const modifyBtnClickHandler = (e, key) => {
        if (!getProdFlag()) console.log ('modifyBtnClickHander()');
    
        setKeyToBeModified(key);
        setShowReservationModifyModal(true);
    
    }

    const deleteBtnClickHandler = (e, key) => {
        if (!getProdFlag()) console.log ('deleteBtnClickHandler()');
        
        let result = window.confirm('Really?'); //true or false
        if (result) {
            let reservationDBInStorage = localStorage('reservationDB');
            let reservationDBObj = JSON.parse(reservationDBInStorage);
            let myReservations = reservationDBObj[getLoginedSessionID()];

            delete myReservations[key];

            reservationDBObj[getLoginedSessionID()] = myReservations;
            reservationDBInStorage = JSON.stringify(reservationDBObj);
            localStorage.setItem('reservationDB', reservationDBInStorage);

            alert('Deleted');

            setTempFlag(v => !v);

        }else {
            alert('Delete canceled');


        }
    
    }

    //css
    const style_div = {
        width: "1700px",
        margin: "0 auto",
    }

    const style_li = {
        padding: "4px",
        margin: "5px",
        borderBottom: "1px solid #dadada",
        listStyle: "none",
    }

    const style_modal_bg = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0', top: '0',
        backgroundColor: 'rgba(0, 0, 0, .5)',
    }

    return(
        <div style={style_div}>
            <ul>
                {
                    myReservationArr.map((myReservation, idx) => 
                <li key={idx} style={style_li}>
                    예약번호: {myReservation.key} |
                    예약자: {myReservation.rName} |
                    메일:   {myReservation.rMail} |
                    연락처: {myReservation.rPhone} |
                    <br />
                    출발지: {myReservation.rSP} |
                    출발지시간:{myReservation.rSPT} |
                    도착지:{myReservation.rEP} |
                    도착지시간:{myReservation.rEPT} |
                    성인:{myReservation.rAdultCnt} |
                    어린이:{myReservation.rChildCnt} |
                    유아:{myReservation.rInfantCnt}
                    &nbsp;&nbsp;
                    <button onClick={(e) => modifyBtnClickHandler(e, myReservation.key)}>MOD</button> 
                    <button onClick={(e) => deleteBtnClickHandler(e, myReservation.key)}>DEL</button> 
                </li>
                )
            }
                
        </ul>

            {
                showReservationModifyModal
                ?
                <div className="modalBg" style={style_modal_bg}>
                    <div className="modal">
                        <ReservationModify keyToBeModified={keyToBeModified} />
                    </div>
                    <br/><br/>
                    <button onClick={() => {
                        if (!getProdFlag()) console.log('MODIFY MODAL CLOSE');
                        setKeyToBeModified('');
                        setShowReservationModifyModal(false);
                    
                    }}>CLOSE</button>
                </div>
                :
                null
            }
        <div className="modalBg" style={style_modal_bg}>
            <div className="modal">
                <ReservationModify keyToBeModified={keyToBeModified} setShowReservationModifyModal={setShowReservationModifyModal} />
            </div>
        </div>

    </div>
    );
}

export default ReservationList;