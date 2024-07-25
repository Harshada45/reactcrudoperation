import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const getData = () => {
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
      });
  };

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
        <h2>Read Operation</h2>
        <table class="table">
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
