import React from 'react'

import './Header.scss';

import { motion } from 'framer-motion';
import { images } from '../../constants';


const Header = () => {
  return (
    ////<div>Header</div>
    <div className='app__header app__flex'>
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
      
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span> 👋 </span>
            <div style={{ marginLeft: 20 }}>
            
              <p className='p-text'> Hello! This is </p>
              <h1 className='head-text'> Guo Siqi</h1>

            </div>
          </div>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Header