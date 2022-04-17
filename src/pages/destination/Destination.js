import React, { useState,useEffect } from "react";
import backImg from "../../assets/Destination.png";
import { Background, BackgroundDesktop } from "../home/Home.elements";

import {
  DestinationContainer,
  ArticleContainer,
  First,
  Second,
  BtnContainer,
  Hr,
  InfoContainer,
  Btn
} from "./Destinaiton.elements";

const Destination = () => {
  const [slide, setSlide] = useState(0);
  
  

  

  const data = [
    {
        id:0,
      header: "MOON",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        img:'/dynamicassets/destination/moon.png',
      info: {
        distance: "384,400KM",
        time: "3 Days",
      },
    },
    {
        id:1,
      header: "MARS",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        img:'/dynamicassets/destination/mars.png',
      info: {
        distance: "54.600.000KM",
        time: "426 Days",
      },
    },

    {
        id:2,
      header: "EUROPA",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        img:'/dynamicassets/destination/europa.png',
      info: {
        distance: "628.300.000KM",
        time: "4904 Days",
      },
    },
    {
    id:3,
      header: "TITAN",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        img:'/dynamicassets/destination/titan.png',
      info: {
        distance: "1.432.000.000KM",
        time: " 9365 Days",
      },
    },
  ];

 
 

  const changeHandler = (i) => {

    setSlide(i);
   
   
    

  }



  return (
    <DestinationContainer>
      <Background src={backImg}></Background>
      <BackgroundDesktop src={backImg}></BackgroundDesktop>
      <ArticleContainer>
        <First>
          <h1>
            <span>01</span>PICK YOUR DESTINATION
          </h1>
          <img src={data[slide].img} alt={data[slide].header} ></img>
        </First>
        <Second>
          <BtnContainer>
            <ul>
              {data.map((item,i) => {
                  return <Btn active={(i === slide) ? true : false} onClick={() => changeHandler(i)}>{item.header} </Btn>
              })}
            </ul>
          </BtnContainer>
          <h1>{data[slide].header}</h1>
          <p>
            {data[slide].content}
          </p>
          <Hr></Hr>

          <InfoContainer>
            <div>
              <h1>AVG. DISTANCE</h1>
              <p>{data[slide].info.distance}</p>
            </div>
            <div>
              <h1>Est. travel time</h1>
              <p>{data[slide].info.time}</p>
            </div>
          </InfoContainer>
        </Second>
      </ArticleContainer>
    </DestinationContainer>
  );
};

export default Destination;
