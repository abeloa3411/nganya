import React from "react";

const Signup = () => {
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
                    <h2 className="text-2xl">Sign up your account</h2>
                  </div>
                  <div>
                    <div className="mb-4">
                      <label htmlFor="email">Full name</label>
                      <input
                        type="text"
                        className="bg-sky-100 px-4 py-2 rounded "
                        name="name"
                        placeholder="Enter you full name"
                        id="name"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="bg-sky-100 px-4 py-2 rounded "
                        name="email"
                        placeholder="Enter email"
                        id="email"
                      />
                    </div>
                    <div className="mb-4">
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
                  <div className="pt-4">
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
        </div>
      </section>
    </>
  );
};

export default Signup;
