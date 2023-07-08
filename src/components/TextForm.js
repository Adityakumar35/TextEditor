import React, {useState} from 'react'
// import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopy = ()=>{
        console.log("Copy was clicked" + text);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleClearChange = ()=>{
        console.log("Clear text was clicked" + text);
        let newText = '';
        setText(newText);
    }
    const handleReplaceChange = ()=>{
        console.log("replace tetx");
        let existing_text  = prompt("Enter word to replace:");
        let new_text  = prompt("Enter new text:");
        setText(text.replaceAll(existing_text,new_text));
    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toogle');
        if(toogle.textContent == "Speak"){
            toogle.innerHTML = "stop";
        }else{
            toogle.innerHTML = "Speak";
            if(toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel();
            }
        }
    }

    const [text, setText] = useState('Enter the text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#06093b'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#06093b'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleReplaceChange}>Replace text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearChange}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" id='toogle' onClick={speak}>speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#06093b'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length-1} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
