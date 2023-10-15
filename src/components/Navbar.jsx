import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Check for bodyScroll avoid unpredictible behavior 
  useEffect(() => {
    navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
    if(!bodyScroll){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'scroll';
    }      
  })

  const handleToggle = () => {
    setNavbarExpand(prev => !prev);
  }

  return (
    <div className='navbar-container'>
      <p className='navbar-title'>Toz Game</p>
      <div className='links-container'>
        <Link className='navbar-link' to="/" onClik="">Classic</Link>
        <Link className='navbar-link' to="/" onClik="">About</Link>
        <Link className='navbar-link' to="/" onClik="">Parameters</Link>

      </div>
    </div>
  )
}

export default Navbar