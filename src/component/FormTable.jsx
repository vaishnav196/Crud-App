import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default function FormTable({handlesubmit,handleonchange,handleclose,rest}) {
  return (
    <div>
       <div className=" d-block  m-auto w-75">
            <div className="row w-75 px-2 py-3 bg-pink d-block m-auto  mt-5">
              <form onSubmit={handlesubmit}>
                <button
                  className="btn btn-outline-dark d-block  ms-auto"
                  onClick={handleclose}
                >
                  X
                </button>
                <div class="form-group  ">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleonchange} value={rest.name}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleonchange} value={rest.email}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="mobile " className="mt-2">
                    Mobile Number:
                  </label>
                  <input
                    type="tel"
                    className="form-control mt-1"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    onChange={handleonchange} value={rest.mobile}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  onClick={handlesubmit}
                >
                  Submit
                </button>
                
              </form>
            </div>
          </div>
    </div>
  )
}
