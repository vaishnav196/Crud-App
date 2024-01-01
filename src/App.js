
import './App.css';
import React,{useState} from'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import axios from " axios"
function App() {
  const[addsec,setaddsec]=useState(false)
  const [formdata,setformdata]=useState({
    name:"",
    email:"",
    mobile:""     
  })

  const handleonchange=(e)=>{
    const{value,name}=e.target
    setformdata((preve)=>{
      return {...preve ,[name]:value}
      
    })
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)
  }
  return (
    <div className="App">
     <div className="container ">
     <button className="btn btn-primary mt-5 ms-auto" onClick={()=>setaddsec(true)}>+Add</button>
      <h1 className='text-center'>Crud Operation Form</h1>
     {addsec && (
       <div className=" d-block  m-auto  mt-3 w-75">
       <div className="row w-75 px-2 py-3 bg-pink d-block m-auto  mt-5">
 
       
       <form onSubmit={handlesubmit}>
      <button className='btn btn-outline-dark d-block  ms-auto'onClick={()=>{setaddsec(false)}}>X</button>
         <div class="form-group  ">
             <label Htmlfor="name">Name:</label>
             <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" onChange={handleonchange}/>
         </div>
         <div class="form-group">
             <label Htmlfor="email">Email:</label>
             <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" onChange={handleonchange}/>
         </div>
         <div class="form-group">
             <label Htmlfor="mobile " className='mt-2'>Mobile Number:</label>
             <input type="tel" class="form-control mt-1" id="mobile" name="mobile" placeholder="Enter your mobile number" onChange={handleonchange}/>
         </div>
 
         <button type="submit" class="btn btn-primary mt-4" onClick={handlesubmit}>Submit</button>
         <button type="button" class="btn btn-success  mt-4 ms-2">Update</button>
     </form>
      </div>
      </div>
     )} 
     </div>
    </div>
  );
}

export default App;
