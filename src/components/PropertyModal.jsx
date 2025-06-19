import React, { useState } from "react";
import {
  FaBath,
  FaBed,
  FaChevronLeft,
  FaChevronRight,
  FaLocationDot,
  FaRuler,
  FaX,
} from "react-icons/fa6";

const PropertyModal = ({ onClose, property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) return null;

  const images = Array.isArray(property.images) ? property.images : [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src={images[currentImageIndex]?.filename}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute text-white top-10 right-5 -translate-y-1/2 bg-red-500 p-2 rounded-full"
          >
            <FaX size={20} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 flex items-center gap-4">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 px-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.filename}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-md border ${
                  index === currentImageIndex
                    ? "border-blue-500"
                    : "border-transparent"
                } cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}

        {/* Property Info */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <FaLocationDot className="text-blue-600" />
            <span>{property.location}</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {property.title}
          </h2>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            {property.price}
          </div>

          <div className="flex gap-6 p-4 bg-gray-50 rounded-xl mb-4">
            <div className="flex items-center gap-2">
              <FaBed className="text-blue-600" />
              <span className="text-gray-600">{property.beds} Beds</span>
            </div>

            <div className="flex items-center gap-2">
              <FaBath className="text-blue-600" />
              <span className="text-gray-600">{property.baths} Baths</span>
            </div>

            <div className="flex items-center gap-2">
              <FaRuler className="text-blue-600" />
              <span className="text-gray-600">{property.sqft} Sqft</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
