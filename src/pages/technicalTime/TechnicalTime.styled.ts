import styled from "styled-components";

export const TechnicalTimeStyled = styled.div`
  background: #000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  
  button {
    border: none;
    background: transparent;
    cursor: text;
    
  }

  &::after {
    position: absolute;
    content: "";
    width: 35.7%;
    padding: 0 0 35.7% 0;
    border-radius: 50%;
    top: 196px;
    left: 110px;
    background: rgba(0, 55, 128, 0.8);
    filter: blur(350px);
    z-index: 0;
  }

  button,
  h1 {
    text-align: center;
    font-size: 40px;
    color: #fff;
    position: relative;
    z-index: 1;
  }

  h2 {
    font-size: 28px;
    font-weight: 200;
    line-height: 1.3;
    text-align: center;
    color: #fff;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    z-index: 1;
  }
`
