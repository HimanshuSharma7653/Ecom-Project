import { put, takeEvery } from "redux-saga/effects";
import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Constant"
import {  createRecord, deleteRecord, getRecord, updateRecord } from "./Service/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./Service/index"

function* createSaga(action){
    let response = yield createRecord("settingcategory",action.payload)
    yield put({type: CREATE_SETTING_RED ,payload:response})

    // let response = yield createMultipartRecord("settingcategory",action.payload)
    // yield put({type: CREATE_SETTING_RED, payload: response})
}

function* getSaga(action){
    
    
    let response = yield getRecord("settingcategory")
    console.log("📤 Dispatching to reducer", response)
    
    yield put({type: GET_SETTING_RED,payload:response})

}
function* updateSaga(action){
    yield updateRecord("settingcategory",action.payload)
    yield put({type:UPDATE_SETTING_RED, payload:action.payload})

    // let response = yield updateMultipartRecord("settingcategory",action.payload)
    // yield put({type: UPDATE_SETTING_RED, payload: response})
}

function* deleteSaga(action){
    yield deleteRecord("settingcategory",action.payload)
    yield put({type: DELETE_SETTING_RED ,payload: action.payload})
}

export default function* SettingSagas(){
    
    yield takeEvery(CREATE_SETTING, createSaga)
    yield takeEvery(GET_SETTING, getSaga)
    yield takeEvery(UPDATE_SETTING, updateSaga)
    yield takeEvery(DELETE_SETTING, deleteSaga)
} 