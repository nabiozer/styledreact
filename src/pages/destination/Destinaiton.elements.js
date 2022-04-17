import styled from "styled-components";

export const DestinationContainer = styled.section`
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
  display: flex;
`;

export const ArticleContainer = styled.article`
  display: flex;
  height: 100vh-96px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  margin-bottom: 3.563rem;
  text-align: center;

  @media screen and (min-width: 767px) {
    margin-top: 2.5rem;
    padding-left: 2.406rem;
    padding-right: 2.406rem;
    margin-bottom: 3.875rem;
  }

  @media screen and (min-width: 1336px) {
    transition: all 3s ease;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 4.75rem;
    padding-left: 10.25rem;
    padding-right: 10.25rem;
    margin-bottom: 7.375rem;
  }
`;

export const First = styled.div`
  
  padding-bottom: 1.625rem;
  

  & img {
    z-index: 10;
    width: 10.625rem;

    animation: rotation 6s ease-in-out;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }

  & h1 {
    text-align: left;
    margin-bottom: 2rem;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    color: #ffffff;
    padding-left: 0.835px;
    padding-right: 3.835px;
  
  }

  & span {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      color: #ffffff;
      margin-right: 1.125rem;

      opacity: 0.25;
    }

  @media screen and (min-width: 767px) {
    padding-bottom:0;
    width: 100%;
    & h1 {
      text-align: left;
      margin-bottom: 3.75rem;
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      /* identical to box height */
      letter-spacing: 3.375px;
      text-transform: uppercase;
      padding-left: 0;
    padding-right: 0;
    }

    & img {
      z-index: 10;
      margin-bottom: 3.313rem;
      width: 18.75rem;
    }

    & span {
      ont-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      /* identical to box height */
      letter-spacing: 3.375px;
      margin-right: 1.188rem;
      color: #ffffff;

      mix-blend-mode: normal;
      opacity: 0.25;
    }
  }

  @media screen and (min-width: 1336px) {
    & h1 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;

      /* identical to box height */
      letter-spacing: 4.725px;
      text-transform: uppercase;
      margin-bottom: 6.063rem;
      

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
        margin-right: 1.75rem;
      }
    }

    & img {
      width: 27.813rem;
      margin-bottom: 0;
      margin-left: 3.969rem;
    }
  }
`;

export const Second = styled.div`
  & h1 {
    margin-bottom: 1px;
    margin-top: 1.25rem;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
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

  @media screen and (min-width: 767px) {
    margin-left: 3.656rem;
    margin-right: 3.656rem;

    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 80px;
      line-height: 92px;

      /* identical to box height */
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }

    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      /* or 175% */

      color: #d0d6f9;
    }
  }
  @media screen and (min-width: 1336px) {
    justify-content: flex-start;

    text-align: left;
    margin-left: 157px;
    margin-right: 0;
    margin-top: 0;

    & h1 {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 100px;
      line-height: 115px;

      /* identical to box height */

      color: #ffffff;

      /* identical to box height */
      text-align: left;
      margin-top: 2.313rem;
      margin-bottom: 0.875rem;
    }

    & p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      text-align: left;
    }
  }
`;
export const Btn = styled.li`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 0.5rem;
  border-bottom: ${({ active }) => (active ? "3px solid white;" : "none")};
  /* identical to box height */
  letter-spacing: 2.3625px;
  color: ${({ active }) => (active ? "ffffff" : "#D2D6F9")};

  @media screen and (min-width: 767px) {
    cursor: pointer;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    padding-bottom: 0.75rem;
  }

  @media screen and (min-width: 1336px) {
    margin-right: 2.188rem;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  width: 100%;

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;

    margin-left: 2.813rem;
    margin-right: 2.813rem;
  }

  @media screen and (min-width: 767px) {
    & ul {
      margin-left: 9.094rem;
      margin-right: 9.094rem;
    }
  }
  @media screen and (min-width: 1336px) {
    & ul {
      margin-left: 0;
      margin-right: 0;
      text-align: left;
      justify-content: flex-start;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */
    text-align: center;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: #d0d6f9;
  }
  & p {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;

    /* identical to box height */
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 4.094rem;
    padding-right: 4.094rem;

    & h1 {
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      /* identical to box height */
      text-align: center;
      letter-spacing: 2.3625px;
      text-transform: uppercase;

      color: #d0d6f9;

      margin-top: 1.75rem;
    }

    & p {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;

      /* identical to box height */
      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
    & div {
      width: 13.5rem;
    }
  }

  @media screen and (min-width: 1366px) {
    padding: 0;
    justify-content: flex-start;
    & div  {
      width: 8.938rem;
      margin-right: 4.938rem;
      & h1 {
        ont-family: "Barlow Condensed";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        /* identical to box height */
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        text-align: left;
      }

      & p {
        text-align: left;
      }
    }
  }
`;

export const Hr = styled.hr`
  background-color: #383b4b;

  border: none;
  height: 1px;
  margin-top: 2rem;
  @media screen and (min-width: 767px) {
    margin-top: 3.063rem;
  }

  @media screen and (min-width: 1336px) {
    margin-top: 3.375rem;
    padding-right: 0.156rem;
  }
`;
