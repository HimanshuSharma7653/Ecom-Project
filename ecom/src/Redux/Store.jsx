import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Sagas/Service/RootSaga"

import CreateSagaMiddleware from "redux-saga"



const Saga = CreateSagaMiddleware()

const Store = configureStore({reducer: RootReducer, middleware: ()=>[Saga] })
console.log("Store Created")

export default Store

Saga.run(RootSaga)
console.log("🚀 Saga running")
