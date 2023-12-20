import styled from "styled-components";

export const AppStyled = styled.div`
  .input {
    display: flex;
    align-items: center;
    position: relative;
    input:focus + .placeholder {
      opacity: 0;
    } 
    
    .placeholder {
      position: absolute;
      font-size: 14px;
      opacity: .5;
      color: #fff;
      left: 16px;
      margin-bottom: 20px;
      -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
    }
  }
`
