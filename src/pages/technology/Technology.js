import React,{useState} from "react";

import desktop from "../../assets/Technologydesktop.png";
import mobile from "../../assets/Technologymobile.png";
import rocket from "../../assets/Technorocket.png";
import { Background, BackgroundDesktop } from "../home/Home.elements";

import {
  TechnologyContainer,
  Header,
  ArticleContainer,
  AltContainer,
  First,
  Second,
  ButtonContainer,
  SubjectContainer,
  Button
} from "../technology/Technology.elements";
const Technology = () => {

  const technologyData = [
    {
      header:"LAUNCH VEHICLE",
      altheader:"THE TERMINOLOGY…",
      content:<p>A launch vehicle or carrier rocket is a <br></br>rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>,
      img:'/dynamicassets/technology/launch.png'
    },
    {
      header:"LAUNCH VEHICLE",
      altheader:"THE TERMINOLOGY…",
      content:<p>A launch vehicle or carrier rocket is a <br></br>rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>,
      img:'/dynamicassets/technology/launch.png'
    },
    {
      header:"LAUNCH VEHICLE",
      altheader:"THE TERMINOLOGY…",
      content:<p>A launch vehicle or carrier rocket is a <br></br>rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>,
      img:'/dynamicassets/technology/launch.png'
    }
  ]

  const [slide, setSlide] =useState(0);

  const changeHandler = (i) => {
    setSlide(i);
  }
  return (
    <TechnologyContainer>
      <Background src={mobile} alt="mobile" />
      <BackgroundDesktop src={desktop} alt="desktop" />
      <ArticleContainer>
        <Header>
          <h1>
            <span>03</span>SPACE LAUNCH 101
          </h1>
        </Header>
        <AltContainer>
          <First>
            <img src={technologyData[slide].img} alt="rocked" />
          </First>
          <Second>
            <ButtonContainer>
            {technologyData.map((item,i) => {
                  return <Button active={(i === slide) ? true : false} onClick={() => changeHandler(i)}>{i+1} </Button>
              })}


             
            </ButtonContainer>

            <SubjectContainer>
              <h2>{technologyData[slide].altheader}</h2>
              <h1>{technologyData[slide].header}</h1>
              {technologyData[slide].content}
            </SubjectContainer>
          </Second>
        </AltContainer>
      </ArticleContainer>
    </TechnologyContainer>
  );
};

export default Technology;
