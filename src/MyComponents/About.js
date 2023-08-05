// About.js

import React from 'react';
import AboutImage from '../assets/images/about.png'

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={AboutImage}
            alt="About Us"
            className="img-fluid mb-4"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-4 mb-4">About Us</h2>
          <h4>Welcome to KeepNotes - Your Personal Note-Taking Companion!</h4>
          <p>
            At KeepNotes, we believe that capturing ideas, organizing thoughts, and staying productive should be effortless. Our app is designed to empower you with a seamless note-taking experience, enabling you to focus on what truly matters - your thoughts and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
