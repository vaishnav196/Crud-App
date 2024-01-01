import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import FormTable from "./component/FormTable";
axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  const [addsec, setaddsec] = useState(false);
  const [datalist, setdatalist] = useState([]);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleonchange = (e) => {
    const { value, name } = e.target;
    setformdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formdata);

    getfetchdata();
    if (data.data.success) {
      setaddsec(false);
      alert(data.data.message);
      console.log(data.data.data);
    }
  };

  const handledelete = async (id) => {
    const data = await axios.delete(`/delete/${id}`);
    alert(data.data.message);
    getfetchdata();
  };

  const handleupdate = async (id) => {
    const data = await axios.put(`/delete/${id}`);
    alert(data.data.message);
    getfetchdata();
  };

  const getfetchdata = async () => {
    const data = await axios.get("/userdetails");
    setdatalist(data.data.data);
  };

  useEffect(() => {
    getfetchdata();
  }, []);

  return (
    <div className="App">
      <div className="container ">
        <button
          className="btn btn-primary mt-5 ms-auto"
          onClick={() => setaddsec(true)}
        >
          +Add
        </button>
        <h1 className="text-center">Crud Operation Form</h1>
        {addsec && (<FormTable handlesubmit={handlesubmit} handleonchange={handleonchange}handleclose={()=> setaddsec(false)}/>
          // <div className=" d-block  m-auto w-75">
          //   <div className="row w-75 px-2 py-3 bg-pink d-block m-auto  mt-5">
          //     <form onSubmit={handlesubmit}>
          //       <button
          //         className="btn btn-outline-dark d-block  ms-auto"
          //         onClick={() => {
          //           setaddsec(false);
          //         }}
          //       >
          //         X
          //       </button>
          //       <div class="form-group  ">
          //         <label htmlFor="name">Name:</label>
          //         <input
          //           type="text"
          //           className="form-control"
          //           id="name"
          //           placeholder="Enter your name"
          //           name="name"
          //           onChange={handleonchange}
          //         />
          //       </div>
          //       <div class="form-group">
          //         <label htmlFor="email">Email:</label>
          //         <input
          //           type="email"
          //           className="form-control"
          //           id="email"
          //           placeholder="Enter your email"
          //           name="email"
          //           onChange={handleonchange}
          //         />
          //       </div>
          //       <div class="form-group">
          //         <label htmlFor="mobile " className="mt-2">
          //           Mobile Number:
          //         </label>
          //         <input
          //           type="tel"
          //           className="form-control mt-1"
          //           id="mobile"
          //           name="mobile"
          //           placeholder="Enter your mobile number"
          //           onChange={handleonchange}
          //         />
          //       </div>

          //       <button
          //         type="submit"
          //         className="btn btn-primary mt-4"
          //         onClick={handlesubmit}
          //       >
          //         Submit
          //       </button>
          //       <button type="button" className="btn btn-success  mt-4 ms-2">
          //         Update
          //       </button>
          //     </form>
          //   </div>
          // </div>
        )}

        <table className="table table-striped table-light  ">
          <thead>
            <tr className="">
              <th>Name</th>
              <th>Email</th>
              <th>mobile</th>
              <th>changes</th>
            </tr>
          </thead>
          <tbody>
            { datalist[0] ? (datalist.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button className="btn btn-primary mx-2">edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handledelete(item._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            }))
            :(<h4 className="text-center ">No data to show</h4>)
          
          
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
