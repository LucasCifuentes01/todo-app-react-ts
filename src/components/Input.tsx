import { ChangeEventHandler } from "react";
import { InputStyled } from "../styled-components/components";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const Input = (props: Props) => (
  <InputStyled
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    autoFocus
  />
);

export default Input;
