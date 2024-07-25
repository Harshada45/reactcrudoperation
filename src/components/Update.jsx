import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://66a0a95a7053166bcabc326b.mockapi.io/crudeoperation`, {
        name: name,
        email: email,
      })
      .then(() => {
        setName("");
        setEmail("");
        navigate("/read");
      })
      // .catch((err) => {
      //   console.error("Error updating data:", err);
      // });
  };

  return (
    <div className="main-form">
      <div className="add-form w-25 mx-auto p-5 mt-5 border border-2 rounded">
        <h2 className="text-center">Update Form</h2>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
