import linkedin from '../Images/Reach/Linkedin.png';
import github from '../Images/Reach/Github.png';
import resumePdf from '../Images/Ethan Trebish Resume.pdf'; // Import your resume PDF file

function Contact() {
    return (
        <div className="Contact" id="Contact">
            <h1 className="pb-3 border-bottom border-white">Reach out to me at the following:</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-2">
                        <h3>Github</h3>
                        <a className="p-3" href="https://github.com/EthanT124"><img src={github} style={{ width: '50px', height: '50px' }} alt="Github" /></a>
                    </div>
                    <div className="col-sm-2">
                        <h3>Linkedin</h3>
                        <a className="p-3" href="https://www.linkedin.com/in/ethan-trebish-4b0b0a1b0/"><img src={linkedin} style={{ width: '50px', height: '50px' }} alt="Linkedin" /></a>
                    </div>
                    <div className="col-sm-2">
                        <h3>Email</h3>
                        <a href="mailto:Ethantrebish1@gmail.com">Ethantrebish1@gmail.com</a>
                    </div>
                    <div className="col-sm-2">
                        <h3>Resume</h3>
                        <a href={resumePdf} download="EthanTrebishResume.pdf">Download my resume</a>
                    </div>
                    <p className="p-3" style={{ fontWeight: 'bold', color: "whitesmoke" }}>Last Edited: 17/04/2024</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
