import {SUM_ACTION_REQ} from './sumActionTypes';


 function sum(a,b){
    console.log(a);
    console.log(b);
    debugger;

    let addition = a+b;
    return((dispatch) =>{

        setTimeout(()=>{
            dispatch({
                type : SUM_ACTION_REQ,
                payload: addition
            })
        },2000)
      
    })
   

}

export default sum;

