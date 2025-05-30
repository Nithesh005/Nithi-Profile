import React, { useState } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { motion } from "framer-motion";

const WorkshopComponent = ({ workshop_img, breakpointColumnsObj }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click and open modal
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Function to close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="h-auto p-6 bg-gray-100" id="workshop">
      <div className="title font-bold text-center text-3xl p-6">Technical Workshop</div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {workshop_img.map((item, index) => (
          <motion.div
            key={item.id || index} // Use item.id if available; otherwise, use index
            className="mb-6 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Image with Hover & Click Animation */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(item)}
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={384}
                height={216}
                priority
                className="w-full h-auto rounded-lg"
              />
            </motion.div>

            {/* Title & Description */}
            <div className="text-center mt-4">
              <h3 className="title font-bold text-2xl text-gray-800">{item.title}</h3>
              {/* <p className="text-gray-600 mt-2">{item.description}</p> */}
            </div>
          </motion.div>
        ))}

      </Masonry>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick} // Close modal when clicking outside
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl mx-auto relative">
            {/* Close Button - Positioned top-right */}
            <button
              className="absolute top-0 right-0 p-4 text-2xl text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>

            {selectedItem && (
              <>
                <div className="mb-4">
                  {/* Make sure the image doesn't overflow the screen */}
                  <Image
                    src={selectedItem.img}
                    alt={selectedItem.alt}
                    width={768}
                    height={432}
                    priority
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
                <div className="title font-bold text-2xl mb-2">{selectedItem.title}</div>
                <p>{selectedItem.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopComponent;
