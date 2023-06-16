import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="photo">
          <img src="images/iozsoy.png" alt="" className="iozsoy" />
        </div>

        <div className="explanation">
          <div className="left">
            <p>
              I am a Front End Developer who is open to development and loves to
              learn. <br />
              <br />
              The best way to learn is to retain existing knowledge and add new
              ones.
              <br />
              <br />
              I'm a highly motivated person who loves his work, and my attention
              to detail is an important strength that allows me to write clean,
              efficient and functional code. <br />
              <br />
              I can code HTML, CSS, Bootstrap, SCSS, JavaScript and version
              control with GitHub, and I aim to learn React in the short term.
              In the long term, I aim to become a Mobile Application Developer
              who is skilled in mobile interface development by learning React
              Native. <br />
              <br />
              I think coding should be done in a clean, functional, applicable
              and readable way.
              <br />
              <br />
              I can work both independently and with a team. I am a person who
              loves teamwork, values team spirit and is committed to this
              spirit. Great success can be achieved by teams with spirit. <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
