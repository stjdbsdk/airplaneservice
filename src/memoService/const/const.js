export const MEMBER_DB_IN_LOCAL_STORAGE = 'getMemoServiceMemberDB';
export const MEMO_DB_IN_LOCAL_STORAGE = 'getMemoServiceMemoDB';

// FUNCTION
// MEMBER 공통 모듈 어쩌구
export const getMemoServiceMemberDB = () => {
    console.log('getMemoServiceMemberDB()');

    return localStorage.getItem(MEMBER_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceMemberDB = (memDBJsObj) => {
    console.log('setMemoServiceMemberDB()');

    localStorage.setItem(MEMBER_DB_IN_LOCAL_STORAGE, JSON.stringify(memDBJsObj));

}

export const  getMyMemObj = (uId) => {
    console.log('getMyMemObj()');

    let memDBInStorage = getMemoServiceMemberDB();      //String
    let memDBJsObj = JSON.parse(memDBInStorage);        //JS Object (All member)

    return memDBJsObj[uId];



}

// MEMO
export const getMemoServiceMemoDB = () => {
    console.log('getMemoServiceMemoDB()');

    return localStorage.getItem(MEMO_DB_IN_LOCAL_STORAGE);
}

export const setMemoServiceMemoDB = (memoDBJsObj) => {
    console.log('setMemoServiceMemoDB()');

    return localStorage.setItem(MEMO_DB_IN_LOCAL_STORAGE, JSON.stringify(memoDBJsObj));
}