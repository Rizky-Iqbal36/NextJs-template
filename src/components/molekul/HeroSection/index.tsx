import React from 'react'
import Styled from './heroSection.module.scss'
import Video from '@assets/videos/data_video_green.mp4'

const HeroSection = () => {
  console.log(Video)
  return (
    <div className={Styled.heroContainer}>
      <div className={Styled.heroBg} style={{ opacity: 0.75 }}>
        <video className={Styled.videoBg} autoPlay loop muted src={Video} />
      </div>
      <div className={Styled.heroContent}>
        <h1 className={Styled.heroH1}>MAGIC SPELL</h1>
        <p className={Styled.heroP}>
          a perfect place for you who want to use magic
        </p>
        <p className={Styled.heroP}>
          build your own world and controll it with your own rules
        </p>
        <p className={Styled.heroP}>
          --I'm the one who take the controll of what i want to do--
        </p>
        <p className={Styled.heroP}>--unknown wizard</p>
      </div>
    </div>
  )
}

export default HeroSection
