import React from 'react'
import "./Footer.css";


const Footer = () => {
  return (
    <div className='container1'>
        
           <div className='logo1'>
            <p className='bold'> Logo</p>
            <p>XYZ Tech Solutions is a leading provider of innovative technology solutions for businesses worldwide. Our mission is to empower businesses with cutting-edge tools to achieve digital transformation.</p>
            </div> 
            <div className='get'>
                <p className='bold'>Get in Touch</p>
                <div className='getslog'>
                <i class="fa-solid fa-phone"></i>
                <p>info@xyz.com</p>
                </div>
                <div className='getslog'>
                <i class="fa-solid fa-envelope"></i>
                <p>+91 1023456789</p>
                </div>
            </div>
            <div className='pages'>
                <p className='bold'>Pages</p>
                <p>- Home</p>
                <p>- Services</p>
                <p>- About Us</p>
                <p>- Contact Us</p>            </div>
        
      
    </div>
  )
}

export default Footer
