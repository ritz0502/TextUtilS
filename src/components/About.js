import React, { useState } from 'react'

export default function About(props) {

  // const[myStyle, setmyStyle]= useState(
  //   {
  //   color:'black',
  //   backgroundColor: 'white'
  //   }
  // )

  let myStyle = {
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'#042743':'white',
    
  }

  // const[btntext, setbtntext]= useState("Enable Dark mode")
  // const toggleStyle=()=>{
  //   if(myStyle.color==='black'){
  //     setmyStyle({color:'white',backgroundColor:'black'})
  //     setbtntext("Enable Light Mode")
  //   }

  //   else{
  //     setmyStyle({color:'black',backgroundColor:'white'})
  //     setbtntext("Enable Dark Mode")
  //   }
  // }



  

  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h2>About us</h2>
      <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className = "container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">Enable Dark Mode</button>
      </div>     */}
    </div>
  )
}
