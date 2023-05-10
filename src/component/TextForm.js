
import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('')
    const uppercaseClick=(event)=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        event.preventDefault();
    }
    const handleChange=(event)=>{
        setText(event.target.value)
        event.preventDefault();
        
       
    } 
    const lowercaseClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext)
     
  }
  const clearClick=()=>{
    let newtext=""
    setText(newtext)
   
}
const copyClick=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
 
}
const handleExtraSpace=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
}
  return (
    <>
    <div className='container'>
        <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
  <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

    <textarea style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className='btn btn-primary' onClick={uppercaseClick}>Convert To Upper Text</button>
  <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={lowercaseClick}>Convert To Lower Text</button>
  <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clearClick}>Clear Text</button>
  <button  disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={copyClick}>Copy Text</button>
  <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
  <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues read</p>
  <h2>preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
