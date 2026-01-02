import './About.css'
import theme_logo from '../../assets/infinity-design-img.png'
import profile from '../../assets/Profile.jpg'
import {AboutDetails,AboutInformation} from './AboutDynamicContent.js';
function About()
{
    return(
        <>
            <div id='about' className='about'>
                <div className='about-title'>
                    <h1>About Me</h1>
                    <img src={theme_logo} alt="About-Img" />
                </div>
                <div className='about-section'>
                    <div className='about-left'>
                        <img src={profile} alt="Profile-images" />
                    </div>
                    <div className='about-right'>
                        <div className='about-para'>
                            <p>{AboutInformation.Intoduction}</p>
                            <p>{AboutInformation.Descriptions}</p>
                        </div>
                        <div className='about-skills'>
                            <div className='about-info-skils'>
                                <p>HTML</p> <hr style={{width:"100%"}}/>
                            </div>
                            <div className='about-info-skils'>
                                <p>CSS</p> <hr style={{width:"100%"}}/>
                            </div>
                            <div className='about-info-skils'>
                                <p>JS</p> <hr style={{width:"85%"}}/>
                            </div>
                            <div className='about-info-skils'>
                                <p>React JS</p> <hr style={{width:"80%"}}/>
                            </div>
                            <div className='about-info-skils'>
                                <p>Next JS</p> <hr style={{width:"70%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                   <div className="about-achivements">
                        <div className="about-achivement">
                            <h1>{AboutDetails.TotalNumberOfExperience}</h1>
                            <p>Experience</p>
                        </div><hr/>
                        <div className="about-achivement">
                            <h1>{AboutDetails.TotalProjectComplete}</h1>
                            <p>Projects Complete</p>
                        </div><hr/>
                        <div className="about-achivement">
                            <h1>{AboutDetails.TotalAwardsReceived}</h1>
                            <p>Awards Received at M&S</p>
                        </div><hr/>
                   </div>
                </div>
        </>
    )
}

export default About;