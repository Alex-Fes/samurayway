import {ActionTypes} from "./state";
import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./authReducer";
import {AppThunkType} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState: InitialStateType = {
    initialized: false
};
export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS}) as const;

export const initializeAppTC = (): AppThunkType => {
    return (dispatch: Dispatch) => {
        dispatch(getAuthUserDataTC()).then(()=>{
            dispatch(initializedSuccessAC())
        });
    }
}

//Types
export type InitialStateType = {
    initialized: boolean
};


















