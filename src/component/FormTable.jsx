import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default function FormTable({handlesubmit,handleonchange,handleclose}) {
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
                    onChange={handleonchange}
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
                    onChange={handleonchange}
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
                    onChange={handleonchange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  onClick={handlesubmit}
                >
                  Submit
                </button>
                <button type="button" className="btn btn-success  mt-4 ms-2">
                  Update
                </button>
              </form>
            </div>
          </div>
    </div>
  )
}
