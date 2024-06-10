import React from "react";

export const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        WORK EXPERIENCE
      </h2>
      <div className="experience-bx" style={{ marginLeft: "20px" }}>
             <p>
               <strong>FULL STACK JAVA DEVELOPER INTERN (DyNextai.Tech)</strong>
             </p>
        <ul className="aboutExperience">
          <li>
            <span id="ex-details">Streamlined Contact Management System Development:</span> Developed an
            contact management system using Spring Boot, <br /> React.js, and MySQL,
            reducing page load time by 20%, enhancing user experience.
          </li> <br />
          <li>
            <span id="ex-details">Implemented Feature Enhancements:</span> Introduced new features and
            automated processes, resulting in a 15% <br /> increase in website
            functionality.
          </li><br />
          <li>
            <span id="ex-details">Collaborated with Cross-Functional Teams:</span> Worked with 3+ teams to
            gather requirements, define project scopes,<br /> and align with business
            objectives, ensuring project success.
          </li> <br />
          <li>
            <span id="ex-details">Resolved Technical Issues:</span> Addressed and resolved technical issues,
            improving overall website stability and user satisfaction.
          </li>
          <li> <br />
            <span id="ex-details">Enhanced Technical Skills:</span> Gained proficiency in frontend, backend,
            and database management, evidenced by successful <br /> project outcomes
            and positive user feedback.
          </li>
        </ul>
      </div>
    </div>
  );
};
