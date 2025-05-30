import { Instagram, LinkedinIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// 🎨 Local hover color constant for footer
const HOVER_COLOR = "#E91E63";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 mt-10">
      {/* Inject hover color with a style tag */}
      <style>
        {`
          .footer-hover:hover {
            color: ${HOVER_COLOR} !important;
          }
        `}
      </style>

      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <Link
            to="https://www.linkedin.com/in/vikaskrdesigns/"
            target="_blank"
            className="text-black footer-hover"
          >
            <LinkedinIcon size={26} />
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link
            to="https://www.behance.net/vikaskr"
            target="_blank"
            className="text-black footer-hover"
          >
            <i className="fa-brands text-[25px] mt-[1px] fa-behance"></i>
            <span className="sr-only">Behance</span>
          </Link>

          <Link
            to="https://www.instagram.com/vikas.k.r/"
            target="_blank"
            className="text-black footer-hover"
          >
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>

        <Link
          to="https://drive.google.com/uc?id=1WM6Ukyw1O5I0mmKhAtbRRc-nprTaDWzu&export=download"
          className="mb-6 px-6 py-2 border border-black rounded-full text-black text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
        >
          DOWNLOAD RESUME
        </Link>

        <p className="text-xs text-gray-500">© Vikas Kumar 2025 All Rights Reserved</p>
        <p className="text-xs text-gray-500 mt-1">
          Website Developed by{" "}
          <Link
            to="https://www.linkedin.com/in/daya-sagar-903676179?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bepu1n%2F1zTYqXbC%2BSnGKq6A%3D%3D"
            target="_blank"
            className="hover:underline text-gray-700"
          >
            Daya Sagar
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
