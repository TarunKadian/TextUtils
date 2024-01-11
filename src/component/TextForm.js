import React, {useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpclick = () => {
        // console.log("Uppercase was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowclick = () => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearclick = () => {
      let newText='';
      setText(newText);
      props.showAlert("Text is clear","success");
    }
    const handleCopyclick = () => {
      // var text=document.getElementById("Mybox");
      // text.select();
      // navigator.clipboard.writeText(text.value);
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert("Text is copied","success");
    }
    const handleExtraSpaceclick = () => {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("ExtraSpace is removed","success");
    }
    const handleonchange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          style={{backgroundColor: props.mode==='dark'?'#13466e':'light',color: props.mode==='dark'?'white':'#042743'}}
          id="Mybox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyclick}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceclick}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words</p>
      <p>Length of text {text.length}</p>
      <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the above box to preview it here"}</p>
    </div>
    </>
  );
}
