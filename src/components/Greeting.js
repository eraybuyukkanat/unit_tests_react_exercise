import { useState } from "react";
import Output from "./Output";

const Greeting = ()=>{

    const [changedText,setChangedText] = useState(false);

    const changeTextHandler = ()=>{
        setChangedText(true)
    }


    return <div>
        <h2>Hi</h2>
        {!changedText && <Output>It's good to see you</Output>}
        {changedText && <Output>Changed!!</Output>}

        <button onClick={changeTextHandler}>Submit</button>

    </div>
}

export default Greeting;