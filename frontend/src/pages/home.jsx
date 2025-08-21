
//middleware topic
const Home=()=>{
    const handleSubmit=async()=>{
        let api="http://localhost:8000/home"
        const responce =await axios.get(api);
        console.log(responce);
 };

 const handleSubmit1=async()=>{
        let api="http://localhost:8000/about"
        const responce =await axios.get(api);
        console.log(responce);
 };

 const handleSubmit2=async()=>{
        let api="http://localhost:8000/contact"
        const responce =await axios.get(api);
        console.log(responce);
 };


 
    return(
        <>
        
        <button onChange={handleSubmit}>home page</button>
        <button onChange={handleSubmit1}>about page</button>
        <button onChange={handleSubmit2}>contact page</button>

        </>
    )
}
export default Home;
