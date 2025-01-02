import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/constants/projects";
import { Card, CardContent } from "../ui/card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowUp, Upload } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); // For page load animation
  const [loadedImages, setLoadedImages] = useState([]); // For image load animations



  const filteredProject = projects.find((project) => project?.title === title);
  const {
    id,
    duration,
    title: projectTitle,
    subtitle,
    images,
    date,
    video,
    creator,
    cocreator,
    link
  } = filteredProject;



  useEffect(() => {
    setIsPageLoaded(true); // Trigger animation once the component is mounted
  }, []);

  const handleNextProject = (title) => {
    navigate(`/project/${title}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]); // Mark image as loaded
  };



  return (
    filteredProject && (
      <div className={`relative transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Helmet>
        <title>{projectTitle} | Work</title>
        <meta name="description" content="Welcome to the portfolio of Sahitya Kashyap." />
      </Helmet>
      <div className="w-full mx-auto lg:px-24 mb-2">
        <img className="mx-auto lg:w-[95vw]" src={images?.[0]} alt="img" />
      </div>
   
        <Card className="lg:w-[73.5vw] border-none w-[95vw] shadow-none mx-auto h-[40vh]">
          <CardContent className="md:p-8 h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-0 gap-5 justify-center md:items-center h-full">
              <div className="md:space-y-6 space-y-1 flex flex-col justify-center">
                <h1 className="md:text-6xl text-5xl font-normal tracking-tighter">
                  {projectTitle}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                  {subtitle}
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-xl font-semibold">{date}</p>
                <p className="text-muted-foreground text-sm">{duration}</p>
                <p className=" text-muted-foreground text-sm">{creator}</p>
                <p className=" text-muted-foreground text-sm"><Link target="_blank" to={link &&  `${link}`}>{cocreator}</Link></p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* images container */}
        <div className="space-y-2">
          {(images.slice(1)).map((image, index) => (
             <img
             key={index}
             className={`lg:w-[75vw] mx-auto transition-opacity duration-700 ${
               loadedImages.includes(index) ? 'opacity-100' : 'opacity-0'
             }`}
             src={image}
             alt={`image + ${index}`}
             loading="lazy"
             onLoad={() => handleImageLoad(index)} // Animate on image load
           />
          ))}
        </div>
        <div className="lg:w-[75vw] mx-auto mb-2">
        {
          video && <video  src={video} className="w-full md:p-4 p-1 object-cover" autoPlay loop muted />
        }
      </div>
        <div  className="flex gap-2  justify-center my-10">
          <button disabled={!projects[id]?.title} onClick={() => handleNextProject(projects[id]?.title)}  className="bg-gray-200 rounded-sm  px-2">Next</button>
          { <span> | {projects[id]?.title}</span>}
        </div>
        {isVisible && (
        <ArrowUp
          onClick={scrollToTop}
          className="bg-black text-white w-8 h-8 rounded-sm fixed bottom-5 right-5 cursor-pointer"
        />
      )}
      </div>
    )
  );
};

export default Project;
