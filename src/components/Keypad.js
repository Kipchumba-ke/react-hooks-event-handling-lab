// Code Keypad Component Here
import React from "react";
function Keypad (){
    const handleinput = (()=>{
        console.log(`Entering password...`);
        
    })
    return (
        <div>
                <input
                type="password"
                onChange={handleinput}
                placeholder="Type password"
                />
        </div>
    )
}

export default Keypad;