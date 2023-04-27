
import {useEffect, useState} from "react";
import './App.css'

function App() {

  const [wordCount , setWordCount] = useState(0);
  const [text , setText] = useState("");



  function onchange(e) {

setText(e.target.value)


  }

  useEffect(()=>{
    const words = text.split(" ");
    let wordCount = 0;
    words.forEach((word) =>{
      if(word.trim() !== ''){
        wordCount++;
      }
    })
    setWordCount(wordCount);
  }, [text])

  return (
    <>
     <div>
      <h1>Write your words here</h1>

      <textarea  cols="80" rows="10" value={text} onChange={onchange}/>

      <div><h1>Words {wordCount}</h1></div>
     </div>
    </>
  )
}

export default App
