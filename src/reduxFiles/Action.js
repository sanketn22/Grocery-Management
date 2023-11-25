import { ADD_TO_LIST, REMOVE_FROM_LIST, LIST_COMPLETED } from "./Constants"

export function add_to_list(product){
    return {
        type: ADD_TO_LIST,
        data:product
    }
}

export function remove_from_list(product){
    return {
        type: REMOVE_FROM_LIST,
        data:product
    }
}

export function list_completed(product){
    return {
        type: LIST_COMPLETED,
        data:product
    }
}