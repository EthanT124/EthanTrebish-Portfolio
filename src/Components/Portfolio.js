import imgCWEB190prj1 from '../Images/Project 1/1.PNG';
import imgCWEB190prj2 from '../Images/Project 1/2.PNG';
import imgCWEB190prj3 from '../Images/Project 1/3.PNG';
import imgCWEB190prj4 from '../Images/Project 1/4.PNG';
import cwebprojimg1 from '../Images/CWEB Proj2/1.PNG';
import cwebprojimg2 from '../Images/CWEB Proj2/2.PNG';
import cwebprojimg3 from '../Images/CWEB Proj2/3.PNG';
import cwebprojimg4 from '../Images/CWEB Proj2/4.PNG';
import cwebprojimg5 from '../Images/CWEB Proj2/5.PNG';
import cwebprojimg6 from '../Images/CWEB Proj2/6.PNG';
import cwebprojimg7 from '../Images/CWEB Proj2/7.PNG';
import SOTL1 from '../Images/SOTL/1.PNG';
import SOTL2 from '../Images/SOTL/2.PNG';
import SOTL3 from '../Images/SOTL/3.PNG';
import SOTL4 from '../Images/SOTL/4.PNG';
import SOTL5 from '../Images/SOTL/5.PNG';
import SOTL6 from '../Images/SOTL/6.PNG';
import SOTL7 from '../Images/SOTL/7.PNG';
import SOTL8 from '../Images/SOTL/8.PNG';
import SOTL9 from '../Images/SOTL/9.PNG';
import SOTL10 from '../Images/SOTL/10.PNG';
import SOTL11 from '../Images/SOTL/11.PNG';
import SOTL12 from '../Images/SOTL/12.PNG';
import SOTL13 from '../Images/SOTL/13.PNG';
import SOTL14 from '../Images/SOTL/14.PNG';
import SOTL15 from '../Images/SOTL/15.PNG';
import SOTL16 from '../Images/SOTL/16.PNG';
import SOTL17 from '../Images/SOTL/17.PNG';
import SOTL18 from '../Images/SOTL/18.PNG';
import SOTL19 from '../Images/SOTL/19.PNG';
import SOTL20 from '../Images/SOTL/20.PNG';
import SOTL21 from '../Images/SOTL/21.PNG';
import ProjectItem from "./ProjectItem";
function Portfolio() {
    return (
        <div className="Portfolio" id="Portfolio">
           <div className="container">
               <div className="row">
                     <div>
                          <h1 className="pb-3 border-bottom border-white">Portfolio</h1>
                         <ProjectItem
                             imageNumber={21}
                                title="Stories of the Land"
                                image1={SOTL1}
                                desc1="Home Page"
                                image2={SOTL2}
                                desc2="Specimen Index"
                                image3={SOTL3}
                                desc3="Specimen Search"
                                image4={SOTL4}
                                desc4="Specimen Details Page"
                                image5={SOTL5}
                                desc5="French Translation Support"
                                image6={SOTL6}
                                desc6="Discovery Progress Bar"
                                image7={SOTL7}
                                desc7="Map"
                                image8={SOTL8}
                                desc8="Info Bubble"
                                image9={SOTL9}
                                desc9="Frequently Asked Questions"
                                image10={SOTL10}
                                desc10="Resources Page"
                                image11={SOTL11}
                                desc11="Feedback Submission"
                                image12={SOTL12}
                                desc12="Successful Microsoft Azure Authentication & Authorization"
                                image13={SOTL13}
                                desc13="Create Specimen"
                                image14={SOTL14}
                                desc14="Edit Specimen"
                                image15={SOTL15}
                                desc15="Delete Specimen"
                                image16={SOTL16}
                                desc16="Admin Portal"
                                image17={SOTL17}
                                desc17="Admin Portal Tech Overview"
                                image18={SOTL18}
                                desc18="Print QR Codes"
                                image19={SOTL19}
                                desc19="Admin Map Manager"
                                image20={SOTL20}
                                desc20="Admin Responds to Feedback"
                                image21={SOTL21}
                                desc21="Admin Photo Submission Manager"
                                description="Stories of the Land is a land-based learning initiative that connects the learner with the natural environment of the boreal forest. This website was developed using ASP.NET CORE MVC 7.0 with an SQLite Database and Microsoft Azure for Authentication"/>
                         <ProjectItem
                             imageNumber={7} // Corrected prop name to match casing
                             title="CWEB 280 Project 2 - Phone Marketplace"
                             image1={cwebprojimg1}
                             desc1="Phone Marketplace"
                             image2={cwebprojimg2}
                             desc2="Google OIDC Authentication using PassportJS"
                             image3={cwebprojimg3}
                             desc3="Add Phone Form"
                             image4={cwebprojimg4}
                             desc4="Activity Log"
                             image5={cwebprojimg5}
                             desc5="Request for Deletion Form"
                             image6={cwebprojimg6}
                             desc6="Error Validation"
                             image7={cwebprojimg7}
                             desc7="Form Submission Success"
                             description="This is my CWEB 280 Project 2 that utilizes a NodeJS & ExpressJS backend that communicates with the Cloud Pantry API"/>
                         <ProjectItem
                             imageNumber={4} // Corrected prop name to match casing
                             title="CWEB 190 - Tomas the Cook Redesign"
                             image1={imgCWEB190prj1}
                             desc1="Tomas the Cook Home Page"
                             image2={imgCWEB190prj2}
                             desc2="Catering Menu Page"
                             image3={imgCWEB190prj3}
                             desc3="Takeout and Delivery Menu"
                             image4={imgCWEB190prj4}
                             desc4="Contact Page"
                             description="During my CWEB 190 class, my partner and I were tasked with redisigning the Tomas the Cook website, we utilized bootstrap to its fullest extent and added a few features to the website"/>
                     </div>
               </div>
           </div>
        </div>
    );
}

export default Portfolio;