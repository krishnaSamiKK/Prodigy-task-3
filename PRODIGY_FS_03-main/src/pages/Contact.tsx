import React from "react";

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10">
    <div className="bg-white/90 shadow-xl rounded-2xl p-10 text-center max-w-2xl border border-primary/20">
      <h1 className="text-4xl font-extrabold mb-4 text-primary drop-shadow">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-6">We'd love to hear from you! Fill out the form below or reach us at <a href='mailto:support@localshop.com' className='text-primary underline'>support@localshop.com</a>.</p>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px]" />
        <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded-lg shadow hover:bg-primary/90 transition">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contact; 