import styled from "styled-components";

export const CrewContainer = styled.section`
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  
 
`;

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 6.5rem;
  @media screen and (min-width: 767px) {
    padding-top: 2.5rem;
    padding-left: 2.406rem;
    padding-right: 2.406rem;
    padding-bottom: 0rem;
  }

  @media screen and (min-width: 1336px) {
    padding-top: 3.875rem;
    padding-left: 10.327rem;
    padding-right: 8.563rem;
    transition: all 3s ease;
  }
`;

export const AltContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: column-reverse;

    padding: 0 7.281rem;
  }

  @media screen and (min-width: 1336px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items:flex-start;
    padding: 0;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  & h1 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    color: #ffffff;
    & span {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;

      color: #ffffff;

      mix-blend-mode: normal;
      opacity: 0.25;
      margin-right: 1rem;
    }
  }

  @media screen and (min-width: 767px) {
    margin-bottom: 3.75rem;
    & h1 {
      text-align: left;
      ont-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      /* identical to box height */
      letter-spacing: 3.375px;
      text-transform: uppercase;
    }
    & span {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      /* identical to box height */
      letter-spacing: 3.375px;

      color: #ffffff;

      mix-blend-mode: normal;
      opacity: 0.25;
    }
  }

  @media screen and (min-width: 1336px) {
    position: absolute;
    
    top: 212px;
    left: 10.313rem;
    margin: 0;
   
    & h1 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;

      /* identical to box height */
      letter-spacing: 4.725px;
      text-transform: uppercase;

      & span {
        font-family: "Barlow Condensed";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        text-align: center;
        /* identical to box height */
        letter-spacing: 4.725px;
        margin-right: 1.5rem;
      }
    }
  }
`;

export const First = styled.div`
  width:100%;
  text-align: center;
  line-height: 0;

  & img {
    height: 13.875rem;
    width: 11.063rem;
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    & img {
      height: 33.25rem;
      width: 28.5rem;
      padding-left: 0.053rem;
      padding-right: 0.049rem;
      margin: 0;
    }
  }
  @media screen and (min-width: 1336px) {
    & img {
      width: 35.4rem;
      height: 43.875rem;
    }
  }
`;

export const Hr = styled.div`
  background-color: #383b4b;
  
  border: none;
  height: 1px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Second = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const Button = styled.button`


    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: white;
    border: none;
    opacity: ${({ active }) => (active ? "1" : "0.17")};
    margin: 0 0.5rem;
 
    @media screen and (min-width: 767px) {
      
    }

  @media screen and (min-width: 1336px) {
    width: 15px;
    height: 15px;
    margin-left: 0;
    margin-right: 1.5rem;
  }

`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;


  @media screen and (min-width: 767px) {
    margin: 2.5rem 0rem;
  }

  @media screen and (min-width: 1336px) {
    justify-content: flex-start;
    margin-top:7.5rem;
    margin-bottom:5.875rem;
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }

  & h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    /* identical to box height */
    text-align: center;
    text-transform: uppercase;

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
    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;

      /* identical to box height */
      text-align: center;
      text-transform: uppercase;

      color: #ffffff;

      mix-blend-mode: normal;
      opacity: 0.5;
    }

    & h2 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 46px;

      /* identical to box height */
      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      border-box: solid;
      /* or 175% */
      text-align: center;

      color: #d0d6f9;
    }
  }
  @media screen and (min-width: 1336px) {

    margin-top: 12.625rem;
    justify-content: center;
    align-items: flex-start;
    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 37px;

      /* identical to box height */
      text-transform: uppercase;

      color: #ffffff;

      mix-blend-mode: normal;
      opacity: 0.5;

      
    }

    & h2 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 64px;
      text-transform: uppercase;
      text-align:left;
      margin-top:0.938rem;
      margin-bottom:1.688rem;
    }
    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      text-align:left;
      padding-right:125px;
    }
  }
`;
