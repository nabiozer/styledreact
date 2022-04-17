import React from 'react'
import {
    HomePageContainer,
    Background, 
    ArticleContainer,
    First,
    Second,
    ExploreButton,
    BackgroundDesktop
} from './Home.elements'

import backImg from "../../assets/Homepage.png"
import back2Img from "../../assets/Homepagedesktop.png"

const Home = () => {
  return (
    <HomePageContainer >
       
        <Background src={backImg}></Background>
        <BackgroundDesktop src={back2Img}></BackgroundDesktop>
        <ArticleContainer>
            <First>
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </First>
            
            <Second>
                <ExploreButton>EXPLORE</ExploreButton>
            </Second>
        </ArticleContainer>
    </HomePageContainer>
  )
}

export default Home