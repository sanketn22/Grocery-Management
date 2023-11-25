import { ADD_TO_LIST, REMOVE_FROM_LIST } from "./Constants";

const defaultValue = [];
const Completed =[];

export const reducer = (state=defaultValue,action)=>{
    switch(action.type){
        case ADD_TO_LIST:
            return[
                ...state,
                action.data
            ];
           

        case REMOVE_FROM_LIST:
            let result = state.filter((item)=>{
                return item.id != action.data
            })
            return [
                ...result
            ]

            default:
                return state
    }
   
}