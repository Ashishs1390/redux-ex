import React,{useRef,useState} from 'react';
import sum from './../redux/sumActionCreator'
import {connect} from 'react-redux';


function InputCommands(props){
    const inputbox1Ref = useRef(null);
    const inputbox2Ref = useRef(null);

    const handleSubmit = () =>{
        debugger;
        props.sum(parseInt(inputbox1Ref.current.value), parseInt(inputbox2Ref.current.value));
    }

    return (
        <div>
            <h3>InputCommands</h3>
            <div>
                <input type="text" ref={inputbox1Ref} placeholder="inputbox 1"></input>
                <input type="text" ref = {inputbox2Ref} placeholder="inputbox 2"></input>
                <button onClick = {handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        sum:(a,b) => dispatch(sum(a,b))

    }
} 

const mapStateToProps =(state,ownProps) =>{
    console.log("-------InputCommand--------")
    console.log(state);
    return {
        sum:state.sum 
    }


}




export default connect(mapStateToProps,mapDispatchToProps)(InputCommands);
