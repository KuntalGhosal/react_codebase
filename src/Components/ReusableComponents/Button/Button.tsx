import { Button } from "@mui/material";
import styles from './Button.module.scss'
export interface IAppProps {
  ButtonText:string;
  ButtonVariant:"text" | "outlined" | "contained" | undefined;
}

export function ReusableButton (props: IAppProps) {
  const {ButtonText,ButtonVariant}=props;
  return (
    <Button className={styles.headerButton} variant={ButtonVariant} >{ButtonText}</Button>
  );
}
