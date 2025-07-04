import React from "react";

const About = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10">
    <div className="bg-white/90 shadow-xl rounded-2xl p-10 text-center max-w-2xl border border-primary/20">
      <h1 className="text-4xl font-extrabold mb-4 text-primary drop-shadow">About Us</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Welcome to <span className="font-semibold text-primary">LocalShop</span>! We are passionate about connecting you with the best local products, sourced directly from trusted artisans and producers in your community.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-secondary flex items-center justify-center gap-2">
        <svg className="inline-block w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20.5C6.753 20.5 2 15.747 2 10.5S6.753.5 12 .5s10 4.753 10 10-4.753 10-10 10z" /></svg>
        Our Mission
      </h2>
      <p className="mb-4">
        Our mission is to make high-quality, locally-made goods accessible to everyone. We believe in supporting small businesses, promoting sustainability, and delivering exceptional value to our customers.
      </p>
      <h2 className="text-2xl font-semibold mb-2 text-primary flex items-center justify-center gap-2">
        <svg className="inline-block w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        Why Shop With Us?
      </h2>
      <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-md text-foreground">
        <li className="mb-1"><span className="font-medium text-primary">Curated selection</span> of premium local products</li>
        <li className="mb-1"><span className="font-medium text-primary">Fast and reliable delivery</span> to your doorstep</li>
        <li className="mb-1"><span className="font-medium text-primary">Commitment</span> to sustainability and ethical sourcing</li>
        <li className="mb-1"><span className="font-medium text-primary">Friendly customer support</span></li>
      </ul>
      <p className="text-lg text-secondary-foreground mt-6">
        Thank you for supporting local businesses and being a part of our community!
      </p>
    </div>
  </div>
);

export default About; 