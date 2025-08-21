import { useState } from "react";
import axios from "axios";
import BackendURL from "../utils/BackendUrl";


const Search = () => {
  const [rno, setRollno] = useState();
  const [myData, setMyData] = useState([]);

  const searchData = async () => {
    let api = `${BackendURL}students/search`;
    let res = await axios.post(api, { rollno: rno });
    setMyData(res.data);
  };

  return (
    <>
      <div className="search-container">
        <label htmlFor="rollno" className="search-label">Enter Roll No:</label>
        <input
          type="text"
          value={rno}
          name="rollno"
          id="rollno"
          onChange={(e) => {
            setRollno(e.target.value);
          }}
          className="search-input"
        />
        <button onClick={searchData} className="search-button">Search</button>
      </div>

      <div className="table-container">
        <table className="search-table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((key) => {
              return (
                <>
                <tr>
                  <td>{key.rollno}</td>
                  <td>{key.name}</td>
                  <td>{key.city}</td>
                  <td>{key.fees}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Search;



