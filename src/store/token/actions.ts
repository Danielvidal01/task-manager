import { SET_CURRENT_USER } from "./actionTypes";

export function login(payload :any){
    return {
        type:SET_CURRENT_USER,
        payload
    }
}