import { all } from "redux-saga/effects";

import MaincategorySagas from "../MaincategorySagas";

export default function* RootSaga(){
    console.log("🔥 RootSaga started")
    yield all([
        MaincategorySagas()
    ])
}