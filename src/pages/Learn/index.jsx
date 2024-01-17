import { useState} from "react";
import React from "react";

let st = "";

const Learn = () =>{
    let [cal,setCal] = useState(0)
    function calculate(arg){
          console.log(arg)
          st = st+arg;
          setCal(st)
    }
    function AC(){
        setCal("")
        st="";
    }
    function del(){
           let len = st.length-1;
           setCal(st.slice(0,len));
           st = st.slice(0,len)
    }
    function ans(){
        setCal(eval(st))
    }
    return(
        <>
        
         <table border={"2px"} cellPadding={"20px"} cellSpacing={"20px"} align="center">
            <tr >
                <td colSpan={"4"}>{cal}</td>
            </tr>
            <tr>
                <td onClick={()=>{calculate("1")}}>1</td>
                <td onClick={()=>{calculate("2")}}>2</td>
                <td onClick={()=>{calculate("3")}}>3</td>
                <td onClick={()=>{calculate("4")}}>4</td>
            </tr>
            <tr>
                <td onClick={()=>{calculate("5")}}>5</td>
                <td onClick={()=>{calculate("6")}}>6</td>
                <td onClick={()=>{calculate("7")}}>7</td>
                <td onClick={()=>{calculate("8")}}>8</td>
            </tr>
            <tr>
                <td onClick={()=>{calculate("9")}}>9</td>
                <td onClick={()=>{calculate("0")}}>0</td>
                <td onClick={()=>{calculate("+")}}>+</td>
                <td onClick={()=>{calculate("-")}}>-</td>
            </tr>
            <tr>
                <td onClick={()=>{calculate("*")}}>*</td>
                <td onClick={()=>{calculate("/")}}>/</td>
                <td onClick={AC}>AC</td>
                <td onClick={del}>del</td>
            </tr>
            <tr>
                <td colSpan={"4"} onClick={ans}> = </td>
            </tr>
         </table>
        </>
    )
}

export default Learn;