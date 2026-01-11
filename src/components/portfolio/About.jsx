import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/thumbnails/Vikas.webp";
import { Helmet } from "react-helmet-async";
import certificate1 from "../../assets/images/Certificates/Worldskills_India_Finals.webp";
import certificate2 from "../../assets/images/Certificates/Inochi_care.webp";
import certificate3 from "../../assets/images/Certificates/Bamboo handicraft training.webp";
import certificate4 from "../../assets/images/Certificates/CSWA Certificate_C-YCHJVQ63UD.webp";
import certificate5 from "../../assets/images/Certificates/Ezinore.webp";
import certificate6 from "../../assets/images/Certificates/Skills_passport.webp";
import certificate7 from "../../assets/images/Certificates/Worldskills_India.webp";

const certificateImages = [
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
  certificate7,
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setPopupImage(null);
  };

  return (
    <div className="lg:max-w-[1100px] mx-auto p-4 bg-white">
      <Helmet>
        <title>About | Vikas Kumar Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Vikas Kumar." />
      </Helmet>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3 w-full object-cover">
          <img src={image1} alt="Vikas Kumar" className="rounded-sm object-cover" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Vikas Kumar</h1>
          <p className="text-gray-600 mb-4">Industrial Designer, Based out of Delhi, India</p>
          <p className="mb-4">
            My passion for industrial design stems from a curiosity about how products are made. With a background in tooling and engineering, I’ve gained hands-on experience in molding, CNC, EDM, laser cutting, and 3D printing. During my internship at Objectify Technologies as a Quality Assurance Engineer, I deepened my knowledge of advanced manufacturing.
          </p>
          <p className="mb-4">
            Currently pursuing a Bachelor’s in Industrial Design at Delhi Technological University, I merge technical expertise with creative problem-solving. My experience includes projects like smart power management systems (Ezinore Pvt. Ltd.), surgical tool management, and wound therapy devices (Enochi Care Pvt. Ltd.), as well as practical craftsmanship skills from a bamboo handicrafts workshop.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Experience Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>

          <div className="mb-4">
            <h3 className="font-semibold">
              <span
                className="cursor-pointer hover:underline text-gray-700"
                onClick={() => openPopup(certificate2)}
              >
                Product Design Intern-2024 at Inochi Care
              </span>
            </h3>
            <p>Designed new wound dressing solution and medical tube connectors.</p>
            <p>Collaborated on a tool management device for OTs to be used during surgeries.</p>
            <p>Conducted successful prototyping and testing.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">
              <span
                className="cursor-pointer hover:underline text-gray-700"
                onClick={() => openPopup(certificate5)}
              >
                Product Design Intern-2024 at Ezinore
              </span>
            </h3>
            <p>
              Designed cooling tubes for Sparko’s battery pack. Worked on the whole product development process with the engineering team. Conducted prototyping and testing for the battery pack design.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              <span
                className="cursor-pointer hover:underline text-gray-700"
                // onClick={() => openPopup()}
              >
                Quality Engineer Trainee-2021 at Objectify Technologies - Metal Additive Manufacturing
              </span>
            </h3>
            <p>Inspection of machined parts with CMM Machine and manual instruments.</p>
            <p>Technical Planning for Manufacturing to ensure quality products.</p>
            <p>Communicating with clients about their designs.</p>
            <p>Managing all reports and documents for audits.</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>

            <div className="mb-4">
              <h3 className="font-semibold">Offsite Pro 2025</h3>
              <p className="text-gray-600">Advanced Design - Chicago, Illinois</p>
              <p>Offsite Pro is an industrial Design course that offers a real world view of the design profession through the instruction of industry leaders from around the world.</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Bachelors of Design</h3>
              <p className="text-gray-600">Delhi Technological University - New Delhi</p>
              <p>4 Year Degree in Bachelor of Design encompassing the industrial design education.</p>
            </div>


            <div>
              <h3 className="font-semibold">Tool & Die Making</h3>
              <p className="text-gray-600">Delhi Institute of Tool Engineering - New Delhi</p>
              <p>
                4 Year Diploma in Tool & Die Making is a specialization valued in the design and manufacturing of products using tools. The program constitutes mass production of various product components utilizing the art of designing and manufacturing dies and moulds.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="mb-4">
              <h3 className="font-semibold">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => openPopup(certificate1)}
                >
                  Medallion for Excellence in National Competition - Worldskills
                </span>
              </h3>
              <p className="text-gray-600">Mechanical Engineering CAD National IndiaSkills Competition</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => openPopup(certificate7)}
                >
                  State Gold Medalist in State Competition - Worldskills
                </span>
              </h3>
              <p className="text-gray-600">Mechanical Engineering CAD Delhi State Competition</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => openPopup(certificate6)}
                >
                  Competitor in The International Hi-Tech Competition 2023 Finals
                </span>
              </h3>
              <p className="text-gray-600">Mechanical Engineering CAD Ekaterinburg, Russian Federation</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => openPopup(certificate4)}
                >
                  Certified Solidworks Associate
                </span>
              </h3>
              <p className="text-gray-600">Mechanical Design (CSWA)</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => openPopup(certificate3)}
                >
                  Bamboo Handicraft Training
                </span>
              </h3>
              <p className="text-gray-600">By Master Craftsman Vivekananda Bagchi - National Awardee</p>
            </div>
            {/* <div className="mb-4">
              <h3 className="font-semibold text-gray-900">
                <span
                  className="cursor-pointer hover:underline"
                  onClick={() => openPopup(certificate1)}
                >
                  Medallion for Excellence - WorldSkills India Finals
                </span>
              </h3>
              <p className="text-gray-600">Mechanical Engineering CAD National IndiaSkills Competition</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-4 rounded relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-lg text-gray-500"
            >
              &times;
            </button>
            <img
              src={popupImage}
              alt="Popup Image"
              className="popup-image max-w-full max-h-[80vh] object-contain" // This ensures uniform size and scaling
            />
          </div>
        </div>
      )}
    </div>


  );
};

export default About;
