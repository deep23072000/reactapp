import { useState } from "react";

const Practice = ()=>{
    const [input,setInput] = useState({
        "name":'',
        "email":''
    });
    const handleInput = (e)=>{
           let {name,value} = e.target;
           setInput({...input,[name]:value});
           console.log(input);
    }

    return(
        <>
           <input type="text" name="name" value={input.name} onChange={handleInput}/><br></br>
           <input type="text" name="email" value={input.email} onChange={handleInput}/><br></br>
        </>
    )
}

export default Practice;