import { useState, useEffect } from "react";
import BackendURL from "../utils/BackendUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    let api = `${BackendURL}students/updateshow`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const myDel = async (id) => {
    let api = `${BackendURL}students/delete/${id}`;
    await axios.delete(api);
    loadData();
  };

  const myEdit = (id) => {
    navigate(`/myedit/${id}`);
  };

  const ans = mydata.map((item) => (
    <tr key={item._id}>
      <td>{item.rollno}</td>
      <td>{item.name}</td>
      <td>{item.city}</td>
      <td>{item.fees}</td>
      <td>
        <button onClick={() => myEdit(item._id)}>Edit</button>
        <button onClick={() => myDel(item._id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <table className="students-table">
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
    </table>
  );
};

export default Update;
