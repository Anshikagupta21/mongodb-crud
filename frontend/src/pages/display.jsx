import { useEffect, useState } from "react";
import "../css/Display.css";
import axios from "axios";
import BackendURL from "../utils/BackendUrl";



const Display = () => {
  const [students, setStudents] = useState([]);
  const loadData = async () => {
    let api = `${BackendURL}students/display`;
    let res = await axios.get(api);
    setStudents(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = students.map((key) => {
    return (
      <tr>
        <td> {key.rollno} </td>
        <td> {key.name} </td>
        <td> {key.city} </td>
        <td> {key.fees} </td>
      </tr>
    );
  });

  return (
    <div className="display-container">
      <h2 className="display-title">Student Records</h2>

      <table className="students-table">
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </div>
  );
};

export default Display;