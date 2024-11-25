// "use client";
// import Navbar from "@/components/navbar";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const slides = [
//     {
//       image: "/images/home/img1.jpg",
//       text: "Lorem Ipsum is simply dummy text",
//     },
//     {
//       image: "/images/home/img2.jpg",
//       text: "The quick brown fox jumps over the lazy dog",
//     },
//     {
//       image: "/images/home/img3.jpg",
//       text: "Innovate your ideas into reality",
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//       name: "Sarah Chen",
//       designation: "Product Manager at TechFlow",
//       src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       name: "Michael Rodriguez",
//       designation: "CTO at InnovateSphere",
//       src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       name: "Emily Watson",
//       designation: "Operations Director at CloudScale",
//       src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//       name: "James Kim",
//       designation: "Engineering Lead at DataPro",
//       src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//       name: "Lisa Thompson",
//       designation: "VP of Technology at FutureNet",
//       src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isClient, setIsClient] = useState(false);

//   // Ensure `useEffect` is used for client-side-only logic
//   useEffect(() => {
//     setIsClient(true);

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Function to manually change slides
//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPreviousSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       <Navbar />
//       {/* Hero Section */}
//       <section className="relative h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
//         {/* Slides */}
//         <div className="absolute inset-0 w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 currentSlide === index ? "opacity-100" : "opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Black Tint */}
//               <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//             </div>
//           ))}
//         </div>
//         {/* Text and Buttons */}
//         <div className="relative p-5 sm:p-10 rounded z-10 text-center max-w-full sm:max-w-lg text-white">
//           <h1 className="text-xl sm:text-4xl font-bold mb-4">
//             {slides[currentSlide]?.text}
//           </h1>
//           <div className="flex flex-wrap gap-3 sm:space-y-0 sm:space-x-5 justify-center">
//             <button className="px-4 py-2 sm:px-5 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//               Login
//             </button>
//             <button className="px-4 py-2 sm:px-5 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//               Register
//             </button>
//           </div>
//         </div>

//         {/* Manual Navigation Buttons */}
//         <div className="absolute inset-0 flex justify-between items-center px-5">
//           <button
//             onClick={goToPreviousSlide}
//             className="bg-gray-800 bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
//           >
//             &#8592; {/* Left arrow */}
//           </button>
//           <button
//             onClick={goToNextSlide}
//             className="bg-gray-800 bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
//           >
//             &#8594; {/* Right arrow */}
//           </button>
//         </div>
//       </section>

//       {/* Other Sections (unchanged) */}
//       <section
//         id="offering"
//         className="p-10 bg-gray-50 flex flex-col items-center justify-center text-center"
//       >
//         <h2 className="text-2xl font-bold mb-5 text-black">Our Offering</h2>
//         <div className="text-base text-black max-w-2xl leading-relaxed space-y-4">
//           <p>
//             We provide insights for floating loan analysis to help you better
//             understand your loan details and interest impact.
//           </p>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               1. Basic Loan Details
//             </h3>
//             <p>
//               - <strong>Loan Amount:</strong> The total amount sanctioned by the
//               bank.
//             </p>
//             <p>
//               - <strong>Tenure:</strong> The total duration of the loan and
//               remaining period.
//             </p>
//             <p>
//               - <strong>Outstanding Principal:</strong> The current unpaid
//               balance of the loan.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               2. Interest Rate Analysis
//             </h3>
//             <p>
//               - <strong>Current Interest Rate:</strong> The prevailing rate
//               applied to the loan.
//             </p>
//             <p>
//               - <strong>Rate History:</strong> Historical changes in the
//               interest rate since the loan started.
//             </p>
//             <p>
//               - <strong>Impact of Rate Changes:</strong> Learn how rate changes
//               have affected your EMI and loan tenure.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               3. Effective Interest Paid
//             </h3>
//             <p>
//               - Track the cumulative interest paid so far and projected interest
//               over the remaining period based on current rates.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section id="how-it-works" className="p-10 bg-[#EFF3F7]">
//         <h2 className="text-2xl font-bold mb-5">How it Works</h2>
//         <div className="flex flex-wrap gap-5 justify-center py-10">
//           {/* Container 1 */}
//           <div className="w-80 rounded-lg shadow-lg bg-white p-5 flex flex-col items-center">
//             <img
//               src="/images/avatar/smileWithTeeth.png"
//               alt="Container Image 1"
//               className="w-16 h-16 rounded-full mb-4"
//             />

