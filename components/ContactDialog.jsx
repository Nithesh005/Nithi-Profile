"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Copy } from "lucide-react";
import { personalInfo } from "../utils/info";
import { useState } from "react";
import ContactForm from "./ContactForm";

const ContactDialog = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Contact Form */}
              <div className="mb-4">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                    <Mail className="text-primary-500" size={16} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600">Email</p>
                      <p className="font-medium text-gray-900 text-xs truncate">{personalInfo.email}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personalInfo.email, "email")}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                    >
                      <Copy size={12} />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                    <Phone className="text-primary-500" size={16} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900 text-xs truncate">{personalInfo.phone}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                    >
                      <Copy size={12} />
                    </button>
                  </div>
                </div>

                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 p-1 bg-green-100 text-green-800 rounded text-xs text-center"
                  >
                    {copied === "email" ? "Email" : "Phone"} copied!
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactDialog;