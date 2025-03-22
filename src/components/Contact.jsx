import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { LuMailPlus } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { motion } from 'motion/react'
import { contact1, contact2 } from "../assets";

const Contact = () => {
  const formElement = useRef(null);

  const [formInput, setFormInput] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  })

  const [sendEmailLoading, setSendEmailLoading] = useState(false);

  const [emailSentCounter, setEmailSentCounter] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const resetForm = () => {
    setFormInput({ user_name: "", user_email: "", user_message: "" });
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    if (!formInput.user_name.trim() || !formInput.user_email.trim() || !formInput.user_message.trim()) {
      toast.error("Fill the form to send email", { duration: 2000 });
      return;
    }

    setEmailSentCounter((prev) => prev + 1);

    if (emailSentCounter >= 2) {
      toast.error("Please avoid spamming. Refresh the page if needed.", {
        duration: 8000,
      });
      resetForm();
      return;
    }

    if (emailSentCounter >= 5) {
      toast.error("Too many emails sent! Refresh the page and try again.", {
        duration: 8000,
      });
      resetForm();
      return;
    }

    setSendEmailLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        formElement.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Email Sent Successfully!");

      resetForm();
    } catch (error) {
      toast.error(error?.text || "Something went wrong!");
    } finally {
      setSendEmailLoading(false);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="contact" className="px-8 xl:px-20 sm:px-16 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h1 className="bg-[#1a1443] w-fit mx-auto text-white rounded-md px-6 py-2 text-xl lg:text-4xl">
          Contact
        </h1>
      </motion.div>
      <div className="grid lg:grid-cols-2">
        <motion.div
          ref={ ref }
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="border border-[#464c6a] rounded-md p-6 mt-10 mx-6"
        >
          <h1 className="text-[#16f2b3] lg:text-xl">CONNECT WITH ME</h1>
          <form ref={formElement} onSubmit={sendEmailHandler} className="mt-5">
            <div className="flex flex-col gap-3">
              {/* Name Input */}
              <div>
                <label className="mx-1 text-sm text-white">Name</label>
                <input
                  required
                  name="user_name"
                  value={formInput.user_name}
                  onChange={ handleInputChange }
                  className="my-1 bg-[#10172d] rounded-md border-[#464c6a] px-4 py-2 w-full border focus:border-[#16f2b3] outline-none text-white"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="mx-2 text-sm text-white">Email</label>
                <input
                  required
                  name="user_email"
                  value={formInput.user_email}
                  onChange={ handleInputChange }
                  className="mt-1 bg-[#10172d] rounded-md border-[#464c6a] px-4 py-2 w-full border focus:border-[#16f2b3] outline-none text-white"
                  type="email"
                  placeholder="Enter Email Address"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="mx-1 text-sm text-white">Message</label>
                <textarea
                  required
                  name="user_message"
                  value={formInput.user_message}
                  onChange={ handleInputChange }
                  className="mt-1 resize-none bg-[#10172d] rounded-md border-[#464c6a] px-4 py-2 w-full border focus:border-[#16f2b3] outline-none text-white"
                  rows={3}
                  placeholder="Enter Message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sendEmailLoading}
                className="px-4 py-3 lg:px-6 lg:py-3 lg:font-bold rounded-full text-white bg-gradient-to-r from-[#da22ff] to-[#9733ee] flex items-center gap-2 mx-auto"
              >
                {sendEmailLoading ? (
                  <ImSpinner2 className="animate-spin" />
                ) : (
                  <>
                    CONTACT ME <LuMailPlus className="inline" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5 mt-10 mx-6">
          {
            contact1.map((item, index) => (
              <motion.div
                key={ index }
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full border border-[#464c6a] rounded-md p-5"
              >
                <div className="flex flex-col justify-center items-center">
                  <item.icon className="text-4xl text-[#16f2b3]" />
                  <h4 className="text-sm mt-2 text-white tracking-wide font-[500]">
                    { item.name }
                  </h4>
                  <p className="text-sm mt-2 text-neutral-500 tracking-wide font-[500]">
                    { item.content }
                  </p>
                  <a
                    className="text-white flex items-end gap-1 text-sm mt-2 transition duration-300 font-[300]"
                    href={ item.link }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Click me</span>
                  </a>
                </div>
              </motion.div>
            ))
          }
          <div className="flex items-center gap-6 mt-4 col-span-1">
            {
              contact2.map((item, index) => (
                <motion.div
                  key={ index }
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="w-12 h-12 flex items-center justify-center text-xl bg-[#464c6a] hover:bg-[#16f2b3] rounded-full hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                >
                  <a href={ item.link } target="_blank">
                    <item.icon />
                  </a>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
