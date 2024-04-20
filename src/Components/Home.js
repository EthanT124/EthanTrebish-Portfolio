import React from 'react';
import signatureImage from '../Images/signature.png'; // Import your signature PNG image

function Home() {
    return (
        <div className="Home" id="Home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <link href="https://fonts.googleapis.com/css2?family=Lusitana&display=swap" rel="stylesheet"/>
            <div className="container">
                <div style={{ height: 500, padding: 30 }}>
                    <section id="intro" className="intro-section text-center py-5">
                        <h1 className="display-3 font-weight-bold mb-4">Ethan Trebish</h1>
                        <h2 className="font-weight-light mb-5">Full-Stack Website Developer</h2>
                        <p className="lead">Constantly striving for new ways to craft dynamic & responsive websites for all users to enjoy.</p>
                        <img src={signatureImage} alt="Signature" className="signature-image" />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
