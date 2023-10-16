import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// Import assets
import DesktopHero1 from '../images/desktop-image-hero-1.jpg'
import DesktopHero2 from '../images/desktop-image-hero-2.jpg'
import DesktopHero3 from '../images/desktop-image-hero-3.jpg'

import MobileHero1 from '../images/mobile-image-hero-1.jpg'

import ImageDark from '../images/image-about-dark.jpg'
import ImageLight from '../images/image-about-light.jpg'

// Import Icon
import ArrowIcon from '../images/icon-arrow.svg'
import AngleLeft from '../images/icon-angle-left.svg'
import AngleRight from '../images/icon-angle-right.svg'




const Home = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  return (
      <div className='page-container'>

        <section className='top-container'>
          <div className='top-left-container'>
            <img className='top-left-image' src={screenWidth > 1025 ? DesktopHero1 : MobileHero1}></img>
          </div>

          <div className='btn-container'>
              <div className='btn'><img src={AngleLeft} alt="left-btn"></img></div>
              <div className='btn'><img src={AngleRight} alt="right-btn"></img></div>
          </div>

          <div className='top-right-container'>

            <div className='text-container'>
              
              <h1 className='page-title'>Discover innovative ways to decorate</h1>

              <p className='page-description'>
                We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing 
                your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
              </p>

              <Link className='shop-link' to='#'>
                <p>Shop now</p>
                <img className='link-img' alt='arrow' src={ArrowIcon}></img>
              </Link>
            </div>


          </div>
        </section>

        <section className='bottom-container'>
          <div className='bottom-left-container'>
            <img className='bottom-left-image' src={ImageDark}></img>
          </div>
          
          <div className='bottom-center-container'>

            <div className='bottom-text-container'>
              <h1 className='bottom-text-title'>About our furniture</h1>
              <p className='bottom-text-description'>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, 
                from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
              </p>
            </div>
          </div>

          <div className='bottom-right-container'>
            <img className='bottom-right-image' src={ImageLight}></img>
          </div>

        </section>

        <div ></div>

      </div>
  )
}

export default Home