"use client";
import Image from "next/image";
import services from "../../../products/products.json";
import { useState } from "react";

function Modal({ isOpen, onClose, service }) {
  const tableData = [
    ["USF 800", "363 (800)", "907 (2000)", "1650 (338)", "180 (397)"],
    ["USF 1000", "454 (1000)", "1134 (2500)", "2025 (415)", "225 (496)"],
    ["USF 1250", "567 (1250)", "1418 (3125)", "2450 (502)", "281 (619)"],
    ["USF 1500", "680 (1500)", "1701 (3750)", "3100 (636)", "315 (694)"],
    ["USF 2000", "907 (2000)", "1814 (4000)", "3600 (738)", "425 (937)"],
    ["USF 2500", "1134 (2500)", "2268 (5000)", "4000 (820)", "525 (1157)"],
  ];

  const cardData = [
    {
      title: "Chipboard Encapsulated Raised Access Flooring System",
      description:
        "High-quality modular panels with engineered construction and accurate dimensional tolerances.",
    },
    {
      title: "Chipboard Non-Encapsulated Raised Access Flooring System",
      description:
        "Durable chipboard panels meeting EN12825 standards for strength and reliability.",
    },
    {
      title: "Calcium Sulphate Raised Access Flooring System",
      description:
        "Panels manufactured from fibre-reinforced Calcium Sulphate for superior durability.",
    },
  ];

  if (!isOpen) return null;

  return (
    <div id="services" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ">
      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-1/2 max-h-[80vh] p-6 sm:p-8 overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-md transition-transform transform hover:scale-110"
          aria-label="Close Modal"
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          {service?.category || "System Selection Guide"}
        </h2>

        {/* Table Section */}
        <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {[
                  "Grade",
                  "Concentrated Load",
                  "Ultimate Load",
                  "Uniform Load",
                  "Rolling Load*",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 text-sm text-gray-600 border-t border-gray-200"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <div id="services" className="p-8 bg-gray-100 min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
            >
              <div className="relative w-full h-48 sm:h-64">
                <Image
                  src={service.url}
                  alt={service.category}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  priority={index === 0}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {service.category}
                </h2>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* For the 7th service (index 6) */}
        {services.slice(6, 7).map((service, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer"
            onClick={() => openModal(service)}
          >
            <div className="relative w-full h-64 sm:h-80 overflow-hidden">
              <Image
                src={service.url}
                alt={service.category}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-lg font-semibold">Read More</span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {service.category}
              </h2>
              <p className="text-gray-600 text-base group-hover:text-gray-800 transition-colors">
                {service.description}
              </p>
            </div>
          </div>
        ))}

        {/* Mobile Notification Banner */}
        <div className="block sm:hidden text-center py-4 bg-indigo-600 text-white rounded-lg mt-8">
          <span className="text-lg font-semibold">Click on the service above to view detailed specifications!</span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </div>
  );
}
