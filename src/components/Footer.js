import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="py-8 px-12 bg-green-100 shadow-lg"
          style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
        >
          <div>
            <h2 className="text-3xl">Nganya</h2>
            <div className="flex pt-4">
              <FaFacebook className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>

          <div style={{ width: "50%" }}>
            <h2 className="text-2xl">Company</h2>
            <div>
              <ul>
                <li>
                  <a href="/">about the company</a>
                </li>
                <li>
                  <a href="/">contact us</a>
                </li>
                <li>
                  <a href="/">terms and conditions</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Top routes</h2>
            <div>
              <ul>
                <li>
                  <a href="/">Nairobi - Mombasa</a>
                </li>
                <li>
                  <a href="/">Nairobi - Elementaita</a>
                </li>
                <li>
                  <a href="/">Nairobi - Nakuru</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Our products</h2>
            <div>
              <ul>
                <li>
                  <a href="/">Box hire</a>
                </li>
                <li>
                  <a href="/">Parcels</a>
                </li>
                <li>
                  <a href="/">Booking Api</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Top destinations</h2>
            <div>
              <ul>
                <li>
                  <a href="/">Elementaita</a>
                </li>
                <li>
                  <a href="/">Ngong Hills</a>
                </li>
                <li>
                  <a href="/">Mombasa</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
