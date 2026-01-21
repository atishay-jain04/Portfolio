import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { fadeInUp, scaleUp, staggerContainer } from '../utils/motionVariants';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { useForm, ValidationError } from '@formspree/react';

/**
 * Contact Section - Contact details and contact form
 */
const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mwvvnzpb');

  const socialIcons = {
    github: <FiGithub className="w-6 h-6" />,
    linkedin: <FiLinkedin className="w-6 h-6" />,
    email: <FiMail className="w-6 h-6" />,
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-gray-950/50">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto"></div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              variants={scaleUp}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl p-12 border border-emerald-500/30">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                  <FiSend className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Message Sent!
                </h3>
                <p className="text-gray-300 mb-8">
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
                <motion.button
                  onClick={reset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-shadow"
                >
                  Send Another Message
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors border border-gray-700 hover:border-emerald-500/50"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gray-950/50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={scaleUp}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Left Side - Contact Info */}
                <div className="md:col-span-2 bg-gradient-to-br from-emerald-500 to-green-500 p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <FiMail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-emerald-100">Email</p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium hover:underline">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <FiGithub className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-emerald-100">GitHub</p>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                          {PERSONAL_INFO.github.split('/').pop()}
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-4">
                      <p className="text-sm text-emerald-100 mb-3">Connect with me</p>
                      <div className="flex gap-3">
                        {SOCIAL_LINKS.filter(s => s.name !== 'Email').map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                            aria-label={social.name}
                          >
                            {socialIcons[social.icon]}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <h3 className="text-2xl font-display font-bold text-white mb-6">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiUser className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                        placeholder="Your Name"
                      />
                      <ValidationError
                        field="name"
                        prefix="Name"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1 block"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiMail className="w-5 h-5 text-gray-500" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                        placeholder="Your Email"
                      />
                      <ValidationError
                        field="email"
                        prefix="Email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1 block"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                        <FiMessageSquare className="w-5 h-5 text-gray-500" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                        placeholder="Your Message"
                      />
                      <ValidationError
                        field="message"
                        prefix="Message"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1 block"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                      whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {state.submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
