import { CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY_RED } from "../Constant";

export default function BrandReducers(state = [],action){
    console.log("🟡 Reducer called:", action.type, action.payload)
    switch(action.type){
        case CREATE_SUBCATEGORY_RED:
            return [...state, action.payload]
        
        case GET_SUBCATEGORY_RED:
            return action.payload

        case UPDATE_SUBCATEGORY_RED:
            let index = state.findIndex(x=> x.id===action.payload.id)
            state[index] = {...action.payload}
            return state

        case DELETE_SUBCATEGORY_RED:
            return state.filter(x=> x.id!== action.payload.id)

        default:
            return state
    }
}