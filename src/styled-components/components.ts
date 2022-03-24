import styled from "styled-components";

export const TaskContainerStyled = styled.section`
  background-color: ${(props) => props.theme.white};
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const TaskStyled = styled.div`
  color: ${(props) => props.theme.black};
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

export const InputStyled = styled.input`
  border: 0;
  margin-top: 1rem;
  padding: 1rem;
`;

export const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.white};
  &:hover {
    cursor: pointer;
  }
`;
