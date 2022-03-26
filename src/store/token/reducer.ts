import { Action } from "redux";
import { SET_CURRENT_USER } from "./actionTypes";

interface User {
    name:string;
    id:number | null;
    email:string;
    accessLevel: number | null
}

const INITIAL_STATE = {
    user:{name:'',
    id:null,
    email:'',
    accessLevel:null}
}

const user = (state = INITIAL_STATE, action: any) =>{
    switch (action.type){
        case SET_CURRENT_USER: {
            console.log(action)
            const user = action.payload
            return {
                ...state,
                user
            }
        }
        default: return{...state}
    }
}
export default user