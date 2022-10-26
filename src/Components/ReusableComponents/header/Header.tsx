import { Box, Button, IconButton } from '@mui/material';
import FinalLogo from '../../../Assets/Final Logo.svg'
import styles from './Header.module.scss'
import CallIcon from '@mui/icons-material/Call';

export interface IHeaderProps {
  btnVarient: "text" | "outlined" | "contained" | undefined;
  btnText: string
}

export function Header(props: IHeaderProps) {
  const { btnVarient, btnText } = props
  return (
    <Box className={styles.container}>
      <img src={FinalLogo} alt="Final Logo" />
      <Box className={styles.btnContainer}>
        <Button className={styles.headerButton} variant={btnVarient}>{btnText}</Button>
        <Button aria-label="call"  className={styles.iconBtn} size="small">
          <CallIcon fontSize="inherit" onClick={()=>console.log("clicking")}/>
        </Button>
       
      </Box>

    </Box>
  );
}
