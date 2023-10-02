import React from "react";
import "./WhatWillYouGet.css";
import img3 from "../../Images/img3.jpg";
const WhatWillYouGet = () => {
  return (
    <div className="home-banner">
      <img src={img3} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <div className="what-will-you-get-container">
          <h1>
            What Will You Get: Understanding Your Vehicle's Carbon Footprint
          </h1>
          <div className="point">
            <h2>Accurate Emission Calculations:</h2>
            <p>
              Our advanced algorithms precisely analyze your vehicle's
              specifications and usage patterns to calculate its carbon dioxide
              emissions. We provide you with real-time, accurate data,
              empowering you to grasp the environmental impact of your travels.
            </p>
          </div>

          <div className="point">
            <h2>Environmental Awareness:</h2>
            <p>
              Knowledge is power, and being aware of your vehicle's carbon
              footprint is the first step towards reducing it. By understanding
              the environmental consequences of your driving habits, you can
              actively contribute to a greener planet. We provide comprehensive
              insights into how your driving choices impact the environment.
            </p>
          </div>
          <div className="point">
            <h2>Customized Tips for Greener Driving:</h2>
            <p>
              Want to reduce your carbon emissions? Our platform provides
              personalized tips and suggestions to help you adopt eco-friendly
              driving habits. From optimizing your route to maintaining your
              vehicle for optimal efficiency, we guide you toward minimizing
              your environmental impact.
            </p>
          </div>
          <div className="point">
            <h2>Climate Action and Responsibility:</h2>
            <p>
              By using our services, you are joining a community of
              environmentally conscious individuals taking action against
              climate change. Understanding your vehicle's carbon emissions
              fosters a sense of responsibility, encouraging you to advocate for
              sustainable transportation solutions and influence positive
              change.
            </p>
          </div>
          <div className="point">
            <h2>Contributing to a Sustainable Future:</h2>
            <p>
              Every informed choice you make contributes to a sustainable
              future. By utilizing our platform, you are directly contributing
              to global efforts to reduce carbon emissions. Your awareness and
              actions matter, and together, we can create a cleaner, healthier
              planet for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWillYouGet;
