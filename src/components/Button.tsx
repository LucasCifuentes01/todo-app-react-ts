import { MouseEventHandler } from "react";
import { ButtonStyled } from "../styled-components/components";

type Props = {
  text: string;
  onClick?: MouseEventHandler;
};

const Button = (props: Props) => (
  <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
);

export default Button;
