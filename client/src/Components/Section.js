import React from "react";
import Fade from 'react-reveal/Fade';

const Section = () => { 
 return (
        <section className="w-full h-screen">
             <Fade top>
                 <img className="object-cover w-full h-3/4 " src="../../../assets/heroSection.png" alt="banner" />
             </Fade>
        </section>
    )
}

export default Section;
