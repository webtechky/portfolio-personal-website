import './Experiences.css';
import theme_logo from '../../assets/infinity-design-img.png';
import { FaBriefcase, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaCogs, FaServer } from 'react-icons/fa';
import {CompanyDetails} from './ExperiencesDynamicContent'

function Experiences() {
    let CurrentYear = new Date().getFullYear();
    return (
        <div id="experience" className="experience">
            <div className='experience-detail'>
                <h1>Experience</h1>
                <img src={theme_logo} alt="About-Img" />
            </div>
            <div className="experience-details">
                <div className="experience-item">
                    <FaBriefcase size={30} color="#fff" />
                    <h3>{CompanyDetails.JobRole}</h3>
                    <p> {CompanyDetails.CompanyName} | {CurrentYear} - Present</p>
                    <p>{CompanyDetails.JobDescription}</p>
                </div>
            </div>

            <div className="skills">
                <div className="skills-category">
                    <h3>Frontend</h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <FaHtml5 size={40} color="#e34f26" />
                            <p>HTML</p>
                        </div>
                        <div className="skill-item">
                            <FaCss3Alt size={40} color="#264de4" />
                            <p>CSS</p>
                        </div>
                        <div className="skill-item">
                            <FaJsSquare size={40} color="#f7df1e" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <FaReact size={40} color="#61dbfb" />
                            <p>React JS</p>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Backend</h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <FaCogs size={40} color="#512BD4" />
                            <p>C#</p>
                        </div>
                        <div className="skill-item">
                            <FaServer size={40} color="#64c8f7" />
                            <p>Asp.Net (WebForms)</p>
                        </div>
                        <div className="skill-item">
                            <FaServer size={40} color="#64c8f7" />
                            <p>AdeNet Framework</p>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Database</h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <FaDatabase size={40} color="#cc2927" />
                            <p>SQL</p>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Tools</h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <FaCogs size={40} color="#7f8c8d" />
                            <p>SQL Server Management Studio</p>
                        </div>
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Testing</h3>
                    <div className="skills-container">
                        <div className="skill-item">
                            <FaCogs size={40} color="#7f8c8d" />
                            <p>Unit Testing</p>
                        </div>
                        <div className="skill-item">
                            <FaCogs size={40} color="#7f8c8d" />
                            <p>Integration Testing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
