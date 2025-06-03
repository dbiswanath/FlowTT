import React from 'react';
import './Footer2.css'; // Optional: for any extra custom styling
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* About */}
          <div className="col-md-2 col-6">
            <h5>ABOUT</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Contact Us</a></li>
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Careers</a></li>
              <li><a href="#" className="text-light">Flipkart Stories</a></li>
              <li><a href="#" className="text-light">Press</a></li>
              <li><a href="#" className="text-light">Corporate Information</a></li>
            </ul>
          </div>

          {/* Group Companies */}
          <div className="col-md-2 col-6">
            <h5>GROUP COMPANIES</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Myntra</a></li>
              <li><a href="#" className="text-light">Cleartrip</a></li>
              <li><a href="#" className="text-light">Shopsy</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-2 col-6">
            <h5>HELP</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Payment</a></li>
              <li><a href="#" className="text-light">Shipping</a></li>
              <li><a href="#" className="text-light">Cancellation & Returns</a></li>
              <li><a href="#" className="text-light">FAQ</a></li>
              <li><a href="#" className="text-light">Report Infringement</a></li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div className="col-md-2 col-6">
            <h5>CONSUMER POLICY</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Privacy</a></li>
              <li><a href="#" className="text-light">Sitemap</a></li>
              <li><a href="#" className="text-light">Security</a></li>
              <li><a href="#" className="text-light">Cancellation & Returns</a></li>
              <li><a href="#" className="text-light">Terms Of Use</a></li>
              <li><a href="#" className="text-light">EPR Compliance</a></li>
            </ul>
          </div>

          {/* Mail Us */}
          <div className="col-md-2 col-6">
            <h5>MAIL US:</h5>
            <address className="text-light small">
              Flipkart Internet Private Limited<br />
              Building Alyssa, Begonia & Clove Embassy Tech Village<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103<br />
              Karnataka, India
            </address>
            <h6 className="mt-3">Social:</h6>
            <div className="d-flex gap-3">
              <a href="#"><FaFacebook className="text-light" /></a>
              <a href="#"><FaTwitter className="text-light" /></a>
              <a href="#"><FaYoutube className="text-light" /></a>
            </div>
          </div>

          {/* Registered Office */}
          <div className="col-md-2 col-12">
            <h5>REGISTERED OFFICE ADDRESS:</h5>
            <address className="text-light small">
              Flipkart Internet Private Limited<br />
              Building Alyssa, Begonia & Clove Embassy Tech Village<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103<br />
              Karnataka, India<br />
              CIN: U51109KA2012PTC066107<br />
              Telephone: 044-45614700 / 044-67415800
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
