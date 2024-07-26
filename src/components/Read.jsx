import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark,setTableDark]=useState('');

  const getData = (e) => {
    // e.preventDefault();
    axios
      .get("https://66a0a95a7053166bcabc326b.mockapi.io/crudeoperation")
      .then((res) => {
        setData(res.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://66a0a95a7053166bcabc326b.mockapi.io/crudeoperation/${id}`
      )
      .then(() => {
        getData();
        toast.error("Data successfully deleted!", {
          position: "top-right",
          autoClose: 3000, // Set duration to 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error("Error deleting data:", err);
        toast.error("Error deleting data!", {
          position: "top-right",
          autoClose: 3000, // Set duration to 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const notify = () => toast("Wow so easy!");

  const setToLoclStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            onClick={()=>{if(tabledark === 'table-dark') setTableDark("");
              else setTableDark("table-dark");
            }}
          />
        </div>
        <div className="d-flex justify-content-between m-2">
          <h2>Read Operation</h2>
          <Link to="/">
            <button className="btn btn-secondary mx-2"> Create </button>
          </Link>
        </div>
        <table class={`table ${tabledark}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        setToLoclStorage(item.id, item.name, item.email)
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <ToastContainer />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
