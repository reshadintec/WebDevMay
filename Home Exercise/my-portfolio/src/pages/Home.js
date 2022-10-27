import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <div className='typewriter'>
        <Typewriter
        onInit={(typewriter)=>{
          typewriter.typeString("Hi, I am Ahmad").pauseFor(1000).changeDeleteSpeed(100).deleteChars(5)
          .typeString("a Web Developer").pauseFor(2000).deleteChars(9)
          .typeString("Designer")
          .start();
        }}/>
        </div>
        {/* <h2>Hello, This is Ahmad</h2> */}
        <div className='prompt'>
          <p>with a passion for coding, web design and learning.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> HTML, CSS, BootStrap, MaterialUI, NPM, ReactJS, Laravel</span>
          </li>
          <li className='item'>
            <h2>Content Management Systems</h2>
            <span> WordPress, WooCommerce, Shopify,Joomla,Magento </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> NodeJS, ExpressJS, MYSQL, MongoDB, AWS Lightsail</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, C, C++, PHP</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home