//             <p className="text-sm text-gray-600 text-center">
//               The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
//               February 17, 2024.Track the cumulative interest paid so far and
//               projected interest over the remaining period based on current
//               rates.
//             </p>
//           </div>

//           {/* Container 2 */}
//           <div className="w-80 rounded-lg shadow-lg bg-white p-5 flex flex-col items-center">
//             <img
//               src="/images/avatar/thinking.png"
//               alt="Container Image 2"
//               className="w-16 h-16 rounded-full mb-4"
//             />

//             <p className="text-sm text-gray-600 text-center">
//               The Adidas Yeezy Boost 350 V2 is scheduled to release on March 10,
//               2024.Track the cumulative interest paid so far and projected
//               interest over the remaining period based on current rates.
//             </p>
//           </div>

//           {/* Container 3 */}
//           <div className="w-80 rounded-lg shadow-lg bg-white p-5 flex flex-col items-center">
//             <img
//               src="/images/avatar/confident.png"
//               alt="Container Image 3"
//               className="w-16 h-16 rounded-full mb-4"
//             />

//             <p className="text-sm text-gray-600 text-center">
//               The Nike Air Max 1 Premium will hit the shelves on April 1, 2024.
//               Don’t miss out!Track the cumulative interest paid so far and
//               projected interest over the remaining period based on current
//               rates.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section id="articles" className="p-10 bg-gray-50">
//         <h2 className="text-2xl font-bold mb-2">Articles / Media</h2>
//         {isClient && <AnimatedTestimonials testimonials={testimonials} />}
//       </section>

