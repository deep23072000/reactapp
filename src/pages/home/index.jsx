import '../../assets/style/index.css'
const Home = ()=>{
    let st1 = {
        color:"white",
        fontSize:"100px"
    }

    let st2 = {
        fontSize:"50px",
        color:"white"
    }

    let bt1 = {
        color:"black",
        fontSize:"24px",
        padding:"20px",
        margin:"20px",
        borderRadius:"20px",
        backgroundColor:"cyan"
    }
    return(
        <>
        <section id="home">
            <center>
             <div>
                <img src="https://banner2.cleanpng.com/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg" alt="...." />
             </div>
             <div style={st1}>React</div>
             <div style={st2}>The library for web and native user interfaces</div>
             <div>
                <button style={bt1}>React</button>
                <button style={bt1}> Reference </button>
             </div>
             </center>
        </section> 
        </>
    )
}
export default Home;