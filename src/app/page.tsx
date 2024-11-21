"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useState, useEffect } from "react";

export default function Home() {
  const slides = [
    {
      image: "/images/home/img1.jpg",
      text: "Lorem Ipsum is simply dummy text",
    },
    {
      image: "/images/home/img2.jpg",
      text: "The quick brown fox jumps over the lazy dog",
    },
    {
      image: "/images/home/img3.jpg",
      text: "Innovate your ideas into reality",
    },
  ];

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Function to manually change slides
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <header className="absolute top-0 left-0 w-full flex flex-wrap justify-between items-center p-5 bg-gray-300 bg-opacity-0 z-10">
        <div className="font-bold text-lg text-white">LOGO</div>
        <nav className="space-x-5 text-sm sm:text-base">
          <a href="#offering" className="hover:text-blue-500 text-white">
            Our Offering
          </a>
          <a href="#how-it-works" className="hover:text-blue-500 text-white">
            How it Works
          </a>
          <a href="#articles" className="hover:text-blue-500 text-white">
            Articles
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Black Tint */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Text and Buttons */}
        <div className="relative p-5 sm:p-10 rounded z-10 text-center max-w-lg text-white">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            {slides[currentSlide].text}
          </h1>
          <div className="flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-5 justify-center">
            <button className="px-4 py-2 sm:px-5 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Login
            </button>
            <button className="px-4 py-2 sm:px-5 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Register
            </button>
          </div>
        </div>

        {/* Manual Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-5">
          <button
            onClick={goToPreviousSlide}
            className="bg-gray-800 bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
          >
            &#8592; {/* Left arrow */}
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-gray-800 bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
          >
            &#8594; {/* Right arrow */}
          </button>
        </div>
      </section>

      {/* Other Sections (unchanged) */}
      <section id="offering" className="p-10 bg-gray-50">
        <h2 className="text-2xl font-bold mb-5">Our Offering</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
          malesuada metus, eu condimentum purus.
        </p>
      </section>

      <section id="how-it-works" className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-5">How it Works</h2>
        <div className="flex space-x-5">
          <div className="w-1/3 h-40 bg-white rounded shadow-md"></div>
          <div className="w-1/3 h-40 bg-white rounded shadow-md"></div>
          <div className="w-1/3 h-40 bg-white rounded shadow-md"></div>
        </div>
      </section>

      <section id="articles" className="p-10 bg-gray-50">
        <h2 className="text-2xl font-bold mb-2">Articles / Media</h2>
        <AnimatedTestimonials testimonials={testimonials} />;
      </section>

      {/* Footer */}
      <footer className="p-5 bg-gray-100 flex justify-between items-center">
        <p>@2024</p>
        <div className="space-x-5">
          <a href="https://instagram.com" className="hover:text-blue-500">
            Instagram
          </a>
          <a href="https://facebook.com" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-blue-500">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
