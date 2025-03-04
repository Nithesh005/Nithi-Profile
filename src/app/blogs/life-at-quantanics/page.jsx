"use client"
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function QuantanicsBlog() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    alert('Feedback submitted: ' + feedback);
    setFeedback(''); // Clear the textarea after submitting
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Container */}
      <div className="max-w-4xl mx-auto p-6">
        <Link href='/'>
          <Button>Back to Home</Button>
        </Link>

        {/* Thumbnail Image */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-8 border-4 border-gray-300">
          <img
            src="/assets/images/Quantainics/quantanicsIndex.png"
            alt="Blog Thumbnail"
            className="object-cover w-full h-full rounded-xl shadow-md"
          />
        </div>
        {/* Blog Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Life at Quantanics
        </h1>

        {/* Blog Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Quantanics is a great place to work. We have a great team and work on interesting projects.
          Here, we value innovation and collaboration, which helps us achieve our goals and deliver quality results.
        </p>

        {/* Feedback Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Leave Feedback</h2>

          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Share your thoughts on this blog post..."
          ></textarea>
          <div className="footer_action_btns flex justify-between">
            <Button onClick={handleSubmitFeedback} variant="outlined" >
              Submit Feedback
            </Button>
            <Link href='/'>
              <Button variant="contained">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
