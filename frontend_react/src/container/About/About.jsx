import React from 'react'

import './About.scss';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// import { images } from '../../constants';

//import client
import { urlFor, client } from '../../client';

// 2022-04-21
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';


// static data
// array to loop over 'about' section
/*const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01 },
  { title: 'Machine Learning', description: 'I am learning about GCN and that field', imgUrl: images.about02 },
  { title: 'CV Beginner', description: 'I am also interested in Computer Vision', imgUrl: images.about03 },
  { title: 'TOEFL Learner', description: 'I am a little bit struggling with English Study', imgUrl: images.about04 },
];*/



const About = () => {

  const [abouts, setAbouts] = useState([]);
  
  // run once about component loads 
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    
    client.fetch(query)
      .then((data) => setAbouts(data))
      
  }, []);
  



  return (
    ////<div>About</div>
    <>
      <h2 className='head-text'> 
        I Know That
        <span> Much Effort</span><br />
        means
        <span> The Best Results</span>
      </h2>


      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2> 
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p> 
          </motion.div>
        ))}
      </div>



    </>
  )
}

// export default AppWrap(About, 'about');
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);