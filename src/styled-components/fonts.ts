import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 48px;
  line-height: 1.3em;
  margin: 0;
`;

interface paragraphProps {
  lineThrough?: Boolean;
}

export const P = styled.p<paragraphProps>`
  font-size: 15px;
  line-height: 1.3em;
  color: ${(props) => props.theme.black};
  text-decoration: ${(props) => (props.lineThrough ? "line-through" : "")};
`;
