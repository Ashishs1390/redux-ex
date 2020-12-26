import React from 'react';
import {connect} from 'react-redux';

function InputDisplay(props){
    console.log(props.name);
 
        return (
            <div>
                <h3>Input Display</h3>
                <p>{props.sum}</p>
                
            </div>
        )
    
    
}
const mapStateToProps =(state,ownProps) =>{
    console.log("-------ownProps.name--------")
    console.log(ownProps.name)
    console.log(state);
    return {
        sum:state.sum 
    }


}
export default connect(mapStateToProps,null)(InputDisplay);
// export default InputDisplay;