import styled from "styled-components";

export const PageNotFoundStyled = styled.main`

  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  footer {
    margin-top: auto;
    margin-bottom: 50px;
  }
  
  .notFound__main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 200px;
    margin-bottom: -200px;
    z-index: 21;

    h1 {
      font-family: "MazzardM";
      font-size: 60px;
      color: #fff;
      margin-bottom: 10px;
    }
    
    h2 {
      font-family: "MazzardM";
      font-size: 30px;
      color: #fff;
      margin-bottom: 40px;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 55px;
      padding: 5px 25px;
      border-radius: 5px;
      overflow: hidden;
      background-color: #FF6C3D;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 600;
      line-height: 160%;
      color: #fff;
      transition: all 0.3s ease 0s;
    }
  }

`
