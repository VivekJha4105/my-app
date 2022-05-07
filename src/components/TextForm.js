import React, { useState } from 'react';                 /// Including the reactHook, for utilizing react States...

export default function TextForm(props) {

    const handleUpperClick = ()=>{
        console.log("Uppercase Button was Clicked.");
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted into uppercase.", "success");
    }

    const handleOnChange = (event)=>{
        console.log("Text was changed.");
        setText(event.target.value);
    }

    const handleLowerClick = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted into lowercase.", "success");
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text has been cleared.", "success");
    }
    
    const handleCopyClick = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,99999999);
        navigator.clipboard.writeText();
        props.showAlert("Text has been Copied.", "success");
    }

    const [text, setText] = useState('');  // Setting up a state...from text to setText...

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black', zIndex: -1}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}} >
            <h3>Your Text Summary</h3>
            <p>You have entered {(text.split(" ").length)-1} words and {(text.length)} characters.</p>
            <p>Time needed to read : {(0.008 * text.split(" ").length)-0.008}</p>
        </div>
        </>
    )
}
