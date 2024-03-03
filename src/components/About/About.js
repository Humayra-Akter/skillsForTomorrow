import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum
          dolor feugiat at.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum
          dolor feugiat at.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum
          dolor feugiat at.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            name="John Doe"
            position="CEO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
            imageSrc="team-member1.jpg"
          />
          <div
            name="Jane Smith"
            position="COO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
            imageSrc="team-member2.jpg"
          />
          {/* Add more team members */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">divs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            name="Client Name"
            company="Company Name"
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
          />
          <div
            name="Client Name"
            company="Company Name"
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum
          dolor feugiat at.
        </p>
        <p className="text-lg text-gray-700">
          Email: example@example.com
          <br />
          Phone: +123 456 789
        </p>
      </section>
    </div>
  );
};

export default About;
