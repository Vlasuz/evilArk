import styled from "styled-components";

export const SidebarStyled = styled.aside`
  background: transparent;
  &:before {
    opacity: 0;
    -webkit-transition: all .3s ease;-moz-transition: all .3s ease;-ms-transition: all .3s ease;-o-transition: all .3s ease;transition: all .3s ease;
  }
  
  &.header-fixed {
    background: #051223;
    &:before {
      opacity: 1;
    }
  }
`
