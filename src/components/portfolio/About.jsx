import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/thumbnails/Sahitya.webp";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="lg:max-w-[1100px] mx-auto p-4  bg-white">
      <Helmet>
        <title>About | Sahitya Kashyap Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Sahitya Kashyap."
        />
      </Helmet>

      <div className="flex flex-col md:flex-row gap-6  mb-8">
        <div className="md:w-1/3 w-full object-cover">
          <img
            src={image1}
            alt="Sahitya Kashyap"
            className="rounded-sm object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Sahitya Kashyap</h1>
          <p className="text-gray-600 mb-4">Industrial Designer, Based out of Delhi, India</p>
          <p className="mb-4">
          It all began in 2017 with a 4-year diploma in Tool & Die Making, where I developed a deep appreciation for how products are made. What I didn’t realize at the time was how crucial it is to design those products for the user. A mix of curiosity and some happy coincidences led me to discover Industrial Design.
          </p>
          <p className="mb-4">
          In 2021, I embarked on a new chapter at DTU, where I studied Industrial Design. I’ve continued to embrace my skills in Tool & Die Making while diving deeper into the user-focused side of product development.
          </p>
          <p className="mb-4">
          In 2024, I completed Offsite Pro to refine my workflow and now I’m searching for my next big break—a chance to put my skills to use in the real world. When I’m not designing, you’ll probably find me losing ranking on chess.com or Valorant.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>

          <div className="mb-4">
            <h3 className="font-semibold">Product Design Intern-2023</h3>
            <p className="text-gray-600"><Link to="https://www.webby.toys/collections/games" target='_blank' className='hover:underline text-gray-700'>Webby Toys</Link></p>
            <p>
              Designing of 1 Game Toy and 1 Interactive Board game for age 6+,
              to be sold under Rs.499.
            </p>
            <p>Design for Manufacturing- Injection Molding.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Product Design Intern-2022</h3>
            <p className="text-gray-600"><Link to="https://www.webby.toys/collections/games" target='_blank' className='hover:underline text-gray-700'>Webby Toys</Link></p>
            <p>
              Designing of STEM Based Interactive Game Toy for age 6+, Workflow
              Design for Pine Wood Toy Design, manufacturing, costing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Application Trainee</h3>
            <p className="text-gray-600"><Link to="https://objectify.co.in/" target='_blank' className='hover:underline text-gray-700'>Objectify Technologies- Metal Additve Manufacturing</Link></p>
            <p>
              Redesigning products for additive manufacturing, optimizing
              designs for weight reduction, and creating conformal cooling
              channels.Providing RFQ quotations, communicating with clients on
              design changes, managing technical planning, and overseeing the
              entire manufacturing process from order confirmation to dispatch.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://advdes.org/pro" target='_blank' className='hover:underline text-gray-700'>Offsite Pro</Link></h3>
              <p className="text-gray-600">Advanced Design</p>
              <p>
                Offsite Pro is an online program disrupting industrial design
                education and offers a real world view of the design profession
                through the instruction of industry leaders from around the world.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Bachelors of Design</h3>
              <p className="text-gray-600">Delhi Technological University</p>
              <p>
                4 Year Degree in Bachelor of Design emcompassing the industrial
                design education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Tool & Die Making</h3>
              <p className="text-gray-600">
                Delhi Institute of Tool Engineering
              </p>
              <p>
                4 Year Diploma in Tool & Die Making is a specialisation valued
                in the design and manufacturing of products using tools. The
                program constitutes mass production of various product
                components utilizing the art of designing and manufacturing dies
                and moulds.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Competitor in Indiaskills- National Competition for Worldskills</h3>
              <p className="text-gray-600">Mechanical Engineering CAD National IndiaSkills Competition</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">North India Gold Medalist in Regionals- Competition for Worldskills</h3>
              <p className="text-gray-600">Mechanical Engineering CAD North India Competition </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">State Gold Medalist in State Competition for Worldskills</h3>
              <p className="text-gray-600">Mechanical Engineering CAD Delhi State Competition</p>
            </div>

          </div>
          
        </div>
        
        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-HMES8F2RX9" target='_blank' className='hover:underline text-gray-700'>Certified Solidworks Professional</Link></h3>
              <p className="text-gray-600">Mechanical Design (CSWP) </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Publications</h2>
            <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://www.yankodesign.com/2024/10/05/glue-gun-concept-gives-the-crafting-tool-a-modern-and-ergonomic-makeover/" target='_blank' className='hover:underline text-gray-700'>Modern and Ergonomic Glue Gun Concept</Link></h3>
              <p className="text-gray-600">Yanko Design</p>
            </div>
          </div>

          <div className="md:mt-2 mt-10">
          <span className="text-gray-600 mt-10">
            Email-{" "}
            <Link
              to="mailto:design.er.saahi@gmail.com"
              className="hover:underline"
            >
              {" "}
              design.er.saahi@gmail.com
            </Link>
          </span>
          <p className="text-gray-600"> <span>Phone-</span> +91-8800633820</p>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default About;
