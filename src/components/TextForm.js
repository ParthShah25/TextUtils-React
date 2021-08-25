import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //All the character converted to Upper case
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
    }
    
    //All the character converted to lower case
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
    }
    
    // Capitalize the first letter of each word in a string
    const handleTitleClick = () => {
        let arr = text.split(" ")
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
        let newText = arr.join(" ") 
        setText(newText)
    }
    
    // Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    // Copy the whole paragraph
    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }
    
    // Clear the container
    const handleClearClick = () => {
        let newText = " "
        setText(newText);
    }

    const [text, setText] = useState("")

    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3" id="myBox">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'grey'}} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary">Converts to Upper Case
            </button> 
            <button type="button" onClick={handleLowClick} className="btn btn-primary mx-1">Converts to Lower Case</button>
            <button type="button" onClick={handleTitleClick} className="btn btn-primary mx-1">Title case</button>
            <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Spaces</button>
            {/* <button type="button" onClick={handleCopy} className="btn btn-primary mx-1">Copy Your Text</button> */}
            <button type="button" onClick={handleClearClick} className="btn btn-primary mx-1">Clear Your Text</button>
        </div>
        <div className="container my-4" style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary is: </h2>
            <p>Words: {text.split(" ").length} and Characters: {text.length}</p>
            <p>You can read this Paragraph by: {0.008 * text.split(" ").length} WPM</p>
            <h2>Preview: </h2>
            <p>{text.length>0?text:"Enter any Words in above Textarea to Preview it"}</p>
        </div>
        </>
    )
}