//       {/* Footer */}
//       <footer className="p-5 bg-gray-100 flex justify-between items-center">
//         <p>@2024</p>
//         <div className="space-x-5">
//           <a href="https://instagram.com" className="hover:text-blue-500">
//             Instagram
//           </a>
//           <a href="https://facebook.com" className="hover:text-blue-500">
//             Facebook
//           </a>
//           <a href="https://twitter.com" className="hover:text-blue-500">
//             Twitter
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function Home() {
  // const slides = [
  //   {
  //     image: "/images/home/img1.jpg",
  //     text: "Lorem Ipsum is simply dummy text",
  //   },
  //   {
  //     image: "/images/home/img2.jpg",
  //     text: "The quick brown fox jumps over the lazy dog",
  //   },
  //   {
  //     image: "/images/home/img3.jpg",
  //     text: "Innovate your ideas into reality",
  //   },
  // ];

  // const testimonials = [
  //   {
  //     quote:
  //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  //     // name: "Sarah Chen",
  //     // designation: "Product Manager at TechFlow",
  //     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
  //     // name: "Michael Rodriguez",
  //     // designation: "CTO at InnovateSphere",
  //     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
  //     // name: "Emily Watson",
  //     // designation: "Operations Director at CloudScale",
  //     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
  //     // name: "James Kim",
  //     // designation: "Engineering Lead at DataPro",
  //     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
  //     // name: "Lisa Thompson",
  //     // designation: "VP of Technology at FutureNet",
  //     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <img
          src="/images/home/img1.jpg"
          alt="The Dawn of Innovation"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: (
        <img
          src="/images/home/img2.jpg"
          alt="The Digital Revolution"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: (
        <img
          src="/images/home/img3.jpg"
          alt="The Art of Design"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: (
        <img
          src="/images/home/img1.jpg"
          alt="The Power of Communication"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: (
        <img
          src="/images/home/img2.jpg"
          alt="The Pursuit of Knowledge"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <img
          src="/images/home/img3.jpg"
          alt="The Joy of Creation"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: (
        <img
          src="/images/home/img1.jpg"
          alt="The Spirit of Adventure"
          className="w-full h-40 object-cover rounded-t-xl"
        />
      ),
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const cards = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      image: "/images/home/img1.jpg",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      image: "/images/home/img2.jpg",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      image: "/images/home/img3.jpg",
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      image: "/images/home/img1.jpg",
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      image: "/images/home/img2.jpg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Automatically shift every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  // Function to manually change slides
  // const goToNextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const goToPreviousSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section id="problem" className="p-10 bg-[#EFF3F7]">
        <div className="relative max-w-6xl mx-auto">
          {/* Card */}
          <div className="relative p-5 mt-10 bg-white rounded-lg shadow-lg">
            <img
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              className="w-full h-72 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                {cards[activeIndex].title}
              </h3>
              <p className="text-gray-600">{cards[activeIndex].description}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>
      {/* Other Sections (unchanged) */}
      <section
        id="offering"
        className="p-10 bg-gray-50 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-2xl font-bold mb-5 text-black">Our Offering</h2>
        <div className="text-lg text-gray-500 mt-8 dark:text-neutral-300 max-w-2xl leading-relaxed space-y-4">
          <p>
            We provide insights for floating loan analysis to help you better
            understand your loan details and interest impact.
          </p>
          <div>
            <h3 className="text-xl font-semibold dark:text-white text-gray-700 ">
              1. Basic Loan Details
            </h3>
            <p>
              - <strong>Loan Amount:</strong> The total amount sanctioned by the
              bank.
            </p>
            <p>
              - <strong>Tenure:</strong> The total duration of the loan and
              remaining period.
            </p>
            <p>
              - <strong>Outstanding Principal:</strong> The current unpaid
              balance of the loan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold dark:text-white text-gray-700">
              2. Interest Rate Analysis
            </h3>
            <p>
              - <strong>Current Interest Rate:</strong> The prevailing rate
              applied to the loan.
            </p>
            <p>
              - <strong>Rate History:</strong> Historical changes in the
              interest rate since the loan started.
            </p>
            <p>
              - <strong>Impact of Rate Changes:</strong> Learn how rate changes
              have affected your EMI and loan tenure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold dark:text-white text-gray-700">
              3. Effective Interest Paid
            </h3>
            <p>
              - Track the cumulative interest paid so far and projected interest
              over the remaining period based on current rates.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="p-10 bg-[#EFF3F7]">
        <h2 className="text-2xl font-bold mb-5">How it Works</h2>
        <div className="flex flex-wrap gap-5 justify-center py-10">
          {/* Container 1 */}
          <div className="w-80 rounded-lg shadow-lg bg-white p-5 flex flex-col items-center">
            <img
              src="/images/avatar/smileWithTeeth.png"
              alt="Container Image 1"
              className="w-16 h-16 rounded-full mb-4"
            />

            <p className="text-sm text-gray-600 text-center">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024.Track the cumulative interest paid so far and
              projected interest over the remaining period based on current
              rates.
            </p>
          </div>

          {/* Container 2 */}
          <div className="w-80 rounded-lg shadow-lg bg-white p-5 flex flex-col items-center">
            <img
              src="/images/avatar/thinking.png"
              alt="Container Image 2"
              className="w-16 h-16 rounded-full mb-4"
            />

            <p className="text-sm text-gray-600 text-center">
              The Adidas Yeezy Boost 350 V2 is scheduled to release on March 10,
              2024.Track the cumulative interest paid so far and projected
              interest over the remaining period based on current rates.
            </p>
          </div>

          {/* Container 3 */}
          <div className="w-80 rounded-lg shadow-lg bg-white p-5 flex flex-col items-center">
            <img
              src="/images/avatar/confident.png"
              alt="Container Image 3"
              className="w-16 h-16 rounded-full mb-4"
            />

            <p className="text-sm text-gray-600 text-center">
              The Nike Air Max 1 Premium will hit the shelves on April 1, 2024.
              Don’t miss out!Track the cumulative interest paid so far and
              projected interest over the remaining period based on current
              rates.
            </p>
          </div>
        </div>
      </section>

      {/* <section id="articles" className="p-10 bg-gray-50">
        <h2 className="text-2xl font-bold mb-2">Articles / Media</h2>
        {isClient && <AnimatedTestimonials testimonials={testimonials} />}
      </section> */}
      <section id="articles" className="p-10 bg-gray-50">
        <h2 className="text-2xl font-bold mb-2">Articles / Media</h2>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
