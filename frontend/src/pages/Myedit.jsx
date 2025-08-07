import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackendURL from "../utils/BackendUrl";
const Myedit=()=>{
    const {id}=useParams();
    const [mydata,setMydata]=useState({});

    const loadData=async()=>{
         let api = `${BackendURL}students/datashow/?id=${id}`;
         let response=await axios.get(api);
         setMydata(response.data);
    }

    useEffect(() => {
    loadData();
  }, []);

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}));
    console.log(mydata);
    
  }
  const handleSubmit=async()=>{
   let api = `${BackendURL}students/editSave/?id=${id}`;
    const response = await axios.post(api,mydata);
    setMydata(response.data);
  };




    return(
        <>
        <h1>My Edit: {id}</h1>
        Edit-rollno<input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/><br />
        Edit-name <input type="text" name="name" value={mydata.name} onChange={handleInput}/><br />
        Edit-city<input type="text" name="city" value={mydata.city} onChange={handleInput}/><br />
        Edit-fees<input type="text" name="fees" value={mydata.fees} onChange={handleInput}/><br />
        <button onClick={handleSubmit}>submit</button>
        </>
    )
}
export default Myedit;