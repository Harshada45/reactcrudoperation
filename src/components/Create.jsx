import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email,setEmail] =useState("");
    const history =useNavigate();

    
    const handleSubmit=()=>{
        setName("");
        setEmail("");

       axios.post("https://66a0a95a7053166bcabc326b.mockapi.io/crudeoperation",{
        name:name,
        email:email,        
       }).then(()=>{
        history("/read");
       })
    }

  return (
    <div className="main-form">
      <div className="add-form w-25 mx-auto p-5 mt-5 border border-2 rounded">
        <h2 className="text-center">Add Form</h2>
        <form >
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
              onChange={(e)=>setName(e.target.value)}
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
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="button" class="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
