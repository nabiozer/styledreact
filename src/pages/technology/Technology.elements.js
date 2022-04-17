import styled from "styled-components";

export const TechnologyContainer = styled.section`
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
  align-items: center;

  padding-bottom: 3.5rem;

  @media screen and (min-width: 767px) {
    padding-top: 2.5rem;
    padding-bottom: 6.083rem;
  }

  @media screen and (min-width: 1366px) {
    transition: all 3s ease;
    padding-top: 4.75rem;
    padding-left: 10.313rem;
    padding-bottom: 6.313rem;
  }
`;

export const Header = styled.header`
  
  & h1 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;

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
    width: 100%;

    & h1 {
      margin-left: 2.406rem;
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      /* identical to box height */
      letter-spacing: 3.375px;
      text-transform: uppercase;

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
  }
  @media screen and (min-width: 1366px) {
      padding-left:0.094rem;
    & h1 {
      margin-left: 0.094rem;
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;

      /* identical to box height */
      letter-spacing: 4.725px;

      color: #ffffff;
      & span {
       
        font-family: "Barlow Condensed";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;

        /* identical to box height */
        letter-spacing: 4.725px;

        color: #ffffff;

        mix-blend-mode: normal;
        opacity: 0.25;
      }
    }
  }
`;
export const AltContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1366px) {
    flex-direction: row-reverse;
    flew-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 1.625rem;
  }
`;
export const First = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: 10.625rem;
  & img {

   
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0 85%;
  }

  @media screen and (min-width: 768px) {
    margin-top: 3.75rem;
    height: 19.375rem;
  }

  @media screen and (min-width: 1366px) {
    width: 32.188rem;
    height: 32.938rem;
    margin-top: 0;
    & img {
      width: 32.188rem;
      height: 32.938rem;
    }
  }
`;

export const Second = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1366px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
export const Button = styled.button`
  margin: 0 0.5rem;
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  
  color: ${({ active }) => (!active ? "#ffffff" : "#0B0D17")};
  background: ${({ active }) => (active ? "ffffff" : "rgba(255, 255, 255, 0.04)")};
  border : ${({ active }) => (!active ? "1px solid rgba(255, 255, 255, 0.5)" : "none")};
  

  box-sizing: border-box;
 

  @media screen and (min-width: 768px) {
    
      width: 3.75rem;
      height: 3.75rem;

      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;

      /* identical to box height */
      text-align: center;
      letter-spacing: 1.5px;

      
    
  }

  @media screen and (min-width: 1366px) {
   width:5rem;
   height:5rem;
   margin:0;
  }
`;




export const ButtonContainer = styled.div`
  margin-top: 2.125rem;
  margin-bottom: 1.625rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 3.5rem;
    margin-bottom: 2.75rem;
    
  }

  @media screen and (min-width: 1366px) {
    flex-direction: column;
    margin: 0;
    justify-content: space-between;
    align-items: space-between;
    height: 18.875rem;
  }
`;

export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  & h2 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    text-align: center;
    letter-spacing: 2.3625px;

    color: #d0d6f9;
  }

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
    margin-top: 0.563rem;
    margin-bottom: 1rem;
  }

  & p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    /* or 167% */

    height: 150px;

    overflow: hidden;

    margin-bottom: 25px;
    color: #d0d6f9;
  }

  @media screen and (min-width: 768px) {
    padding: 0 9.688rem;
    & h2 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;

      color: #d0d6f9;
    }

    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 46px;

      /* identical to box height */
      text-align: center;
      text-transform: uppercase;

      margin: 1rem 0;
    }
    & br {
      display: none;
    }

    & p {
      margin-bottom: 0;
      height: 100%;
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      overflow: hidden;
      /* or 175% */
      text-align: center;

      color: #d0d6f9;
    }
  }
  @media screen and (min-width: 1366px) {
    padding: 0;
    
    margin-left: 5rem;
    margin-right: 8.125rem;
    justify-content: flex-start;

    & h2 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: left;
      width: 100%;
    }

    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 64px;
      text-align: left;
      margin-top: 0.688rem;
      margin-bottom: 1.063rem;
      width: 100%;
    }

    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      text-align: left;
      padding-right: 1.565rem;

      /* or 178% */

      color: #d0d6f9;
    }
  }
`;
