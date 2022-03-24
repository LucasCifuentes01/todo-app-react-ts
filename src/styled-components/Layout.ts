import styled from "styled-components";

export const LayoutContainer = styled.main`
  margin: 0;
  background-color: ${props => props.theme.background};
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;