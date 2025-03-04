"use client"
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function WowelseBlog() {
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
                        src="/assets/images/Wowelse/wowelseIndex.png"
                        alt="Blog Thumbnail"
                        className="object-cover w-full h-full rounded-xl shadow-md"
                    />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    {/* Left Side Content */}
                    <div className="flex items-center space-x-6">
                        {/* Blog Author */}
                        <p>By Nithesh</p>
                        {/* Blog Date */}
                        <p>March 4, 2025</p>
                        {/* Blog Categories */}
                        <div className="flex items-center space-x-2">
                            <span>Technology</span>
                            <span>Business</span>
                        </div>
                        {/* Blog Reading Time */}
                        <p>4 min read</p>
                    </div>

                    {/* Reference Link */}
                    <a
                        href="https://wowelse.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                    >
                        https://wowelse.com/
                    </a>
                </div>



                {/* Blog Title */}
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Life at Wowelse
                </h1>
                {/* Blog Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Wowelse is a great place to work. We have a great team and work on interesting projects.
                    Here, we value innovation and collaboration, which helps us achieve our goals and deliver quality results.
                </p>

                {/* <h2 className="text-2xl font-semibold text-gray-900 mb-4">Healthy Environment</h2> */}
                {/* Blog Description */}
                <div className="healthy_environment flex items-start">
                    {/* Image container */}
                    <div className="flex justify-center items-start mb-4 mr-4">
                        <img
                            src="/assets/images/Wowelse/wowelseCarom.jpg"
                            alt="Healthy Environment"
                            className="h-98 w-98 object-contain"
                        />
                    </div>

                    {/* Text container */}
                    <p className="text-lg text-gray-700">
                        Wowelse emphasizes a healthy environment and values collaboration with the community. They provide resources and support to help people transition from working remotely to a more healthy, supportive, and fulfilling workplace.
                    </p>
                </div>


                {/* <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Wowelse is a great place to work. We have a great team and work on interesting projects.
                    Here, we value innovation and collaboration, which helps us achieve our goals and deliver quality results.
                </p> */}

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
