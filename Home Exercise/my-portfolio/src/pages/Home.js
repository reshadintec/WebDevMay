import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, This is Ahmad</h2>
        <div className='prompt'>
          <p>A web developer with a passion for web design and learning.</p>
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