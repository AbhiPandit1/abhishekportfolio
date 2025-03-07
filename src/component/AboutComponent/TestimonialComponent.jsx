import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import Slider from 'react-slick';
import { testimonials } from './TestimonialData';

const TestimonialComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [progress, setProgress] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    beforeChange: (_, next) => {
      if (testimonials.length > 0) {
        setProgress(((next + 1) / testimonials.length) * 100);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 md:p-6 rounded-lg shadow-xl max-w-4xl w-full mx-auto sm:mx-0">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6  cursor-pointer">
        Testimonials
        <span className="block w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mt-2 "></span>
      </h2>

      {/* Testimonial Slider */}
      <div className="mt-4 md:mt-6 relative px-2 sm:px-0 mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div
                className="bg-gray-800 p-4 md:p-5 rounded-lg shadow-md flex flex-col items-center text-center text-white min-h-fit cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openModal(testimonial)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full mb-2 border border-gray-500 object-cover shadow-md"
                />
                <h3 className="text-xs md:text-sm font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {testimonial.position} at {testimonial.company}
                </p>
                <p className="text-gray-300 mt-2 text-xs line-clamp-2">
                  {testimonial.description}
                </p>
                <a
                  href={testimonial.link} // FIXED: Use `testimonial` instead of `selectedTestimonial`
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 mt-3 text-sm flex items-center gap-1 hover:underline transition-transform transform hover:scale-105"
                >
                  {testimonial.link.includes('instagram') ? (
                    <FaInstagram className="text-pink-500 text-sm" />
                  ) : (
                    <FaLinkedin className="text-blue-500 text-sm" />
                  )}
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </Slider>

        {/* Small Centered Progress Bar */}
        <div className="w-48 h-1 bg-gray-700 mt-3 rounded-md mx-auto">
          <div
            className="h-1 bg-amber-400 rounded-md transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg flex flex-col items-center min-h-fit">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-lg hover:text-red-500 transition"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            <img
              src={selectedTestimonial.image}
              alt={selectedTestimonial.name}
              className="w-16 h-16 rounded-full mb-3 border border-gray-500 object-cover shadow-md"
            />
            <h3 className="text-lg font-semibold text-white">
              {selectedTestimonial.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {selectedTestimonial.position} at {selectedTestimonial.company}
            </p>
            {/* Full Description without Scroll */}
            <p className="mt-3 bg-gray-800 rounded-md w-full text-gray-300 text-sm leading-relaxed p-3">
              {selectedTestimonial.description}
            </p>
            <a
              href={selectedTestimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-3 text-sm flex items-center gap-1 hover:underline transition-transform transform hover:scale-105"
            >
              {selectedTestimonial.link.includes('instagram') ? (
                <FaInstagram className="text-pink-500 text-sm" />
              ) : (
                <FaLinkedin className="text-blue-500 text-sm" />
              )}
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialComponent;
