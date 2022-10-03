import React from "react";

const Signup = () => {
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
                  <h2>Sign up your account</h2>
                </div>
                <div>
                  <div>
                    <label htmlFor="email">Full name</label>
                    <input
                      type="text"
                      className="bg-sky-100 px-4 py-2 rounded "
                      name="name"
                      placeholder="Enter you full name"
                      id="name"
                    />
                  </div>
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
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
