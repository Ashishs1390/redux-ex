import {SUM_ACTION_REQ} from './sumActionTypes';

const initialState = {
    sum:0,
    name:'Asiya',
}


const sumReducer = (state = initialState,action)=>{
    console.log(action.type)
    switch(action.type){

       case SUM_ACTION_REQ:
            return {
                ...state,
                sum:action.payload
            }

        default:
            return state;

    }

}

export default sumReducer;