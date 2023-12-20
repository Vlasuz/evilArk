import styled from "styled-components";

export const FooterStyled = styled.footer`
 .links {
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-top: 10px;
   a {
     display: block;
     font-size: 14px;
     color: #fff;
     opacity: .7;
     margin: 0 10px;
     &:hover {
       text-decoration: underline;
     }
   }
 }
`
