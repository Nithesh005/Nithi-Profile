"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function FeedbackSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');

    const form = useRef(null);
    
    const sendEmail = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        
        try {
            await emailjs.sendForm(
                "mygmail",    // Replace with your service ID
                "template_ogqzjvm",   // Replace with your template ID
                form.current,         // The form ref
                "8J0aUTdwJN-UJsDmw"     // Your EmailJS public key
            );
            
            setToastMessage('Message sent successfully!');
            setToastType('success');
            setShowToast(true);
            
            // Reset form
            form.current.reset();
            
            // Hide toast after 3 seconds
            setTimeout(() => setShowToast(false), 3000);
            
        } catch (error) {
            setToastMessage('Failed to send message. Please try again.');
            setToastType('error');
            setShowToast(true);
            
            // Hide toast after 3 seconds
            setTimeout(() => setShowToast(false), 3000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toast Notification */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    className={`fixed top-24 right-6 z-50 flex items-center space-x-3 px-6 py-4 rounded-xl shadow-lg border-l-4 ${
                        toastType === 'success' 
                            ? 'bg-green-50 border-green-500 text-green-800' 
                            : 'bg-red-50 border-red-500 text-red-800'
                    }`}
                >
                    {toastType === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">{toastMessage}</span>
                </motion.div>
            )}

            {/* Feedback Section */}
            <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share Your Thoughts
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-colors duration-200"
                        placeholder="What do you think about this article? Share your thoughts..."
                    />
                </div>
                
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                            isLoading
                                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </>
    );
}
