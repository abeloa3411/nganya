import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <div className="pt-24">
          <div className="shadow-lg rounded">
            <div>
              <h2>Nganya</h2>
            </div>
            <form action="POST">
              <div>
                <div>
                  <h2>Login to your account</h2>
                </div>
                <div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="bg-sky-100 px-4 py-2 rounded "
                      name="email"
                      placeholder="Enter email"
                      id="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="bg-sky-100 px-4 py-2 rounded "
                      name="password"
                      placeholder="Enter password"
                      id="password"
                    />
                  </div>
                </div>
                <div>
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
      </section>
    </>
  );
};

export default Login;
