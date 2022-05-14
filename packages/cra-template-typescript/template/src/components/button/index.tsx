import React from 'react';
import { FC } from 'react';
import cass from 'classnames';
import styles from './index.module.css';


type ButtonProps = {
  className?: string;
  text: string | number;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const Button: FC<ButtonProps> = ({ className, text, onClick }) => {
  return <button className={cass(styles.button, className)} onClick={onClick}>{text}</button>
};

export default Button;
