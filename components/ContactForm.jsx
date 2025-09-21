"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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
                "mygmail",
                "template_ogqzjvm",
                form.current,
                "8J0aUTdwJN-UJsDmw"
            );
            
            setToastMessage('Message sent successfully!');
            setToastType('success');
            setShowToast(true);
            form.current.reset();
            setTimeout(() => setShowToast(false), 3000);
            
        } catch (error) {
            setToastMessage('Failed to send message. Please try again.');
            setToastType('error');
            setShowToast(true);
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
                    className={`fixed top-24 right-6 z-50 flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg border-l-4 ${
                        toastType === 'success' 
                            ? 'bg-green-50 border-green-500 text-green-800' 
                            : 'bg-red-50 border-red-500 text-red-800'
                    }`}
                >
                    {toastType === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm font-medium">{toastMessage}</span>
                </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                {/* <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Get in Touch
                </h3> */}
                
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="3"
                        className="w-full p-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-colors duration-200"
                        placeholder="Share your thoughts or get in touch..."
                    />
                </div>
                
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center space-x-1 px-4 py-2 text-sm rounded-md font-medium transition-all duration-200 ${
                            isLoading
                                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md'
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Send size={14} />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </>
    );
}