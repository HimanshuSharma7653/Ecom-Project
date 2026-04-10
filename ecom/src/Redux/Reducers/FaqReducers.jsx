import { CREATE_FAQ_RED, DELETE_FAQ_RED, GET_FAQ_RED, UPDATE_FAQ_RED } from "../Constant";

export default function FaqReducers(state = [],action){
    console.log("🟡 Reducer called:", action.type, action.payload)
    switch(action.type){
        case CREATE_FAQ_RED:
            return [...state, action.payload]
        
        case GET_FAQ_RED:
            return action.payload

        case UPDATE_FAQ_RED:
            let index = state.findIndex(x=> x.id===action.payload.id)
            state[index] = {...action.payload}
            return state

        case DELETE_FAQ_RED:
            return state.filter(x=> x.id!== action.payload.id)

        default:
            return state
    }
}