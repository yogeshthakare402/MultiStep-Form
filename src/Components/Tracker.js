import React from 'react';

function Tracker() {
    let url = window.location.href.split("/")[3]
    
    return (
        <div className='tracker'>
            <hr/>
            <div className='num num1' id='num1' style={url=== 'one'?{backgroundColor: "aqua"}:{backgroundColor: "white"}}>1</div>
            <div className='num num2' id='num2' style={url=== 'two'?{backgroundColor: "aqua"}:{backgroundColor: "white"}}>2</div>
            <div className='num num3' id='num3' style={url=== 'three'?{backgroundColor: "aqua"}:{backgroundColor: "white"}}>3</div>
            <div className='num num4' id='num4' style={url=== 'four'?{backgroundColor: "aqua"}:{backgroundColor: "white"}}>4</div>
        </div>
    )
}

export default Tracker