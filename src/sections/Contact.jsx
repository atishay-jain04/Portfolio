import React from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/motionVariants';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { useForm, ValidationError } from '@formspree/react';

/**
 * Contact Section - Modern contact form with new design
 */
const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mwvvnzpb');

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-bg-pure relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center border" style={{ backgroundColor: 'rgba(204, 255, 0, 0.1)', borderColor: 'rgba(204, 255, 0, 0.2)' }}>
              <FiSend className="w-10 h-10" style={{ color: '#CCFF00' }} />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              Message <span style={{ color: '#CCFF00' }}>Sent!</span>
            </h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
              style={{ '--hover-bg': '#CCFF00' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#CCFF00'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-bg-pure relative">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-white"
        >
          Let's build the <span style={{ color: '#CCFF00', borderColor: 'rgba(204, 255, 0, 0.2)' }} className="border-b">future</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 font-light max-w-xl mx-auto mt-4"
        >
          Open for collaborations and new opportunities. Send me a signal.
        </motion.p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-0"
        >
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 border border-white/10 border-b-0">
            <div className="group relative">
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-none text-white p-6 focus:ring-0 placeholder-gray-600 font-mono text-sm focus:bg-white/5 transition-colors h-20"
                placeholder="NAME"
              />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full transition-all duration-500" style={{ backgroundColor: '#CCFF00' }}></div>
              <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10 hidden md:block"></div>
              <ValidationError
                field="name"
                prefix="Name"
                errors={state.errors}
                className="text-red-400 text-xs mt-1 block px-6"
              />
            </div>
            <div className="group relative">
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-none text-white p-6 focus:ring-0 placeholder-gray-600 font-mono text-sm focus:bg-white/5 transition-colors h-20"
                placeholder="EMAIL"
              />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full transition-all duration-500" style={{ backgroundColor: '#CCFF00' }}></div>
              <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors}
                className="text-red-400 text-xs mt-1 block px-6"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="group relative border border-white/10 border-t-0">
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full bg-transparent border-none text-white p-6 focus:ring-0 placeholder-gray-600 font-mono text-sm focus:bg-white/5 transition-colors resize-none"
              placeholder="MESSAGE"
            />
            <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full transition-all duration-500" style={{ backgroundColor: '#CCFF00' }}></div>
            <ValidationError
              field="message"
              prefix="Message"
              errors={state.errors}
              className="text-red-400 text-xs mt-1 block px-6"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8 text-center">
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: state.submitting ? 1 : 1.02 }}
              whileTap={{ scale: state.submitting ? 1 : 0.98 }}
              className="bg-white text-black px-12 py-4 font-mono font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              onMouseEnter={(e) => !state.submitting && (e.target.style.backgroundColor = '#CCFF00')}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              {state.submitting ? 'TRANSMITTING...' : 'TRANSMIT DATA'}
            </motion.button>
          </div>
        </motion.form>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-8 px-4 sm:px-6"
        >
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-gray-500 transition-colors font-mono text-xs uppercase"
                style={{ '--hover-color': '#CCFF00' }}
                onMouseEnter={(e) => e.target.style.color = '#CCFF00'}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
          <div className="font-mono text-xs" style={{ color: '#CCFF00' }}>
            © 2026 {PERSONAL_INFO.name.toUpperCase()}. SYSTEM ONLINE.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
