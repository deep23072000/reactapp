
const Community = ()=>{

    let s = [{
        "name":"deepak",
        "clas":"10",
        "id":1
    },{
        "name":"deepak",
        "clas":"10",
        "id":2
    }]

    let a1=[2,3,4]

    a1.forEach((s)=>{return console.log(s*2)});
    
    
    return(
        <>
        {s.map(e=>
           <div key={e.id}>
             <div>{e.name}</div>
             <div>{e.clas}</div>
           </div> 
        ) }
   vs
        {s.map((e)=>{
            return <div key={e.id}>
                 <div>{e.name}</div>
                 <div>{e.clas}</div>
            </div>})}
            
        </>
    )
}
export default Community;