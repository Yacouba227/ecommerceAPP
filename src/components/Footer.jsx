import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for a Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email adress...."
                  aria-label="Your email adress...."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-3">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6">
                  Niger 227, Niamey <br />
                  Quartier haro-banda <br />
                  BP 12976
                </address>
                <a href="tel: +227 80577015" className="mt-3 d-block mb-1 text-white"> (+227) 80577015</a>
                <a href="mailto:halidouyacouba999@gmail.com" className="mt-2 d-block mb-0 text-white"> halidouyacouba999@gmail.com </a>
                <div className="social_links d-flex align-items-center gap-30 mt-3">
                  <Link className="text-white">
                    <BsLinkedin className="fs-5 ess"/>
                  </Link>
                  <Link className="text-white">
                    <BsInstagram className="fs-5 ess"/>
                  </Link>
                  <Link className="text-white">
                    <BsGithub className="fs-5 ess"/>
                  </Link>
                  <Link className="text-white">
                    <BsYoutube className="fs-5 ess"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Privacy policy</Link>
                <Link className="text-white py-1 mb-1">Refund policy</Link>
                <Link className="text-white py-1 mb-1">Shipping policy</Link>
                <Link className="text-white py-1 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-1 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">About</Link>
                <Link className="text-white py-1 mb-1">Faq</Link>
                <Link className="text-white py-1 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3">Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-1 mb-1">Laptops</Link>
                <Link className="text-white py-1 mb-1">Hedphones</Link>
                <Link className="text-white py-1 mb-1">Tablete</Link>
                <Link className="text-white py-1 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; powered by Dev GUIK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
