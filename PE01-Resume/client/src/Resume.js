import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Matthew Thibault</h1>
                <p>11925 SE 175th St. Apt. C306, Renton WA, 98058 | (845) 616-6905 | MatthewMThibault@gmail.com</p>
            </header>

            <section className="section">
                <h2>Accomplishments</h2>
                <div className="accomplishments">
                    <p>Worked on several team projects including research papers and data manipulation on criminal statistics in Seattle showing significant discrepancies between SRS and NIBRS reporting, as well as designing systems using AWS services.</p>
                    <p>Created a recipe book Android app and backend web service as part of a team, designed to find and store recipes using MERN stack.</p>
                    <p>Worked and mentored on a team to concurrently produce construction documents for multiple commercial and residential buildings.</p>
                </div>
            </section>

            <section className="section">
                <h2>Professional Experience</h2>
                <div className="experience">
                    <h3>Architectural Draftsman</h3>
                    <p>Lockwood Architecture, Kingston, NY | July 2016 – December 2023</p>
                    <p>Maintained excellent production rates for multiple job assignments from assignment inception to completion.</p>
                    <p>Mentored and lead aspiring architects by teaching design principles, building code requirements, and software skills. </p>
                    <p>Successfully produced architectural drawings sets for dozens of constructions, renovations, and additions in NY State.</p>
                    <p>Worked closely with other team members to meet client needs and deadlines.</p>

                    <h3>Software Development Intern</h3>
                    <p>SUNY Ulster, Stone Ridge, NY | January 2015 - May 2015</p>
                    <p>Worked with customers to get an idea of their app needs</p>
                    <p>Design UI elements for end-to-end Android app</p>
                    <p>Write prototype of app for customer to review</p>
                </div>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <p>Python, C#, Java, Git, AWS, SQL, React, NodeJS, Docker, Architectural AutoCAD</p>
                </div>
            </section>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>City University of Seattle, Seattle WA | May 2025</p>
                    <p>GPA: 3.7/4.0</p>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p>SUNY New Paltz, New Paltz NY | May 2015</p>
                    <p>GPA: 3.6/4.0</p>
                </div>
            </section>

            <section className="section">

            </section>
        </div>
    );
};

export default Resume;