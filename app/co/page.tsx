"use client";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Contact Me
          </h2>

          {/* Contact Form */}
          {/* <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page reload
              Swal.fire({
                title: `Message Sent!`,
                icon: "success",
                confirmButtonText: "OK",
              });
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-4 w-full rounded-md border border-gray-300 bg-white/5 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:bg-white/10"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="mt-1 p-4 w-full rounded-md border border-gray-300 bg-white/5 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:bg-white/10"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 p-4 w-full rounded-md border border-gray-300 bg-white/5 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:bg-white/10"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transform hover:scale-105"
            >
              Send Message
            </button>
          </form> */}
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={(e) => {
    e.preventDefault(); // Prevent default browser behavior
    Swal.fire({
      title: `Message Sent!`,
      icon: "success",
      confirmButtonText: "OK",
    });
  }}
  className="space-y-6"
>
  {/* Hidden Input for Netlify */}
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden">
    <label>
      Don’t fill this out if you’re human: 
      <input name="bot-field" />
    </label>
  </p>

  {/* Name Field */}
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-white">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="mt-1 p-4 w-full rounded-md border border-gray-300 bg-white/5 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:bg-white/10"
      placeholder="Your name"
    />
  </div>

  {/* Email Field */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-white">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      autoComplete="email"
      className="mt-1 p-4 w-full rounded-md border border-gray-300 bg-white/5 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:bg-white/10"
      placeholder="your@email.com"
    />
  </div>

  {/* Message Field */}
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-white">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      className="mt-1 p-4 w-full rounded-md border border-gray-300 bg-white/5 text-white shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:bg-white/10"
      placeholder="Your message"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-3 px-4 rounded-md bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transform hover:scale-105"
  >
    Send Message
  </button>
</form>

          {/* Contact Details */}
          <div className="mt-8 space-y-4 text-center text-white">
            <p>Email: <a href="mailto:muhammedsuhaib@example.com" className="hover:text-indigo-200">muhammedsuhaib@example.com</a></p>
            <p>Address: 123 Example Street, City, Country</p>
            <p>Phone: <a href="tel:+15551234567" className="hover:text-indigo-200">+1 (555) 123-4567</a></p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/suhaib1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-indigo-200 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MuhammedSuhaib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-indigo-200 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link href="/" className="mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
