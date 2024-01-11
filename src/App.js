import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import FormTable from "./component/FormTable";
axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  const [addsec, setaddsec] = useState(false);

  const [editsec, seteditsec] = useState([]);
  const [datalist, setdatalist] = useState([]);
  // this is form adding form
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    mobile: "",
  });

// this is form update form
  const [formdataedit, setformdataedit] = useState({
    name: "",
    email: "",
    mobile: "",
    _id:""
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


    // update data handle
  const handleupdate = async (e) => {
 e.preventDefault()
 const data = await axios.put("/update",formdataedit);
if(data.data.success){
  getfetchdata()
  alert(data.data.message)
  seteditsec(false)
}
  };
 const handleedit=(item)=>{
setformdataedit(item)
seteditsec(true)
 }

  const handleEditonchange= async(e)=>{
    const { value, name } = e.target;
    setformdataedit((prev) => {
      return { ...prev, [name]: value };
    });
  }

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
        {addsec && (<FormTable handlesubmit={handlesubmit} handleonchange={handleonchange}handleclose={()=> setaddsec(false) } rest={formdata}/>
         
        )}
        {
          editsec &&(<FormTable handlesubmit={handleupdate} handleonchange={handleEditonchange}handleclose={()=> seteditsec(false)} rest={formdataedit}/>

          )
        }

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
                    <button className="btn btn-primary mx-2" onClick={()=>handleedit(item)}>edit</button>
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
            :(<h4 className=" ">No data to show</h4>)
          
          
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
