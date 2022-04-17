import styled from "styled-components";

export const HomePageContainer = styled.section`
  width: 100%;
  color: white;
  justify-content: center;
  align-items:center;
  display: flex;
  
`;

export const Background = styled.img`
  width: 100%;
  height: 108vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  object-fit: cover;
  @media screen and (min-width: 1336px) {
    display: none;
  }
`;

export const BackgroundDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1336px) {
    display: flex;
    width: 102%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0px;

    z-index: -100;
    transform-rotate: rotate(10deg);
    object-fit: cover;
  }
`;

export const ArticleContainer = styled.article`
  display: flex;
  height: 100vh-96px;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (min-width: 767px) {
    margin-top: 6.625rem;
    margin-bottom: 5.625rem;
    padding-left: 10.125rem;
    padding-right: 10.125rem;
  }

  @media screen and (min-width: 1336px) {
    transition: all 3s ease;
    width: 100%;
    padding-left:10.313rem;
    padding-right:10.313rem;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    
    margin-bottom: 8.188rem;
    
    margin-top: 15.688rem;
  }
`;

export const First = styled.div`
  & h2 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 2.7px;

    color: #d0d6f9;
  }

  & h1 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 100px;
    /* identical to box height, or 125% */
    margin: 1rem 0;
    text-align: center;

    color: #ffffff;
  }

  & p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;

    color: #d0d6f9;
  }

  @media screen and (min-width: 768px) {
    & h2 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 3.375px;
    }

    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 150px;
      line-height: 150px;
      /* identical to box height, or 100% */
      margin: 1.5rem 0;
      color: #ffffff;
    }

    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      /* or 175% */

      text-align: center;

      color: #d0d6f9;
    }
  }

  @media screen and (min-width: 1336px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right:24.435rem;

    text-align: left;
    padding-left: 0;

  

    & h2 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      /* identical to box height */

      letter-spacing: 4.725px;

      color: #d0d6f9;
    }

    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 150px;
      line-height: 172px;
      /* identical to box height */
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      color: #ffffff;
    }

    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      text-align: left;
      /* or 178% */

      color: #d0d6f9;
    }
  }
`;

export const Second = styled.div`
  text-align: center;
  margin-top: 5.063rem;

  @media screen and (min-width: 767px) {
    margin-top: 9.75rem;
  }

  @media screen and (min-width: 1366px) {
    margin-top: 0;
  }
`;

export const ExploreButton = styled.button`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1.25px;
  border: none;
  color: #0b0d17;
  background:#FFFFFF;

  @media screen and (min-width: 767px) {
    width: 15.125rem;
    height: 15.125rem;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    /* identical to box height */

    letter-spacing: 2px;

    color: #0b0d17;
  }
  @media screen and (min-width: 1336px) {
    width: 17.125rem;
    height: 17.125rem;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    /* identical to box height */

    letter-spacing: 2px;

    color: #0b0d17;

    &:hover {
      outline: 88px solid rgba(255, 255, 255, 0.1);
   
     
      
      transition: all 0.5s ease;
      /* From https://css.glass */

      

      mix-blend-mode: normal;
    }
  }
`;
