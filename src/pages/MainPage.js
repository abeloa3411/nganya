import React from "react";
import { FiPauseCircle } from "react-icons/fi";
import Footer from "../components/Footer";
import { places } from "../data";

const MainPage = () => {
  return (
    <>
      <section className="px-8">
        <div className="pt-24">
          <h2 className="text-2xl">Book affordable vans,Trains and Flights</h2>
        </div>
        <div className=" px-4 py-16 rounded shadow-md">
          <div className="flex">
            <div className="mr-8">
              <input
                type="text"
                placeholder="From"
                className="bg-sky-100 px-4 py-2 rounded "
              />
            </div>
            <div className="mr-8">
              <input
                type="text"
                placeholder="To"
                className="bg-sky-100 px-4 py-2 rounded "
              />
            </div>
            <div className="mr-8">
              <input
                type="text"
                placeholder="calender"
                className="bg-sky-100 px-4 py-2 rounded "
              />
            </div>
            <div className="mr-8">
              <button className="bg-green-100 btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black">
                Add return
              </button>
            </div>
            <div>
              <button className="bg-green-100 btn rounded py-2 px-4 hover:bg-slate-300 ease-in-out text-black">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex py-12 px-8">
          <div className="flex justify-center items-center p-4">
            <div className="pr-4">
              <FiPauseCircle style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "20px" }}>Flexible payments</h2>
              <p>Make flexible payments using mpesa,cards and banks</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="pr-4">
              <FiPauseCircle style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "20px" }}>Great customer expirience</h2>
              <p>Our 24h customer service is there for any of your queries</p>
            </div>
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="pr-4">
              <FiPauseCircle style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "20px" }}>24h services</h2>
              <p>Our cars are fully available all the time for our customers</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-8 py-8">
          <div>
            <h2 className="text-2xl">Top destination</h2>
            <p>These are our top destinations</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gridGap: "20px",
              gridArea: "auto",
              position: "relative",
              zIndex: "-99",
            }}
          >
            {places.map((item) => {
              return (
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={require("../images/mat2.jpg")}
                    style={{
                      height: "100% ",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="vans"
                    className="rounded-xl"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      left: "25px",
                      color: "white",
                    }}
                  >
                    <h1>{item.name}</h1>
                    <p>
                      <strong>Kenya</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div
          className="w-3/4 m-auto px-8 py-12 items-center justify-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridGap: "20px",
          }}
        >
          <div className="mr-4">
            <p>customers</p>
            <h2 className="text-4xl">20K +</h2>
            <p>Total customer using this feature</p>
          </div>
          <div className="mr-4">
            <p>Buses</p>
            <h2 className="text-4xl">20 +</h2>
            <p>Total vans operating</p>
          </div>
          <div className="mr-4">
            <p>Routes</p>
            <h2 className="text-4xl">30 +</h2>
            <p>Routes covered</p>
          </div>
          <div>
            <p>Tickets</p>
            <h2 className="text-4xl">200 +</h2>
            <p>Vans</p>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default MainPage;
