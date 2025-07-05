import React, {use, useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPERCASE!", "success");
  }

  const handleLowClick = ()=>{
    console.log("Lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    console.log("Lowercase was clicked"+ text);
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopyClick = ()=>{
    console.log("text was copied"+ text);
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied to clipboard", "success");
  }
  
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const[text, setText] = useState('Enter text here');
  // text = "ghj" //wrong
  // setText("fgh"); //correct way
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}} >
      <h2 >{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to clipboard</button>
      
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text</h1>
      <p>{text.trim().split(/\s+/).filter(word => word.length !== 0).length} words and {text.length} characters</p>       
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p> 
    </div>
    </>
  )
}
