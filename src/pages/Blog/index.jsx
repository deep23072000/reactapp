import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "../Error/error";


const Blog = ()=>{
    let [err,setErr]= useState(null)
    let [store,setStore] = useState(null)
    useEffect(()=>{
        
           const datafetch= async()=>{
            try{
            let data = await axios.get('https://jsonplaceholder.typicode.com/pos');
            let response = await data.data;
            setStore(response)
            }
            catch(error){
                // console.log(error)
                setErr(<Error/>)
    
            }
           }
           datafetch()
        
    },[])

    console.log(store);
    return(
        <> 
        {err}
            
        </>
    )
}

export default Blog;