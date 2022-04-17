import React,{useState} from "react";
import crew from "../../assets/creww.png";
import { Background, BackgroundDesktop } from "../home/Home.elements";

import {
  CrewContainer,
  ArticleContainer,
  Header,
  First,
  Second,
  ButtonContainer,
  MemberContainer,
  Hr,
  AltContainer,
  Button
} from "./Crew.elements";
const Crew = () => {

  const crewData = [
    {
      title:'COMMANDER',
      name:'Douglas Hurley',
      about:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img:'/dynamicassets/crew/douglashurley.png'
    },

    {
      title:'1',
      name:'a',
      about:'1Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img:'/dynamicassets/crew/douglashurley.png'
    },

    {
      title:'2',
      name:'b',
      about:'2Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img:'/dynamicassets/crew/douglashurley.png'
    },

    {
      title:'3',
      name:'c',
      about:'3Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img:'/dynamicassets/crew/douglashurley.png'
    },

  ];
  const [slide, setSlide] = useState(0);

  const changeHandler = (i) => {
    setSlide(i);
  }
  return (
    <CrewContainer>
      <Background src={crew} alt="crew"></Background>
      <BackgroundDesktop src={crew} alt="crewdektop"></BackgroundDesktop>
      <ArticleContainer>
        <Header>
          <h1>
            <span>02</span>Meet your crew
          </h1>
        </Header>
        <AltContainer>
          <First>
            <img src={crewData[slide].img} alt="crew"></img>
            <Hr></Hr>
          </First>
          <Second>
            <ButtonContainer>
              {crewData.map((item,i) => { 
                return <Button active={(i === slide) ? true : false} onClick={() => changeHandler(i)}></Button>
              })}
            </ButtonContainer>
            <MemberContainer>
              <h1>{crewData[slide].title}</h1>
              <h2>{crewData[slide].name}</h2>
              <p>
              {crewData[slide].about}
              </p>
            </MemberContainer>
          </Second>
        </AltContainer>
      </ArticleContainer>
    </CrewContainer>
  );
};

export default Crew;
