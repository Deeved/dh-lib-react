import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button(props: Props) {
  return <button>{props.label}</button>;
}

export default Button;
