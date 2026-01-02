import './ProfileContent.css';
import profile from '../../assets/Profile.jpg';
import Resume from '../../assets/Resume-PDF/Resume.PDF';
import { ProfileContents } from './ProfileDynamicContent';

function ProfileContent() {
    return (
        <>
            <div id="home" className='profile-content'>
                <img src={profile} alt="Profile" />
                <h1><span>I'm Parthiban</span>, {ProfileContents.ProfileDetails} </h1>
                <p>{ProfileContents.ProfileDescriptions}</p>
                <div className='profile-action'>
                    <div className='profile-connect'> <a href="#contact">Connect With Me</a> </div>
                    <div className='profile-resume'> <a href={Resume} download>My Resume</a></div>
                </div>
            </div>
        </>
    )
}

export default ProfileContent;