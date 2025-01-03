import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/thumbnails/Sahitya.webp";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="lg:max-w-[1100px] mx-auto p-4  bg-white">
      <Helmet>
        <title>About | Vikas Kumar Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Vikas Kumar."
        />
      </Helmet>

      <div className="flex flex-col md:flex-row gap-6  mb-8">
        <div className="md:w-1/3 w-full object-cover">
          <img
            src={image1}
            alt="Vikas Kumar"
            className="rounded-sm object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">Vikas Kumar</h1>
          <p className="text-gray-600 mb-4">Industrial Designer, Based out of Delhi, India</p>
          <p className="mb-4">
          My passion for industrial design began with a deep curiosity about how products are made. With a strong background in tooling and engineering, I gained hands-on experience in processes like molding, press tools, CNC, EDM, laser cutting, and 3D printing. During my internship at Objectify Technologies as a Quality Assurance Engineer, I further expanded my understanding of advanced manufacturing.
          </p>
          <p className="mb-4">
          Driven by a desire to create and improve products, I transitioned into industrial design, where I combine my technical expertise with creative problem-solving. I am currently pursuing a Bachelor's degree in Industrial Design at Delhi Technological University.
          </p>
          <p className="mb-4">
          I have had the opportunity to work on projects like smart power management systems at Ezinore Pvt. Ltd. and surgical tool management devices and negative pressure wound therapy systems at Enochi Care Pvt. Ltd. I also explored craftsmanship through a bamboo handicrafts workshop, where I gained practical skills working with bamboo and wood.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>

          <div className="mb-4">
            <h3 className="font-semibold">Product Design Intern-2024</h3>
            <p className="text-gray-600"><Link to="https://www.inochihealthcare.com/" target='_blank' className='hover:underline text-gray-700'>Inochi Care</Link></p>
            <p>
            Designed new wound dressing solution and medical tube connectors.
            </p>
            <p>Collaborated on a tool management device for OTs to be used during surgeries.</p>
            <p>Conducted successful prototyping and testing.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Product Design Intern-2024</h3>
            <p className="text-gray-600"><Link to="https://www.ezinore.com/" target='_blank' className='hover:underline text-gray-700'>Ezinore</Link></p>
            <p>
              Designed cooling tubes for Sparko’s battery pack.
              Worked on whole product development process with engineering team.
              Conducted prototyping and testing for the battery pack design.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quality Engineer Trainee</h3>
            <p className="text-gray-600"><Link to="https://objectify.co.in/" target='_blank' className='hover:underline text-gray-700'>Objectify Technologies- Metal Additve Manufacturing</Link></p>
            <p>
              Inspection of machined parts with CMM Machine and manual instruments.
              Technical Planning for Manufacturing in order to get the quality products.
              Communicating with Clients about their designs.
              Managing all reports and documents for audits.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            {/* <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://advdes.org/pro" target='_blank' className='hover:underline text-gray-700'>Offsite Pro</Link></h3>
              <p className="text-gray-600">Advanced Design</p>
              <p>
                Offsite Pro is an online program disrupting industrial design
                education and offers a real world view of the design profession
                through the instruction of industry leaders from around the world.
              </p>
            </div> */}
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
              <h3 className="font-semibold">Medallion for Excellence in Nationals India - Worldskills </h3>
              <p className="text-gray-600">Mechanical Engineering CAD National IndiaSkills Competition</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">State Gold Medalist in State Competition - Worldskills</h3>
              <p className="text-gray-600">Mechanical Engineering CAD Delhi State Competition</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Competitor in The International Hi-Tech Competition 2023 Finals</h3>
              <p className="text-gray-600">Mechanical Engineering CAD Ekaterinburg, Russian Federation </p>
            </div>
          </div>
          
        </div>
        
        <div className="flex justify-between flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-YCHJVQ63UD" target='_blank' className='hover:underline text-gray-700'>Certified Solidworks Associate</Link></h3>
              <p className="text-gray-600">Mechanical Design (CSWA) </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-YCHJVQ63UD" target='_blank' className='hover:underline text-gray-700'>Bamboo handicraft training</Link></h3>
              <p className="text-gray-600">By Master Craftsman Vivekananda Bagchi -National Awardee</p>
            </div>
          </div>

          {/* <div>
            <h2 className="text-xl font-semibold mb-4">Publications</h2>
            <div className="mb-4">
              <h3 className="font-semibold"><Link to="https://www.yankodesign.com/2024/10/05/glue-gun-concept-gives-the-crafting-tool-a-modern-and-ergonomic-makeover/" target='_blank' className='hover:underline text-gray-700'>Modern and Ergonomic Glue Gun Concept</Link></h3>
              <p className="text-gray-600">Yanko Design</p>
            </div>
          </div> */}

          <div className="md:mt-2 mt-10">
          <span className="text-gray-600 mt-10">
            Email-{" "}
            <Link
              to="mailto:vk497030@gmail.com"
              className="hover:underline"
            >
              {" "}
              vk497030@gmail.com
            </Link>
          </span>
          <p className="text-gray-600"> <span>Phone-</span> +91-9871819048</p>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default About;
