import { useNavigate } from "react-router-dom";
import React from "react";

function Reference() {
  let changes = useNavigate();

  const run = ()=>{
    changes("/learn");
  }
  return (
    <>
       <center><button onClick={run}> Go to learn page </button></center>
    </>  
  );
}


export default Reference;
