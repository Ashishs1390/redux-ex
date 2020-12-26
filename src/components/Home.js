import React from 'react';
import InputCommands from './InputCommand'
import InputDisplay from './InputDisplay'



function Home(){
    return (
        <div>
            <h3>Home</h3>
            <InputCommands></InputCommands>
            <InputDisplay name = 'Ashish'></InputDisplay>
        </div>
    )
}

export default Home;