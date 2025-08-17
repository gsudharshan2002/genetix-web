"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiClipboard, FiMessageSquare } from "react-icons/fi";


interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const services = [
  { title: "Web Development" },
  { title: "Mobile App" },
  { title: "UI/UX Design" },
  { title: "E-Commerce" },
  { title: "Other" },
];

export default function ContactUs() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ message: "Message sent successfully ✅", type: "success" });
        setForm({ name: "", email: "", category: "", message: "" });
      } else {
        setStatus({ message: "Failed to send message ❌", type: "error" });
      }
    } catch (err) {
      setStatus({ message: "Error sending message ❌", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto px-6 py-12"
    >
      <h1 className="text-6xl font-extrabold text-center mb-12">
        Contact{" "}
        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Us
        </span>
      </h1>

      <div className="bg-gradient-to-br from-green-100 via-green-300 to-purple-400 rounded-2xl shadow-xl p-10 backdrop-blur-sm border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 pl-10 bg-white/80 border border-green-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 pl-10 bg-white/80 border border-blue-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <FiClipboard className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full p-4 pl-10 bg-white/80 border border-green-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              <option value="">Select Project Category</option>
              {services.map((service, i) => (
                <option key={i} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <FiMessageSquare className="absolute top-2 left-3 text-gray-400" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-4 pl-10 bg-white/80 border border-blue-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Toast / status */}
          {status && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full mt-3 w-full text-center font-medium ${
                status.type === "success" ? "text-green-700" : "text-red-600"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
