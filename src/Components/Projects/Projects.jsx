import './Projects.css'
import MyProjects from '../../assets/Projects-Modules/ProjectsFiles.js'
import Profileimg from '../../assets/infinity-design-img.png'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import {ProjectDescription}from './ProjectsDynamicConent.js'

function Projects() {
    const [visibleCount, setVisibleCount] = useState(4)

    const handleShowMore = () => {
        setVisibleCount(MyProjects.length) 
    }

    return (
        <div id="projects" className='my-Projects'>
            <div className="myproject-titles">
                <h1>{ProjectDescription.Projects}</h1>
                <img src={Profileimg} alt="Img" />
            </div>

            <div className='myProject-container'>
                {MyProjects.slice(0, visibleCount).map((item) => (
                    <div key={item.Project_Id} className="project-card">
                        <img src={item.Project_Image} alt={item.Project_Name} />

                        <div className="project-overlay">
                            <h3>{item.Project_Name}</h3>
                            <a
                                href={item.Project_GitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-btn"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < MyProjects.length && (
                <div className="myProject-showcase" onClick={handleShowMore}>
                    <p>Show More</p>
                    <FaArrowRight size={24} className="show-more-icon" />
                </div>
            )}
        </div>
    )
}

export default Projects
