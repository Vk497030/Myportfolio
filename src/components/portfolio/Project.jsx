import React, { useEffect, useState } from "react";
import { projects } from "@/constants/projects";
import { Card, CardContent } from "../ui/card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [zoomed, setZoomed] = useState(false); // State for zoom feature

  const filteredProject = projects.find((project) => project?.title === title);
  if (!filteredProject) return null;

  const {
    id,
    duration,
    title: projectTitle,
    subtitle,
    images,
    date,
    creator,
    cocreator,
    link
  } = filteredProject;

  useEffect(() => {
    setIsPageLoaded(true);

    // Disable right-click for the whole page
    const handleRightClick = (event) => {
      event.preventDefault();
    };
    window.addEventListener("contextmenu", handleRightClick);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextProject = (title) => {
    navigate(`/project/${title}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  const openFullImagePreview = (src, index) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const closeFullImagePreview = () => {
    setSelectedImage(null);
    setCurrentImageIndex(null);
    setZoomed(false); // Reset zoom state when closing the preview
  };

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].src);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className={`relative transition-opacity duration-700 ${isPageLoaded ? "opacity-100" : "opacity-0"}`}> 
      <Helmet>
        <title>{projectTitle} | Work</title>
        <meta name="description" content="Welcome to the portfolio of Vikas Kumar." />
      </Helmet>

      <div className="w-full mx-auto lg:px-24 mb-2">
        {images[0]?.type === "image" && (
          <img className="mx-auto lg:w-[95vw]" src={images[0].src} alt="cover" />
        )}
      </div>

      <Card className="lg:w-[73.5vw] border-none w-[95vw] shadow-none mx-auto h-[40vh]">
        <CardContent className="md:p-8 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:justify-between gap-5 md:items-center h-full">
            <div className="md:space-y-6 space-y-1 flex flex-col justify-center">
              <h1 className="md:text-6xl text-5xl font-normal tracking-tighter">{projectTitle}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">{subtitle}</p>
            </div>
            <div className="md:text-right">
              <p className="text-xl font-semibold">{date}</p>
              <p className="text-muted-foreground text-sm">{duration}</p>
              <p className="text-muted-foreground text-sm">{creator}</p>
              <p className="text-muted-foreground text-sm">
                <Link target="_blank" to={link || "#"}>{cocreator}</Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col">
        {images.slice(1).map((item, index) => {
          const trueIndex = index + 1;
          if (item.type === "image") {
            return (
              <img
                key={trueIndex}
                className={`lg:w-[75vw] mx-auto transition-opacity duration-700 ${loadedImages.includes(trueIndex) ? "opacity-100" : "opacity-0"}`}
                src={item.src}
                alt={`image ${trueIndex}`}
                loading="lazy"
                onLoad={() => handleImageLoad(trueIndex)}
                onClick={() => openFullImagePreview(item.src, trueIndex)}
                draggable="false" // Disable dragging
              />
            );
          }
          if (item.type === "video") {
            return (
              <div key={trueIndex} className="lg:w-[75vw] mx-auto mb-2">
                <video src={item.src} className="w-full md:p-4 p-1 object-cover" autoPlay loop muted />
              </div>
            );
          }
          return null;
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeFullImagePreview}
        >
          <button
            className="absolute top-5 right-5 text-white hover:text-orangeAccent text-4xl font-bold z-50"
            onClick={(e) => {
              e.stopPropagation();
              closeFullImagePreview();
            }}
          >
            &times;
          </button>

          <button
            className="absolute left-5 text-white hover:text-orangeAccent text-5xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousImage();
            }}
          >
            &#8592;
          </button>

          <img
            src={selectedImage}
            alt="Full Preview"
            className={`max-w-[95vw] max-h-[95vh] object-${zoomed ? "cover" : "contain"} cursor-zoom-in`}
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((prev) => !prev);
            }}
          />

          <button
            className="absolute right-5 text-white hover:text-orangeAccent text-5xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              goToNextImage();
            }}
          >
            &#8594;
          </button>
        </div>
      )}

      <div className="flex gap-2 justify-center my-10">
        <button
          disabled={!projects[id]?.title}
          onClick={() => handleNextProject(projects[id]?.title)}
          className="bg-gray-200 rounded-sm px-2"
        >
          Next
        </button>
        <span>| {projects[id]?.title}</span>
      </div>

      {isVisible && (
        <ArrowUp
          onClick={scrollToTop}
          className="bg-black text-white w-8 h-8 rounded-sm fixed bottom-5 right-5 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Project;
