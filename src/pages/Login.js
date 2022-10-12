import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <div className="pt-12 w-3/4 m-auto">
          <div className="pt-24 w-1/2 m-auto">
            <div className="shadow-lg rounded p-12">
              <div className="my-4">
                <h2 className="text-3xl">Nganya</h2>
              </div>
              <form action="POST">
                <div>
                  <div className="my-4">
                    <h2 className="text-2xl">Login to your account</h2>
                  </div>
                  <div>
                    <div
                      className="mb-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="bg-sky-100 px-4 py-2 rounded my-4"
                        name="email"
                        placeholder="Enter email"
                        id="email"
                      />
                    </div>
                    <div
                      className="mb-4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="bg-sky-100 px-4 py-2 rounded my-4"
                        name="password"
                        placeholder="Enter password"
                        id="password"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-green-100 btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <p>
              Dont have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
